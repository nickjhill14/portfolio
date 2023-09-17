import { Home } from "@mui/icons-material";
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
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../../components/section/Section";
import { BasicInfo } from "../../domain/basicInfo";
import { downloadJson } from "../../utils/helpers/helpers";

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

function CreatePortfolioPage() {
  const navigate = useNavigate();
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
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Button
          onClick={() => navigate("/")}
          role="link"
          startIcon={<Home />}
          variant="contained"
        >
          Go Home
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" component="h1">
          Create A Portfolio
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Section headingText="Add Basic Info">
          <TextField
            label="Name"
            variant="outlined"
            autoComplete="off"
            value={basicInfo.name}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, name: event.target.value })
            }
          />
          <TextField
            label="Role"
            variant="outlined"
            autoComplete="off"
            value={basicInfo.role}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, role: event.target.value })
            }
          />
          <TextField
            label="Email"
            variant="outlined"
            autoComplete="off"
            value={basicInfo.email}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, email: event.target.value })
            }
          />
          <TextField
            label="GitHub"
            variant="outlined"
            autoComplete="off"
            value={basicInfo.gitHub}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, gitHub: event.target.value })
            }
          />
          <TextField
            label="LinkedIn"
            variant="outlined"
            autoComplete="off"
            value={basicInfo.linkedIn}
            onChange={(event) =>
              setBasicInfo({ ...basicInfo, linkedIn: event.target.value })
            }
          />
          <Stack direction="row" justifyContent="space-between" spacing={1}>
            <TextField
              label="Phone"
              variant="outlined"
              autoComplete="off"
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
            <pre>{basicInfoPreview}</pre>
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

export { CreatePortfolioPage, defaultBasicInfo };
