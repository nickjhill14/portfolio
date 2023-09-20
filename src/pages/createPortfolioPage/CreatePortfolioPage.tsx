import { Home } from "@mui/icons-material";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CreateBasicInfoSection } from "../../components/createBasicInfoSection/CreateBasicInfoSection";

function CreatePortfolioPage() {
  const navigate = useNavigate();
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
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/")}
            role="link"
            startIcon={<Home />}
            variant="contained"
          >
            Go Home
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Create A Portfolio
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CreateBasicInfoSection />
        </Grid>
      </Grid>
    </>
  );
}

export { CreatePortfolioPage };
