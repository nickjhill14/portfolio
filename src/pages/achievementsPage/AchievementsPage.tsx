import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Alert } from "@mui/material";
import { AchievementSection } from "../../components/achievementSection/AchievementSection";
import { Page } from "../../components/page/Page";
import { AchievementInfo } from "../../domain";

type AchievementsPageProps = {
  achievementInfo: AchievementInfo;
};

function AchievementsPage({ achievementInfo }: AchievementsPageProps) {
  return (
    <Page headingIcon={SchoolOutlinedIcon} headingText="Achievements">
      {achievementInfo.length === 0 ? (
        <Alert severity="warning">No achievement sections provided</Alert>
      ) : (
        achievementInfo.map(({ name, icon, description }, index) => (
          <AchievementSection
            heading={name}
            icon={icon}
            description={description}
            key={name}
            divider={index < achievementInfo.length - 1}
          />
        ))
      )}
    </Page>
  );
}

export { AchievementsPage };
