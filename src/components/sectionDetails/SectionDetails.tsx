import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { IconTypography } from "../iconTypography/IconTypography";

type SectionDetailsProps = {
  heading: string;
  location?: string;
  dateRange?: string;
  details?: string[];
  divider?: boolean;
};

function SectionDetails(props: SectionDetailsProps) {
  const { heading, location, dateRange, details, divider } = props;

  return (
    <Stack>
      <Typography variant="h6" component="h2">
        {heading}
      </Typography>
      <Stack direction="row" spacing={2}>
        {location && (
          <IconTypography
            icon={LocationOnOutlinedIcon}
            text={location}
            variant="caption"
            data-testid="location"
          />
        )}
        {dateRange && (
          <IconTypography
            icon={CalendarMonthOutlinedIcon}
            text={dateRange}
            variant="caption"
            data-testid="date-range"
          />
        )}
      </Stack>
      {details && details.length > 0 && (
        <List
          sx={details.length > 1 ? { listStyleType: "disc", pl: 2 } : {}}
          disablePadding
        >
          {details.map((detail) => (
            <ListItem
              key={detail}
              sx={details.length > 1 ? { display: "list-item" } : {}}
              disablePadding
            >
              <ListItemText
                disableTypography
                primary={<Typography variant="body2">{detail}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      )}
      {divider && <Divider data-testid="divider" />}
    </Stack>
  );
}

export { SectionDetails };
