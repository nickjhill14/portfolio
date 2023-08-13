import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Stack, Typography } from "@mui/material";
import { IconTypography } from "../iconTypography/IconTypography";

type SectionProps = {
  heading: string;
  location: string;
  dateRange: string;
};

function Section({ heading, location, dateRange }: SectionProps) {
  return (
    <Stack>
      <Typography variant="h3">{heading}</Typography>
      <Stack direction="row" spacing={2}>
        <IconTypography
          icon={LocationOnOutlinedIcon}
          text={location}
          variant="subtitle1"
        />
        <IconTypography
          icon={CalendarMonthOutlinedIcon}
          text={dateRange}
          variant="subtitle1"
        />
      </Stack>
    </Stack>
  );
}

export { Section };
