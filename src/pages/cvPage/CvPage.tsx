import { Home } from "@mui/icons-material";
import { Alert, Button, Grid, Typography, useTheme } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { Suspense } from "react";
import { Await, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import { getCvLoader } from "../../api/loaders/portfolioLoader";
import { Section } from "../../components/section/Section";
import { SectionDetails } from "../../components/sectionDetails/SectionDetails";
import { SkillsSection } from "../../components/skillsSection/SkillsSection";
import { Cv } from "../../domain/cv";
import { CvPageSkeleton } from "../cvPageSkeleton/CvPageSkeleton";

function CvPage() {
  const cvLoaderData = useLoaderData<typeof getCvLoader>();
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
            CV
          </Typography>
        </Grid>
        <Suspense fallback={<CvPageSkeleton />}>
          <Await resolve={cvLoaderData.cv}>
            {({ cvSections, skillsInfo }: Cv) => (
              <Grid
                container
                spacing={2}
                p={2}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                {cvSections && cvSections.length > 0 ? (
                  cvSections?.map((cvSection) => (
                    <Grid item key={cvSection.title} xs={12} sm={6}>
                      <Section headingText={cvSection.title}>
                        {cvSection.items && cvSection.items.length > 0 ? (
                          cvSection.items.map((item, index) => (
                            <SectionDetails
                              heading={item.name}
                              location={item.location}
                              dateRange={item.dateRange}
                              details={item.details}
                              divider={
                                cvSection.items &&
                                index < cvSection.items.length - 1
                              }
                              key={item.name}
                            />
                          ))
                        ) : (
                          <Alert severity="warning">No items provided</Alert>
                        )}
                      </Section>
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Alert severity="warning">No CV sections provided</Alert>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <SkillsSection skillsInfo={skillsInfo} />
                </Grid>
              </Grid>
            )}
          </Await>
        </Suspense>
      </Grid>
    </>
  );
}

export { CvPage };
