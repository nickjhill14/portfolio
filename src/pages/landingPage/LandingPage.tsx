import { LinkedIn, VolunteerActivism } from "@mui/icons-material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import {
  Button,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { BasicInfo } from "../../domain/basicInfo";

const AcksButton = styled(IconButton)({
  position: "fixed",
  bottom: 0,
  right: 0,
});

function LandingPage() {
  const { name, role, email, phoneNumber, linkedIn, github } =
    useLoaderData() as BasicInfo;
  const navigate = useNavigate();
  const [openAcks, setOpenAcks] = useState(false);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2">
            {role}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <IconTypography
              icon={AlternateEmailOutlinedIcon}
              text={email}
              variant="body1"
            />
            <IconTypography
              icon={LocalPhoneOutlinedIcon}
              text={phoneNumber}
              variant="body1"
            />
            <IconTypography icon={LinkedIn} text={linkedIn} variant="body1" />
            <IconTypography icon={GitHubIcon} text={github} variant="body1" />
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
      <AcksButton
        onClick={() => setOpenAcks(true)}
        aria-label="View Acknowledgements"
      >
        <VolunteerActivism />
      </AcksButton>
      <Snackbar
        open={openAcks}
        action={
          <IconButton
            aria-label="Close Acknowledgements"
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

export { LandingPage };
