import { Cv } from "@/domain/cv";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/components/Link";
import { Calendar, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Chip } from "@/components/chip/Chip";
import { skillKeyColours } from "@/domain/skills";

interface CvSectionProps {
  cv: Cv;
}

export const CvSection = ({ cv }: CvSectionProps) => (
  <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
    {cv.cvSections.map(({ title, items }) => (
      <Card key={title}>
        <CardHeader>
          <CardTitle>
            <Typography.H2>{title}</Typography.H2>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div className="flex flex-col gap-2" key={item.name}>
              <div className="flex flex-col">
                <div className="flex gap-1 items-center">
                  {item.link ? (
                    <Link href={item.link} isExternal>
                      <Typography.H3 className="text-xl">
                        {item.name}
                      </Typography.H3>
                    </Link>
                  ) : (
                    <Typography.H3 className="text-xl">
                      {item.name}
                    </Typography.H3>
                  )}
                </div>
                <div className="flex flex-col gap-2 text-sm md:flex-row">
                  {item.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={15} />
                      <Typography.P>{item.location}</Typography.P>
                    </span>
                  )}
                  {item.dateRange && (
                    <span className="flex items-center gap-1">
                      <Calendar size={15} />
                      <Typography.P>{item.dateRange}</Typography.P>
                    </span>
                  )}
                </div>
              </div>
              {item.details?.length && (
                <Typography.List
                  className={
                    item.details.length <= 1 ? "list-none ml-0 my-0" : undefined
                  }
                >
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </Typography.List>
              )}
              {item.collapsibleDetails?.length && (
                <Accordion type="multiple">
                  {item.collapsibleDetails.map((collapsibleDetail) => (
                    <AccordionItem
                      key={collapsibleDetail.title}
                      value={collapsibleDetail.title}
                    >
                      <AccordionTrigger className="text-sm">
                        {collapsibleDetail.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <Typography.List>
                          {collapsibleDetail.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </Typography.List>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
              {index < items.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </CardContent>
      </Card>
    ))}
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>
          <Typography.H2>Skills</Typography.H2>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2 flex-wrap">
        {cv.skillsInfo.skills
          .toSorted(({ key: skillKey1 }, { key: skillKey2 }) =>
            skillKey1.localeCompare(skillKey2),
          )
          .map((skill) => (
            <Chip
              key={skill.name}
              text={skill.name}
              className={skillKeyColours[skill.key]}
            />
          ))}
      </CardContent>
    </Card>
  </div>
);
