import { VolunteerActivism } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  Button,
  IconButton,
  Link,
  Snackbar,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ReactComponent as BearSvg } from "../../assets/bear.svg";
import { useColourMode } from "../../contexts/themeContext/ThemeContext";

function Footer() {
  const { toggleColourMode } = useColourMode();
  const [openAcks, setOpenAcks] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  function handleToggleColourMode() {
    setLightMode(!lightMode);
    toggleColourMode();
  }

  return (
    <Stack
      data-testid="footer"
      direction="row"
      justifyContent="space-between"
      pb={1}
    >
      <IconButton
        onClick={handleToggleColourMode}
        aria-label={lightMode ? "Toggle dark mode" : "Toggle light mode"}
      >
        {lightMode ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
      <IconButton
        LinkComponent={Link}
        aria-label="Visit repo"
        href="https://github.com/nickjhill14/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        onClick={() => setOpenAcks(true)}
        aria-label="View acknowledgements"
      >
        <VolunteerActivism />
      </IconButton>
      <Snackbar
        open={openAcks}
        action={
          <IconButton
            aria-label="Close acknowledgements"
            color="inherit"
            onClick={() => setOpenAcks(false)}
            component={Button}
          >
            <CloseIcon />
          </IconButton>
        }
        aria-label="Acknowledgements Snackbar"
        message={
          <Stack direction="row">
            <Typography>Thank you to the best pair, Kate</Typography>
            <SvgIcon
              component={BearSvg}
              overflow="visible"
              transform="scale(0.75) translate(0 -5)"
            />
          </Stack>
        }
      />
    </Stack>
  );
}

export { Footer };
