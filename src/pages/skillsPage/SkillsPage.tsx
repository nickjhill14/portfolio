import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { Alert, Chip, Stack } from "@mui/material";
import { Page } from "../../components/page/Page";
import { SkillInfo } from "../../domain";

type SkillsPageProps = {
  skillInfo: SkillInfo;
};

function SkillsPage({ skillInfo }: SkillsPageProps) {
  const { skills, languages } = skillInfo;

  return (
    <Page headingIcon={CodeOutlinedIcon} headingText="Skills">
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
      {/* TODO: Styling */}
      {languages.length === 0 ? (
        <Alert severity="warning">No languages provided</Alert>
      ) : (
        <Stack direction="row" spacing={1}>
          {languages.map(({ name, level }) => (
            // TODO: Create a Language component
            <>
              <p key={name}>{name}</p>
              <p key={level}>{level}</p>
            </>
          ))}
        </Stack>
      )}
    </Page>
  );
}

export { SkillsPage, type SkillsPageProps };
