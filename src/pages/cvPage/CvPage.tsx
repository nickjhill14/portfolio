import { Page } from "@/components/page/Page";
import { Typography } from "@/components/ui/typography";
import { cv } from "@/config/cv";
import { CvSection } from "@/features/cvSection/CvSection";

export const CvPage = () => (
  <Page showHomeButton>
    <Typography.H1>CV</Typography.H1>
    <CvSection cv={cv} />
  </Page>
);
