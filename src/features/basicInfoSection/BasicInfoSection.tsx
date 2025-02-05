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
        transition={{ duration: 0.5 }}
        className="text-5xl"
      >
        {name}
      </motion.h1>
      <motion.p
        initial={{ scale: 1, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
        animate={{
          rotateZ: [0, 0, 0, 100, 0, 100, 0, 100, 0, 0, 0],
          opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          scale: 1,
        }}
        className="text-5xl"
      >
        👋
      </motion.p>
    </div>
    <motion.h2
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
      whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      viewport={{ once: true }}
      transition={{ duration: 2.5, delay: 0.75 }}
      className="text-2xl text-primary-700 font-bold"
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
