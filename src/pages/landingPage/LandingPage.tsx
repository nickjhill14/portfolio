import { Image } from "@nextui-org/react";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import dogGif from "../../assets/dog.gif";
import { Page } from "../../components/page/Page";
import { basicInfo } from "../../config/basicInfo";
import { BasicInfoSection } from "../../features/basicInfoSection/BasicInfoSection";
import { LandingPageLinks } from "../../features/landingPageLinks/LandingPageLinks";

export const LandingPage = () => {
  const [isDogVisible, setIsDogVisible] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsDogVisible(false);
    }, 4500);
    return () => clearInterval(timer);
  });

  return (
    <Page>
      <BasicInfoSection basicInfo={basicInfo} />
      <LandingPageLinks />
      <div className="content-center self-center flex-grow pt-24">
        <AnimatePresence onExitComplete={() => setShowWelcome(true)}>
          {isDogVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <Image src={dogGif} isBlurred alt="Jumping dog" width={250} />
            </motion.div>
          )}
        </AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl">👋 Welcome!</h2>
          </motion.div>
        )}
      </div>
    </Page>
  );
};
