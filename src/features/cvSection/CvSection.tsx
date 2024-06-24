import { Section } from "../../components/section/Section";
import { Cv } from "../../domain/cv";
import { SectionDetails } from "../sectionDetails/SectionDetails";
import { SkillsSection } from "../skillsSection/SkillsSection";

type CvSectionProps = {
  cv: Cv;
};

// TODO: Add tests and stories
export const CvSection = ({ cv }: CvSectionProps) => (
  <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4">
    {cv.cvSections.map(({ title, items }) => (
      <Section key={title} headingText={title}>
        {items.map((item, index) => (
          <SectionDetails
            heading={item.name}
            location={item.location}
            dateRange={item.dateRange}
            details={item.details}
            divider={items && index < items.length - 1}
            key={item.name}
          />
        ))}
      </Section>
    ))}
    <div className="col-span-full">
      <SkillsSection skillsInfo={cv.skillsInfo} />
    </div>
  </div>
);
