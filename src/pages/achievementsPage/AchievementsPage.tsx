import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Alert } from "@mui/material";
import { AchievementSection } from "../../components/achievementSection/AchievementSection";
import { Page } from "../../components/page/Page";
import { AchievementInfo } from "../../domain";

type AchievementsPageProps = {
  AchievementInfo: AchievementInfo;
};

function AchievementsPage({ AchievementInfo }: AchievementsPageProps) {
  return (
    <Page headingIcon={SchoolOutlinedIcon} headingText="Achievements">
      {/* TODO: Add horiztonal rules between all achievements except the last */}
      {AchievementInfo.length === 0 ? (
        <Alert severity="warning">No achievement sections provided</Alert>
      ) : (
        AchievementInfo.map(({ name, icon, description }) => (
          <AchievementSection
            heading={name}
            icon={icon}
            description={description}
            key={name}
          />
        ))
      )}
    </Page>
  );
}

export { AchievementsPage };
