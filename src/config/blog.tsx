import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/react";
import GetPropsSnippet from "../assets/reactTestingBlog/get-props-snippet.txt";
import MockComponentAssertExistence from "../assets/reactTestingBlog/mock-component-assert-existence.txt";
import MockComponentAssertPropsCalls from "../assets/reactTestingBlog/mock-component-assert-props-calls.txt";
import MockComponentAssertPropsLastCall from "../assets/reactTestingBlog/mock-component-assert-props-last-call.txt";
import MockComponentPropInvocation from "../assets/reactTestingBlog/mock-component-prop-invocation.txt";
import MockComponentSetupSnippet from "../assets/reactTestingBlog/mock-component-setup-snippet.txt";
import MockComponentSnippet from "../assets/reactTestingBlog/mock-component-snippet.txt";
import ReactComponentTesting from "../assets/reactTestingBlog/react-component-mock-vs-real.png";
import { Blog } from "../domain/blog";

export const reactTestingBlog: Blog = {
  title: "React Component Testing",
  date: new Date("Wed Jul 03 2024 16:06:42 GMT+0100 (British Summer Time)"),
  readTime: 5,
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
          <p key="project-structure-pages">
            <Code>/pages</Code>: The highest-level on a route. Can incl.{" "}
            <Code>/features</Code> and <Code>/components</Code> (e.g.{" "}
            <Code>{`<Homepage />`}</Code>)
          </p>,
          <p key="project-structure-features">
            <Code>/features</Code>: Contains domain logic and language. Can
            incl. other <Code>/features</Code> and <Code>/components</Code>{" "}
            (e.g. <Code>{`<BlogSection />`}</Code>)
          </p>,
          <p key="project-structure-components">
            <Code>/components</Code>: Generic components. Can incl. other
            components in <Code>/components</Code> (e.g.{" "}
            <Code>{`<Button />`}</Code>)
          </p>,
        ],
      ],
    },
    {
      heading: "Mocks VS. Real",
      content: [
        <p key="mocks-vs-real-intro">
          As seen in the diagram below, the aim is to always use the real
          components from <Code>/components</Code> at every level. This is to
          ensure that user interaction is not neglected.
        </p>,
        <p key="mocks-vs-real-explanation">
          Generally, components in <Code>/pages</Code> and{" "}
          <Code>/features</Code> are more complex. Therefore, by mocking
          components in <Code>/features</Code>, the coupling between these is
          reduced and the test focus is on the logical behaviour.
        </p>,
        { src: ReactComponentTesting, alt: "React component layer testing" },
      ],
    },
    {
      heading: "External Components",
      content: [
        "When it comes to external components (e.g. UI libraries), the benefits of mocking are reduced. This is because these components are not within the codebase under-tests control. Therefore, it is recommended to use the real version of these components.",
      ],
    },
    {
      heading: "API Calls",
      content: [
        <p key="api-calls">
          When testing a React component&apos;s behaviour when calling APIs, it
          is recommended to simulate the backend behaviour as realistically as
          possible.
          <br />
          <br />
          By utilising a tool such as{" "}
          <Link
            isExternal
            href="https://mswjs.io/"
            underline="hover"
            showAnchorIcon
          >
            MSW
          </Link>{" "}
          to stub the backend and to simulate it&apos;s behaviour.
        </p>,
      ],
    },
    {
      heading: "Implementation",
      content: [
        <p key="implementation-mock-component">
          The first step is to add a function to mock a React component. A
          reference to the component is passed in and the props are then
          inferred via the generic. The name of the component is then returned
          as text.
        </p>,
        {
          snippetPath: MockComponentSnippet,
        },
        <p key="implementation-get-props">
          The next step is to add a function to get the props for the mock
          component. This allows the tester to assert on what props are passed
          or invoked. It also provides the ability to invoke a function to test
          the behaviour of the parent component in response.
        </p>,
        {
          snippetPath: GetPropsSnippet,
        },
        <p key="implementation-test-setup">
          To setup a mocked component in a test, pass a reference to the
          component before each test. Make sure to mock the import path too.
        </p>,
        {
          snippetPath: MockComponentSetupSnippet,
        },
        <p key="implementation-assert-existence">
          To test that a component has been rendered, assert that the component
          name is in the doc.
        </p>,
        {
          snippetPath: MockComponentAssertExistence,
        },
        <p key="implementation-assert-props-last-call">
          To test that a prop has been passed to a component, call{" "}
          <Code>getProps(...)</Code> with a reference to the component. The{" "}
          <Code>.lastCall</Code> property will return the last value that was
          passed to the prop.
        </p>,
        {
          snippetPath: MockComponentAssertPropsLastCall,
        },
        <p key="implementation-assert-props-calls">
          A prop&apos;s value may change through a component&apos;s lifecycle.
          The <Code>.calls[index]</Code> property will return the value that was
          passed to the prop for the call given by the index.
        </p>,
        {
          snippetPath: MockComponentAssertPropsCalls,
        },
        <p key="implementation-prop-invocation">
          To invoke a prop function on a mocked component, use{" "}
          <Code>getProps(...).lastCall</Code> to retrieve and invoke the
          function.
        </p>,
        {
          snippetPath: MockComponentPropInvocation,
        },
      ],
    },
    {
      heading: "Conclusion",
      content: [
        <p key="summary">
          The advantages of this approach helps separate business/domain logic
          and generic UI components.
          <br />
          <br />
          However, it could be argued that the integration between these
          components are not tested thoroughly enough. A common practice in this
          scenario would be to create either an integration test at the page
          level without using mocked components or to create a higher-level test
          using a tool such as{" "}
          <Link
            isExternal
            href="https://playwright.dev/"
            underline="hover"
            showAnchorIcon
          >
            Playwright
          </Link>{" "}
          or{" "}
          <Link
            isExternal
            href="https://www.cypress.io/"
            underline="hover"
            showAnchorIcon
          >
            Cypress
          </Link>{" "}
          to simulate user interactions in the browser.
        </p>,
      ],
    },
  ],
};

export const blogs = [reactTestingBlog];
