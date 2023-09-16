import { VolunteerActivism } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  Button,
  Grid,
  IconButton,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useColourMode } from "../../contexts/themeContext/ThemeContext";

const AcksButton = styled(IconButton)({
  position: "fixed",
  bottom: 0,
  right: 0,
});

const ToggleColourModeButton = styled(IconButton)({
  position: "fixed",
  bottom: 0,
  left: 0,
});

function LandingPageSkeleton() {
  const navigate = useNavigate();
  const { toggleColourMode } = useColourMode();
  const [openAcks, setOpenAcks] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleColourMode() {
    setDarkMode(!darkMode);
    toggleColourMode();
  }

  return (
    <>
      <Grid container spacing={2} p={2} marginBottom={2}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            <Skeleton data-testId="name-skeleton" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2">
            <Skeleton data-testId="role-skeleton" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Typography variant="body1">
              <Skeleton width={125} data-testId="email-skeleton" />
            </Typography>
            <Typography variant="body1">
              <Skeleton width={125} data-testId="phone-skeleton" />
            </Typography>
            <Typography variant="body1">
              <Skeleton width={125} data-testId="git-hub-skeleton" />
            </Typography>
            <Typography variant="body1">
              <Skeleton width={125} data-testId="linked-in-skeleton" />
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              onClick={() => navigate("/cv")}
              role="link"
              startIcon={<DescriptionIcon />}
              variant="contained"
            >
              View CV
            </Button>
            <Button
              onClick={() => navigate("/create")}
              role="link"
              startIcon={<CreateIcon />}
              variant="contained"
            >
              Create
            </Button>
            <Button
              component={Link}
              role="link"
              variant="contained"
              startIcon={<GitHubIcon />}
              to="https://github.com/nickjhill14/portfolio-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Repo
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <ToggleColourModeButton
        onClick={handleToggleColourMode}
        aria-label={darkMode ? "Toggle light mode" : "Toggle dark mode"}
      >
        {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </ToggleColourModeButton>
      <AcksButton
        onClick={() => setOpenAcks(true)}
        aria-label="View acknowledgements"
      >
        <VolunteerActivism />
      </AcksButton>
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
    </>
  );
}

export { LandingPageSkeleton };
