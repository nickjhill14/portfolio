import { LinkedIn } from "@mui/icons-material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CreateIcon from "@mui/icons-material/Create";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { BasicInfo } from "../../domain/basicInfo";

function LandingPage() {
  const { name, role, email, phone, linkedIn, gitHub } =
    useLoaderData() as BasicInfo;
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={2} p={2} marginBottom={2}>
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
              text={phone}
              variant="body1"
            />
            <IconTypography icon={LinkedIn} text={linkedIn} variant="body1" />
            <IconTypography icon={GitHubIcon} text={gitHub} variant="body1" />
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
      <Footer />
    </>
  );
}

export { LandingPage };
