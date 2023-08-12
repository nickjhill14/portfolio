import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Alert, Container } from "@mui/material";
import { AchievementSection } from "../../components/achievementSection/AchievementSection";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { AchievementInfo } from "../../domain";

type AchievementsPageProps = {
  AchievementInfo: AchievementInfo;
};

function AchievementsPage({ AchievementInfo }: AchievementsPageProps) {
  return (
    <Container>
      <IconTypography
        icon={SchoolOutlinedIcon}
        text="Achievements"
        variant="h2"
      />
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
    </Container>
  );
}

export { AchievementsPage };
