import { Page } from "../../components/page/Page";
import { cv } from "../../config/cv";
import { CvSection } from "../../features/cvSection/CvSection";

export const CvPage = () => (
  <Page showHomeButton>
    <h1 className="text-4xl">CV</h1>
    <CvSection cv={cv} />
  </Page>
);
