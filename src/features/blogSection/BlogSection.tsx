import { Section } from "../../components/section/Section";

export const BlogSection = () => (
  <Section headingText="React Component Testing">
    <p>
      Testing React components comes with a number of challenges. Namely, the
      integration between parent, sibling, and child components. There&apos;s 2
      &ldquo;traditional&ldquo; techniques to test this. The first being
      integration tests with a primary focus on how the end-user interacts with
      the app. The second being unit tests with mocking for all sibling and
      child components. This article focuses on meeting a balance between these
      2 approaches to gain the benefits of end-user interaction and test
      isolation.
    </p>
  </Section>
);
