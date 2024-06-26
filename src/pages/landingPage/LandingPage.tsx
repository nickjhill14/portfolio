import { motion } from "framer-motion";
import { Page } from "../../components/page/Page";
import { basicInfo } from "../../config/basicInfo";
import { BasicInfoSection } from "../../features/basicInfoSection/BasicInfoSection";
import { LandingPageLinks } from "../../features/landingPageLinks/LandingPageLinks";

export const LandingPage = () => (
  <Page>
    <BasicInfoSection basicInfo={basicInfo} />
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.5, delay: 1.5 }}
      animate={{ opacity: 1 }}
    >
      <LandingPageLinks />
    </motion.div>
  </Page>
);
