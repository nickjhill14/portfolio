import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Container, Stack, Typography } from "@mui/material";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { BasicInfo } from "../../domain";

type LandingPageProps = {
  basicInfo: BasicInfo;
};

function LandingPage({ basicInfo }: LandingPageProps) {
  const { name, role, email, phoneNumber, linkedIn, github } = basicInfo;

  return (
    <Container>
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
    </Container>
  );
}

export { LandingPage };
