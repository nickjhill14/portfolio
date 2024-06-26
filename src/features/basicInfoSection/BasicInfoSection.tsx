import { motion } from "framer-motion";
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
      {/* TODO: Move to shared animation file */}
      <motion.h1
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-4xl"
      >
        {name}
      </motion.h1>
      <motion.p
        initial={{ scale: 1, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 4 }}
        animate={{
          rotateZ: [0, 0, 0, 100, 0, 100, 0, 100, 0, 0, 0],
          opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          scale: 1,
        }}
        className="text-4xl"
      >
        👋
      </motion.p>
    </div>
    <motion.h2
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      viewport={{ once: true }}
      transition={{ duration: 5, delay: 1 }}
      className="text-2l text-secondary font-bold"
    >
      {role}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.5, delay: 1.5 }}
      animate={{ opacity: 1 }}
    >
      <BasicInfoLinks email={email} linkedIn={linkedIn} gitHub={gitHub} />
    </motion.div>
  </div>
);
