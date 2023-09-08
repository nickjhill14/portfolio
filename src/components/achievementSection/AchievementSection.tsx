import { Stack, SvgIcon, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { MuiIcon } from "../../utils/muiTypes";

type AchievementSectionProps = {
  heading: string;
  icon: MuiIcon;
  description: string;
  divider?: boolean;
};

function AchievementSection(props: AchievementSectionProps) {
  const { heading, icon, description, divider } = props;

  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <SvgIcon component={icon} fontSize="large" />
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
