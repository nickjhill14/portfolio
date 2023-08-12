import { Stack, SvgIcon, Typography } from "@mui/material";
import { MuiIcon } from "../../utils/muiTypes";

type AchievementSectionProps = {
  heading: string;
  icon: MuiIcon;
  description: string;
};

function AchievementSection(props: AchievementSectionProps) {
  const { heading, icon, description } = props;

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <SvgIcon component={icon} fontSize="large" />
      <Stack>
        <Typography variant="h3">{heading}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Stack>
    </Stack>
  );
}

export { AchievementSection, type AchievementSectionProps };
