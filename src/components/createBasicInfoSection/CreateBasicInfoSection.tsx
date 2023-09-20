import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Button,
  Checkbox,
  ClickAwayListener,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { BasicInfo } from "../../domain/basicInfo";
import { downloadJson } from "../../utils/helpers/helpers";
import { Section } from "../section/Section";

const defaultBasicInfo: BasicInfo = {
  name: "",
  role: "",
  email: "",
  gitHub: "",
  linkedIn: "",
};

const CopyToClipboardButton = styled(IconButton)({
  alignSelf: "end",
});

function CreateBasicInfoSection() {
  const [basicInfo, setBasicInfo] = useState<BasicInfo>(defaultBasicInfo);
  const [openTooltip, setOpenTooltip] = useState(false);
  const [enablePhone, setEnablePhone] = useState(false);

  const basicInfoPreview = JSON.stringify(basicInfo, null, 2);

  async function copyToClipboard() {
    await navigator.clipboard.writeText(basicInfoPreview);
    setOpenTooltip(true);
  }

  function togglePhone() {
    enablePhone && setBasicInfo({ ...basicInfo, phone: undefined });
    setEnablePhone(!enablePhone);
  }

  return (
    <Grid
      container
      spacing={2}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.25,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Grid item xs={12} md={8}>
        <Section headingText="Create Basic Info">
          <TextField
            label="Name"
            value={basicInfo.name}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, name: event.target.value })
            }
          />
          <TextField
            label="Role"
            value={basicInfo.role}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, role: event.target.value })
            }
          />
          <TextField
            label="Email"
            value={basicInfo.email}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, email: event.target.value })
            }
          />
          <TextField
            label="GitHub"
            value={basicInfo.gitHub}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, gitHub: event.target.value })
            }
          />
          <TextField
            label="LinkedIn"
            value={basicInfo.linkedIn}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, linkedIn: event.target.value })
            }
          />
          <Stack direction="row" justifyContent="space-between" spacing={1}>
            <TextField
              label="Phone"
              disabled={!enablePhone}
              value={basicInfo.phone ?? ""}
              onChange={(event) =>
                setBasicInfo({ ...basicInfo, phone: event.target.value })
              }
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox onClick={togglePhone} />}
              label={enablePhone ? "Disable" : "Enable"}
            />
          </Stack>
        </Section>
      </Grid>
      <Grid item xs={12} md={4}>
        <Section headingText="Preview">
          <Stack justifyContent="space-between">
            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
              {basicInfoPreview}
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
            onClick={() => downloadJson("basic-info", basicInfoPreview)}
            variant="contained"
            startIcon={<DownloadIcon />}
          >
            Download
          </Button>
        </Section>
      </Grid>
    </Grid>
  );
}

export { CreateBasicInfoSection, defaultBasicInfo };
