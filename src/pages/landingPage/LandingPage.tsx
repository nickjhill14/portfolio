import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Button, Container, Grid, styled, Typography } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { BasicInfo } from "../../domain";

const LandingPageContainer = styled(Container)({
  height: "100vh",
  padding: "25px",
});

const GoToCvButton = styled(Button)({
  margin: "25px",
  alignSelf: "flex-end",
});

function LandingPage() {
  const { name, role, email, phoneNumber, linkedIn, github } =
    useLoaderData() as BasicInfo;
  const navigate = useNavigate();

  return (
    <LandingPageContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">{name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">{role}</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <IconTypography
            icon={AlternateEmailOutlinedIcon}
            text={email}
            variant="subtitle1"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <IconTypography
            icon={LocalPhoneOutlinedIcon}
            text={phoneNumber}
            variant="subtitle1"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <IconTypography
            // TODO: Change this to the LinkedIn icon
            icon={WorkOutlineOutlinedIcon}
            text={linkedIn}
            variant="subtitle1"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <IconTypography
            // TODO: Change this to the GitHub icon
            icon={TimelineOutlinedIcon}
            text={github}
            variant="subtitle1"
          />
        </Grid>
      </Grid>
      <GoToCvButton
        onClick={() => navigate("/cv")}
        role="link"
        startIcon={<DescriptionIcon />}
        variant="contained"
      >
        Go To CV
      </GoToCvButton>
    </LandingPageContainer>
  );
}

export { LandingPage };
