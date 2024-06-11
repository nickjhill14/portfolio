import { Grid, useTheme } from "@mui/material";
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
          scaleX: scrollYProgress
        }}
      />
      <Grid container minHeight="100vh" alignContent="space-between">
        <Grid container spacing={2} p={2}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
        <Grid container alignContent="end">
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
