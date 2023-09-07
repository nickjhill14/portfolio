import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { Alert, Chip, Rating, Stack, Typography } from "@mui/material";
import { Page } from "../../components/page/Page";
import { SkillInfo } from "../../domain";

type SkillsSectionProps = {
  skillInfo: SkillInfo;
};

function SkillsSection({ skillInfo }: SkillsSectionProps) {
  const { skills, languages } = skillInfo;

  return (
    <Page headingIcon={CodeOutlinedIcon} headingText="Skills">
      <Stack spacing={1}>
        {skills.length === 0 ? (
          <Alert severity="warning">No skills provided</Alert>
        ) : (
          <Stack direction="row" spacing={1}>
            {skills.map((skill) => (
              // TODO: Add icons
              <Chip label={skill} variant="outlined" key={skill} />
            ))}
          </Stack>
        )}
        {languages.length === 0 ? (
          <Alert severity="warning">No languages provided</Alert>
        ) : (
          <Stack spacing={1}>
            {languages.map(({ name, level }) => (
              <Stack direction="row" key={name}>
                <Typography component="legend">{name}</Typography>
                {/* TODO: Style icon colours */}
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
      </Stack>
    </Page>
  );
}

export { SkillsSection, type SkillsSectionProps };
