import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Divider } from "@nextui-org/divider";
import { IconTypography } from "../../components/iconTypography/IconTypography";

type SectionDetailsProps = {
  heading: string;
  location?: string;
  dateRange?: string;
  details?: string[];
  divider?: boolean;
};

export const SectionDetails = ({
  heading,
  location,
  dateRange,
  details,
  divider,
}: SectionDetailsProps) => (
  <div>
    <h4>{heading}</h4>
    <div>
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
    </div>
    {details && details.length > 0 && (
      <ul className="pl-4">
        {details.map((detail) => (
          <li key={detail} className={details.length > 1 ? "list-disc" : ""}>
            {detail}
          </li>
        ))}
      </ul>
    )}
    {divider && <Divider data-testid="divider" />}
  </div>
);
