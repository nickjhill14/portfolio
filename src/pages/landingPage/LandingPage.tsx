import { Grid } from "@mui/material";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import { getBasicInfoLoader } from "../../api/loaders/portfolioLoader";
import { Footer } from "../../components/footer/Footer";
import { BasicInfo } from "../../domain/basicInfo";
import { BasicInfoSection } from "../../features/basicInfoSectiion/BasicInfoSection";
import { LandingPageLinks } from "../../features/landingPageLinks/LandingPageLinks";
import { LandingPageSkeleton } from "../../features/landingPageSkeleton/LandingPageSkeleton";

function LandingPage() {
  const basicInfoLoaderData = useLoaderData<typeof getBasicInfoLoader>();

  return (
    <Grid container minHeight="100vh" alignContent="space-between">
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          <Suspense fallback={<LandingPageSkeleton />}>
            <Await resolve={basicInfoLoaderData.basicInfo}>
              {(basicInfo: BasicInfo) => (
                <BasicInfoSection basicInfo={basicInfo} />
              )}
            </Await>
          </Suspense>
        </Grid>
        <Grid item xs={12}>
          <LandingPageLinks />
        </Grid>
      </Grid>
      <Grid container alignContent="end">
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export { LandingPage };
