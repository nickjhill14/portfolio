import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import { getBasicInfoLoader } from "../../api/loaders/portfolioLoader";
import { Page } from "../../components/page/Page";
import { BasicInfo } from "../../domain/basicInfo";
import { BasicInfoSection } from "../../features/basicInfoSection/BasicInfoSection";
import { LandingPageLinks } from "../../features/landingPageLinks/LandingPageLinks";
import { LandingPageSkeleton } from "../../features/landingPageSkeleton/LandingPageSkeleton";

export const LandingPage = () => {
  const basicInfoLoaderData = useLoaderData<typeof getBasicInfoLoader>();

  return (
    <Page>
      <Suspense fallback={<LandingPageSkeleton />}>
        <Await resolve={basicInfoLoaderData.basicInfo}>
          {(basicInfo: BasicInfo) => <BasicInfoSection basicInfo={basicInfo} />}
        </Await>
      </Suspense>
      <LandingPageLinks />
    </Page>
  );
};
