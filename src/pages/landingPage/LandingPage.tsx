import { Stack } from "@mui/material";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import { getBasicInfoLoader } from "../../api/loaders/portfolioLoader";
import { Page } from "../../components/page/Page";
import { BasicInfo } from "../../domain/basicInfo";
import { BasicInfoSection } from "../../features/basicInfoSectiion/BasicInfoSection";
import { LandingPageLinks } from "../../features/landingPageLinks/LandingPageLinks";
import { LandingPageSkeleton } from "../../features/landingPageSkeleton/LandingPageSkeleton";

function LandingPage() {
  const basicInfoLoaderData = useLoaderData<typeof getBasicInfoLoader>();

  return (
    <Page>
      <Stack spacing={2}>
        <Suspense fallback={<LandingPageSkeleton />}>
          <Await resolve={basicInfoLoaderData.basicInfo}>
            {(basicInfo: BasicInfo) => (
              <BasicInfoSection basicInfo={basicInfo} />
            )}
          </Await>
        </Suspense>
        <LandingPageLinks />
      </Stack>
    </Page>
  );
}

export { LandingPage };
