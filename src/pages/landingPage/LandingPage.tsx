import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Button, Container, Stack, styled, Typography } from "@mui/material";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { BasicInfo } from "../../domain";

const LandingPageContainer = styled(Container)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

const GoToCvButton = styled(Button)({
  margin: "25px;",
  alignSelf: "flex-end",
});

type LandingPageProps = {
  basicInfo: BasicInfo;
};

function LandingPage({ basicInfo }: LandingPageProps) {
  const { name, role, email, phoneNumber, linkedIn, github } = basicInfo;

  return (
    <LandingPageContainer>
      <Stack alignItems="center" justifyContent="center" flexGrow="1">
        <Typography variant="h1">{name}</Typography>
        <Typography variant="h2">{role}</Typography>
        <Stack direction="row" spacing={2}>
          <IconTypography
            icon={AlternateEmailOutlinedIcon}
            text={email}
            variant="subtitle1"
          />
          <IconTypography
            icon={LocalPhoneOutlinedIcon}
            text={phoneNumber}
            variant="subtitle1"
          />
          <IconTypography
            // TODO: Change this to the LinkedIn icon
            icon={WorkOutlineOutlinedIcon}
            text={linkedIn}
            variant="subtitle1"
          />
          <IconTypography
            // TODO: Change this to the GitHub icon
            icon={TimelineOutlinedIcon}
            text={github}
            variant="subtitle1"
          />
        </Stack>
      </Stack>
      <GoToCvButton
        href="#cv"
        startIcon={<DescriptionIcon />}
        variant="contained"
      >
        Go To CV
      </GoToCvButton>
    </LandingPageContainer>
  );
}

export { LandingPage };
