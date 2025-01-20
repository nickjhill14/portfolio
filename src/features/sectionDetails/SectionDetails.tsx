import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CvSectionItem } from "../../domain/cv";

type SectionDetailsProps = {
  heading: string;
  divider?: boolean;
} & Pick<
  CvSectionItem,
  "link" | "location" | "dateRange" | "details" | "collapsibleDetails"
>;

export const SectionDetails = ({
  heading,
  link,
  location,
  dateRange,
  details,
  collapsibleDetails,
  divider,
}: SectionDetailsProps) => (
  <div className="flex flex-col gap-2">
    <div>
      <div className="flex gap-1 items-center">
        <h3 className="text-secondary">{heading}</h3>
        {link && (
          <Link href={link} isExternal underline="hover" showAnchorIcon />
        )}
      </div>
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
    {collapsibleDetails && collapsibleDetails.length > 0 && (
      <Accordion selectionMode="multiple">
        {collapsibleDetails.map((collapsibleDetail) => (
          <AccordionItem
            key={collapsibleDetail.title}
            title={collapsibleDetail.title}
            classNames={{ title: "text-sm" }}
          >
            <ul
              className={`flex flex-col gap-2 ${
                collapsibleDetail.details.length > 1 && "pl-4"
              }`}
            >
              {collapsibleDetail.details.map((detail) => (
                <li
                  key={detail}
                  className={`${
                    collapsibleDetail.details.length > 1 ? "list-disc" : ""
                  } text-small`}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    )}
    {divider && <Divider data-testid="divider" />}
  </div>
);
