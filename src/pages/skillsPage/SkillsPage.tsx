import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { Alert, Chip, Stack } from "@mui/material";
import { Page } from "../../components/page/Page";
import { SkillInfo } from "../../domain";

type SkillsPageProps = {
  skillInfo: SkillInfo;
};

function SkillsPage({ skillInfo }: SkillsPageProps) {
  return (
    <Page headingIcon={CodeOutlinedIcon} headingText="Skills">
      {skillInfo.length === 0 ? (
        <Alert severity="warning">No skills provided</Alert>
      ) : (
        <Stack direction="row" spacing={1}>
          {skillInfo.map((skill) => (
            <Chip label={skill} variant="outlined" key={skill} />
          ))}
        </Stack>
      )}
    </Page>
  );
}

export { SkillsPage };
