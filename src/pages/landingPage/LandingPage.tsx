import { LinkedIn } from "@mui/icons-material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Grid, Stack, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { LandingPageLinks } from "../../components/landingPageLinks/LandingPageLinks";
import { BasicInfo } from "../../domain/basicInfo";

function LandingPage() {
  const { name, role, email, phone, linkedIn, gitHub } =
    useLoaderData() as BasicInfo;

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
            {phone && (
              <IconTypography
                icon={LocalPhoneOutlinedIcon}
                text={phone}
                variant="body1"
              />
            )}
            <IconTypography icon={LinkedIn} text={linkedIn} variant="body1" />
            <IconTypography icon={GitHubIcon} text={gitHub} variant="body1" />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <LandingPageLinks />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export { LandingPage };
