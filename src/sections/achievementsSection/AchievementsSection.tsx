import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Alert } from "@mui/material";
import { AchievementSection } from "../../components/achievementSection/AchievementSection";
import { Section } from "../../components/section/Section";
import { AchievementInfo } from "../../domain";

type AchievementsSectionProps = {
  achievementInfo: AchievementInfo;
};

function AchievementsSection({ achievementInfo }: AchievementsSectionProps) {
  return (
    <Section headingIcon={SchoolOutlinedIcon} headingText="Achievements">
      {achievementInfo.length === 0 ? (
        <Alert severity="warning">No achievement sections provided</Alert>
      ) : (
        achievementInfo.map(({ name, description }, index) => (
          <AchievementSection
            heading={name}
            description={description}
            key={name}
            divider={index < achievementInfo.length - 1}
          />
        ))
      )}
    </Section>
  );
}

export { AchievementsSection };
