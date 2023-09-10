import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Stack, Typography } from "@mui/material";
import { IconTypography } from "../iconTypography/IconTypography";

type SectionDetailsProps = {
  heading: string;
  location: string;
  dateRange: string;
};

function SectionDetails({ heading, location, dateRange }: SectionDetailsProps) {
  return (
    <Stack>
      <Typography variant="h6" component="h2">
        {heading}
      </Typography>
      <Stack direction="row" spacing={2}>
        <IconTypography
          icon={LocationOnOutlinedIcon}
          text={location}
          variant="caption"
        />
        <IconTypography
          icon={CalendarMonthOutlinedIcon}
          text={dateRange}
          variant="caption"
        />
      </Stack>
    </Stack>
  );
}

export { SectionDetails };
