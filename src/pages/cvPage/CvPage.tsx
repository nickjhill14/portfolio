import { Home } from "@mui/icons-material";
import { Alert, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { Await, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import { getCvLoader } from "../../api/loaders/portfolioLoader";
import { Button } from "../../components/button/Button";
import { Page } from "../../components/page/Page";
import { Section } from "../../components/section/Section";
import { Cv } from "../../domain/cv";
import { CvPageSkeleton } from "../../features/cvPageSkeleton/CvPageSkeleton";
import { SectionDetails } from "../../features/sectionDetails/SectionDetails";
import { SkillsSection } from "../../features/skillsSection/SkillsSection";

function CvPage() {
  const cvLoaderData = useLoaderData<typeof getCvLoader>();
  const navigate = useNavigate();

  return (
    <Page>
      <Button
        onClick={() => navigate("/")}
        role="link"
        startIcon={<Home />}
        text="Go Home"
      />
      <Typography variant="h2" component="h1">
        CV
      </Typography>
      <Suspense fallback={<CvPageSkeleton />}>
        <Await resolve={cvLoaderData.cv}>
          {({ cvSections, skillsInfo }: Cv) => (
            <Grid
              container
              spacing={2}
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
    </Page>
  );
}

export { CvPage };
