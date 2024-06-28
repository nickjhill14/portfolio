import ReactComponentTesting from "../assets/react-component-mock-vs-real.png";
import { Blog } from "../domain/blog";

export const reactTestingBlog: Blog = {
  title: "React Component Testing",
  isDraft: true,
  sections: [
    {
      heading: "Overview",
      content: [
        'Testing React components comes with a number of challenges. Namely, the integration between parent, sibling, and child components. There\'s "traditional" techniques to test this:',
        [
          "Integration tests focusing on how the end-user interacts with the app",
          "Unit tests with mocking for all sibling and child components",
        ],
        "This article focuses on meeting a balance between these 2 approaches to gain the benefits of end-user interaction and test isolation.",
      ],
    },
    {
      heading: "Project Structure",
      content: [
        "Splitting React components into 3 different directories helps divide responsibilities. This improves codebase navigability and is useful in a monorepo or MFE architecture where there may be a demand for a shared component library. These directories are:",
        [
          "/pages: The highest-level on a route. Can incl. features and components (e.g. Homepage)",
          "/features: Contains domain logic and language. Can incl. other features and components (e.g. BlogSection)",
          "/components: Generic components. Can incl. other components (e.g. Button)",
        ],
      ],
    },
    {
      heading: "Mocks VS. Real",
      content: [
        { src: ReactComponentTesting, alt: "React component layer testing" },
      ],
    },
  ],
};
