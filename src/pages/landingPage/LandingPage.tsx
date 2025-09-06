import { Page } from "@/components/page/Page";
import { basicInfo } from "@/config/basicInfo";
import { BasicInfoSection } from "@/features/basicInfoSection/BasicInfoSection";
import { LandingPageLinks } from "@/features/landingPageLinks/LandingPageLinks";

export const LandingPage = () => (
  <Page showHomeButton={false}>
    <BasicInfoSection basicInfo={basicInfo} />
    <div>
      <LandingPageLinks />
    </div>
  </Page>
);
