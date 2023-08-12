import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { Alert, Chip, Container, Stack } from "@mui/material";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { SkillInfo } from "../../domain";

type SkillsPageProps = {
  skillInfo: SkillInfo;
};

function SkillsPage({ skillInfo }: SkillsPageProps) {
  return (
    // TODO: Create a Page component
    <Container>
      <IconTypography icon={CodeOutlinedIcon} text="Skills" variant="h2" />
      {skillInfo.length === 0 ? (
        <Alert severity="warning">No skills provided</Alert>
      ) : (
        <Stack direction="row" spacing={1}>
          {skillInfo.map((skill) => (
            <Chip label={skill} variant="outlined" key={skill} />
          ))}
        </Stack>
      )}
    </Container>
  );
}

export { SkillsPage };
