import { Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

type AchievementSectionProps = {
  heading: string;
  description: string;
  divider?: boolean;
};

function AchievementSection(props: AchievementSectionProps) {
  const { heading, description, divider } = props;

  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack>
          <Typography variant="h5" component="h3">
            {heading}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Stack>
      </Stack>
      {divider && <Divider data-testid="divider" />}
    </Stack>
  );
}

export { AchievementSection, type AchievementSectionProps };
