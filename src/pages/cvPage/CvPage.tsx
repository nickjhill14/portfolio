import { Home } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { Button } from "@nextui-org/react";
import { Suspense } from "react";
import { Await, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import { getCvLoader } from "../../api/loaders/portfolioLoader";
import { Page } from "../../components/page/Page";
import { Section } from "../../components/section/Section";
import { Cv } from "../../domain/cv";
import { CvPageSkeleton } from "../../features/cvPageSkeleton/CvPageSkeleton";
import { SectionDetails } from "../../features/sectionDetails/SectionDetails";
import { SkillsSection } from "../../features/skillsSection/SkillsSection";

export const CvPage = () => {
  const cvLoaderData = useLoaderData<typeof getCvLoader>();

  const navigate = useNavigate();

  return (
    <Page>
      <Button
        startContent={<Home />}
        onPress={() => navigate("/")}
        color="primary"
        className="self-start"
      >
        Go Home
      </Button>
      <h1 className="text-4xl">CV</h1>
      <Suspense fallback={<CvPageSkeleton />}>
        <Await resolve={cvLoaderData.cv}>
          {({ cvSections, skillsInfo }: Cv) => (
            <div className="grid grid-rows-2 grid-cols-2 gap-4">
              {cvSections && cvSections.length > 0 ? (
                cvSections.map(({ title, items }) => (
                  <Section key={title} headingText={title}>
                    {items && items.length > 0 ? (
                      items.map((item, index) => (
                        <SectionDetails
                          heading={item.name}
                          location={item.location}
                          dateRange={item.dateRange}
                          details={item.details}
                          divider={items && index < items.length - 1}
                          key={item.name}
                        />
                      ))
                    ) : (
                      <Alert severity="warning">No items provided</Alert>
                    )}
                  </Section>
                ))
              ) : (
                <Alert severity="warning">No CV sections provided</Alert>
              )}
              <div className="col-span-full">
                <SkillsSection skillsInfo={skillsInfo} />
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </Page>
  );
};
