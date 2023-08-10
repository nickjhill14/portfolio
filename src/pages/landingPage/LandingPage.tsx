import { Container, Stack, Typography } from "@mui/material";
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
        <Typography variant="subtitle1">{email}</Typography>
        <Typography variant="subtitle1">{phoneNumber}</Typography>
        <Typography variant="subtitle1">{linkedIn}</Typography>
        <Typography variant="subtitle1">{github}</Typography>
      </Stack>
    </Container>
  );
}

export { LandingPage };
