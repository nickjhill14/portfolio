import { motion, Variants } from "framer-motion";
import { Section } from "../../components/section/Section";
import { Cv } from "../../domain/cv";
import { SectionDetails } from "../sectionDetails/SectionDetails";
import { SkillsSection } from "../skillsSection/SkillsSection";

type CvSectionProps = {
  cv: Cv;
};

// TODO: Add tests and stories
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
        <Section key={title} headingText={title}>
          {items.map((item, index) => (
            <motion.div variants={sectionAnimation} key={item.name}>
              <SectionDetails
                heading={item.name}
                location={item.location}
                dateRange={item.dateRange}
                details={item.details}
                divider={items && index < items.length - 1}
              />
            </motion.div>
          ))}
        </Section>
      ))}
      <motion.div variants={sectionAnimation} className="col-span-full">
        <SkillsSection skillsInfo={cv.skillsInfo} />
      </motion.div>
    </motion.div>
  );
};
