import { Stack, Typography } from "@mui/material";
import { Education } from "../../domain";

type EducationSectionProps = {
  education: Education;
};

function EducationSection({ education }: EducationSectionProps) {
  const { qualification, institution, dates } = education;

  return (
    <Stack>
      <Typography variant="h3">{qualification}</Typography>
      <Stack direction="row" spacing={2}>
        <Typography variant="subtitle1">{institution}</Typography>
        <Typography variant="subtitle1">{dates}</Typography>
      </Stack>
    </Stack>
  );
}

export { EducationSection };
