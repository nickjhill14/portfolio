import { useTheme } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { PropsWithChildren } from "react";
import { Footer } from "../footer/Footer";

export const Page = ({ children }: PropsWithChildren) => {
  const { scrollYProgress } = useScroll();

  const theme = useTheme();

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: theme.palette.primary.main,
          transformOrigin: "0%",
          scaleX: scrollYProgress,
        }}
      />
      <div>
        {children}
        <Footer />
      </div>
    </>
  );
};
