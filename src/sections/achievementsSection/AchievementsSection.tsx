import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Alert } from "@mui/material";
import { Section } from "../../components/section/Section";
import { SectionDetails } from "../../components/sectionDetails/SectionDetails";
import { AchievementInfo } from "../../domain/cvInfo";

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
          <SectionDetails
            heading={name}
            details={[description]}
            divider={index < achievementInfo.length - 1}
            key={name}
          />
        ))
      )}
    </Section>
  );
}

export { AchievementsSection };
