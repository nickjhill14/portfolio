import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { BasicInfo } from "../../domain";

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
          <IconTypography
            // TODO: Change this to the GitHub icon
            icon={TimelineOutlinedIcon}
            text={github}
            variant="body1"
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => navigate("/cv")}
          role="link"
          startIcon={<DescriptionIcon />}
          variant="contained"
        >
          Go To CV
        </Button>
      </Grid>
    </Grid>
  );
}

export { LandingPage };
