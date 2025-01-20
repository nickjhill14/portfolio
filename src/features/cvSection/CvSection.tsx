import { motion, Variants } from "framer-motion";
import { Section } from "../../components/section/Section";
import { Cv } from "../../domain/cv";
import { SectionDetails } from "../sectionDetails/SectionDetails";
import { SkillsSection } from "../skillsSection/SkillsSection";

type CvSectionProps = {
  cv: Cv;
};

export const CvSection = ({ cv }: CvSectionProps) => {
  const containerAnimation: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const sectionAnimation: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4"
    >
      {cv.cvSections.map(({ title, items }) => (
        <motion.div variants={sectionAnimation} key={title}>
          <Section headingText={title}>
            {items.map((item, index) => (
              <SectionDetails
                heading={item.name}
                link={item.link}
                location={item.location}
                dateRange={item.dateRange}
                details={item.details}
                collapsibleDetails={item.collapsibleDetails}
                divider={items && index < items.length - 1}
                key={item.name}
              />
            ))}
          </Section>
        </motion.div>
      ))}
      <motion.div variants={sectionAnimation} className="col-span-full">
        <SkillsSection skillsInfo={cv.skillsInfo} />
      </motion.div>
    </motion.div>
  );
};
