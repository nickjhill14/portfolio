import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Alert, Chip, Divider, Rating, Stack, Typography } from "@mui/material";
import { SkillsInfo } from "../../domain/cv";
import { Section } from "../section/Section";

type SkillsSectionProps = {
  skillsInfo: SkillsInfo;
};

function SkillsSection({ skillsInfo }: SkillsSectionProps) {
  const { skills, languages } = skillsInfo;

  return (
    <Section headingText="Skills">
      {skills.length === 0 ? (
        <Alert severity="warning">No skills provided</Alert>
      ) : (
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {skills.map(({ name }) => (
            <Chip label={name} variant="outlined" key={name} />
          ))}
        </Stack>
      )}
      <Divider />
      {languages.length === 0 ? (
        <Alert severity="warning">No languages provided</Alert>
      ) : (
        <Stack spacing={1}>
          {languages.map(({ name, level }) => (
            <Stack direction="row" key={name}>
              <Typography component="legend">{name}</Typography>
              <Rating
                name="read-only"
                value={level}
                icon={<CircleIcon />}
                emptyIcon={<CircleOutlinedIcon />}
                readOnly
              />
            </Stack>
          ))}
        </Stack>
      )}
    </Section>
  );
}

export { SkillsSection, type SkillsSectionProps };
