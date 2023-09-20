import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Button,
  ClickAwayListener,
  IconButton,
  Stack,
  Tooltip,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { downloadJson } from "../../utils/helpers/helpers";
import { Section } from "../section/Section";

const CopyToClipboardButton = styled(IconButton)({
  alignSelf: "end",
});

type ConfigPreviewProps = {
  json: string;
  fileName: string;
};

function ConfigPreview({ json, fileName }: ConfigPreviewProps) {
  const [openTooltip, setOpenTooltip] = useState(false);

  async function copyToClipboard() {
    await navigator.clipboard.writeText(json);
    setOpenTooltip(true);
  }

  return (
    <Section headingText="Preview">
      <Stack justifyContent="space-between">
        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
          {json}
        </pre>
        <ClickAwayListener onClickAway={() => setOpenTooltip(false)}>
          <Tooltip
            open={openTooltip}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Copied to clipboard"
          >
            <CopyToClipboardButton
              aria-label="Copy to clipboard"
              onClick={copyToClipboard}
            >
              <ContentCopyIcon />
            </CopyToClipboardButton>
          </Tooltip>
        </ClickAwayListener>
      </Stack>
      <Button
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => downloadJson(fileName, json)}
        variant="contained"
        startIcon={<DownloadIcon />}
      >
        Download
      </Button>
    </Section>
  );
}

export { ConfigPreview };
