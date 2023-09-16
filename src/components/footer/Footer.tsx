import { VolunteerActivism } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button, IconButton, Snackbar, Stack } from "@mui/material";
import { useState } from "react";
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
      data-testId="footer"
      direction="row"
      justifyContent="space-between"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
    >
      <IconButton
        onClick={handleToggleColourMode}
        aria-label={lightMode ? "Toggle dark mode" : "Toggle light mode"}
      >
        {lightMode ? <DarkModeIcon /> : <LightModeIcon />}
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
        message="Thank you to the best pair, Kate"
        aria-label="Acknowledgements Snackbar"
      />
    </Stack>
  );
}

export { Footer };
