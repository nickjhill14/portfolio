import { AnimatePresence, motion } from "framer-motion";
import { BasicInfo } from "../../domain/basicInfo";
import { BasicInfoLinks } from "./BasicInfoLinks";

type BasicInfoSectionProps = {
  basicInfo: BasicInfo;
};

export const BasicInfoSection = ({
  basicInfo: { name, role, email, linkedIn, gitHub },
}: BasicInfoSectionProps) => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-2">
      <h1 className="text-4xl">{name}</h1>
      <AnimatePresence>
        <motion.p
          initial={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 2 }}
          animate={{
            rotateZ: [0, 0, 0, 100, 0, 100, 0, 100, 0, 0, 0],
            opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            scale: 1,
          }}
          className="text-4xl"
        >
          👋
        </motion.p>
      </AnimatePresence>
    </div>
    <h2 className="text-2l text-secondary font-bold">{role}</h2>
    <BasicInfoLinks email={email} linkedIn={linkedIn} gitHub={gitHub} />
  </div>
);
