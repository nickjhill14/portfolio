import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { BasicInfo } from "../../domain/basicInfo";

function LandingPage() {
  const { name, role, email, phoneNumber, linkedIn, github } =
    useLoaderData() as BasicInfo;
  const navigate = useNavigate();

  return (
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
          <IconTypography
            // TODO: Change this to the LinkedIn icon
            icon={WorkOutlineOutlinedIcon}
            text={linkedIn}
            variant="body1"
          />
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
  );
}

export { LandingPage };
