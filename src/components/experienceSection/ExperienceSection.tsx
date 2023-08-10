import { Stack, Typography } from "@mui/material";
import { Experience } from "../../domain";

type ExperienceSectionProps = {
  experience: Experience;
};

function ExperienceSection({ experience }: ExperienceSectionProps) {
  const { name, location, dates } = experience;

  return (
    <Stack>
      <Typography variant="h3">{name}</Typography>
      <Stack direction="row" spacing={2}>
        <Typography variant="subtitle1">{location}</Typography>
        <Typography variant="subtitle1">{dates}</Typography>
      </Stack>
    </Stack>
  );
}

export { ExperienceSection };
