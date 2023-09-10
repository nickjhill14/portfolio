import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { IconTypography } from "../iconTypography/IconTypography";

type SectionDetailsProps = {
  heading: string;
  location: string;
  dateRange: string;
  details?: string[];
};

function SectionDetails({
  heading,
  location,
  dateRange,
  details,
}: SectionDetailsProps) {
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
      {details && details.length > 0 && (
        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {details.map((detail) => (
            <ListItem key={detail} sx={{ display: "list-item" }} disablePadding>
              <ListItemText
                disableTypography
                primary={<Typography variant="body2">{detail}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
}

export { SectionDetails };
