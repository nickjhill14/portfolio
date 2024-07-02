import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Divider } from "@nextui-org/divider";

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
  <div className="flex flex-col gap-2">
    <div>
      <h3 className="text-secondary">{heading}</h3>
      <div className="flex gap-4">
        {location && (
          <div className="flex gap-1 items-center text-small">
            <LocationOnOutlinedIcon />
            <p>{location}</p>
          </div>
        )}
        {dateRange && (
          <div className="flex gap-1 items-center text-small">
            <CalendarMonthOutlinedIcon />
            <p>{dateRange}</p>
          </div>
        )}
      </div>
    </div>
    {details && details.length > 0 && (
      <ul className={`flex flex-col gap-2 ${details.length > 1 && "pl-4"}`}>
        {details.map((detail) => (
          <li
            key={detail}
            className={`${details.length > 1 ? "list-disc" : ""} text-small`}
          >
            {detail}
          </li>
        ))}
      </ul>
    )}
    {divider && <Divider data-testid="divider" />}
  </div>
);
