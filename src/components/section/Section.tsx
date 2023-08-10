import { Stack, Typography } from "@mui/material";

type SectionProps = {
  heading: string;
  location: string;
  dateRange: string;
};

function Section({ heading, location, dateRange }: SectionProps) {
  return (
    <Stack>
      <Typography variant="h3">{heading}</Typography>
      <Stack direction="row" spacing={2}>
        <Typography variant="subtitle1">{location}</Typography>
        <Typography variant="subtitle1">{dateRange}</Typography>
      </Stack>
    </Stack>
  );
}

export { Section, type SectionProps };
