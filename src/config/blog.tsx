import { Link } from "@nextui-org/link";
import { Code, Snippet } from "@nextui-org/react";
import ReactComponentTesting from "../assets/react-component-mock-vs-real.png";
import { Blog } from "../domain/blog";

export const reactTestingBlog: Blog = {
  title: "React Component Testing",
  isDraft: true,
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
            <Code color="primary">/pages</Code>: The highest-level on a route.
            Can incl. <Code color="primary">/features</Code> and{" "}
            <Code color="primary">/components</Code> (e.g.{" "}
            <Code color="primary">{`<Homepage />`}</Code>)
          </p>,
          <p key="project-structure-features">
            <Code color="primary">/features</Code>: Contains domain logic and
            language. Can incl. other <Code color="primary">/features</Code> and{" "}
            <Code color="primary">/components</Code> (e.g.{" "}
            <Code color="primary">{`<BlogSection />`}</Code>)
          </p>,
          <p key="project-structure-components">
            <Code color="primary">/components</Code>: Generic components. Can
            incl. other components in <Code color="primary">/components</Code>{" "}
            (e.g. <Code color="primary">{`<Button />`}</Code>)
          </p>,
        ],
      ],
    },
    {
      heading: "Mocks VS. Real",
      content: [
        <p key="mocks-vs-real-intro">
          As seen in the diagram below, the aim is to always use the real
          components from <Code color="primary">/components</Code> at every
          level. This is to ensure that user interaction is not neglected.
        </p>,
        <p key="mocks-vs-real-explanation">
          Generally, components in <Code color="primary">/pages</Code> and{" "}
          <Code color="primary">/features</Code> are more complex. Therefore, by
          mocking components in <Code color="primary">/features</Code>, the
          coupling between these is reduced and the test focus is on the logical
          behaviour.
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
        "When testing a React component's behaviour when calling APIs, it is recommended to simulate the backend behaviour as realistically as possible.",
        <p key="api-calls-msw">
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
        <Snippet key="implementation-mock" hideSymbol color="primary">
          <span className="whitespace-pre-wrap">
            import {`{ ReactElement }`} from &ldquo;react&ldquo;;
          </span>
          <span className="whitespace-pre-wrap">
            import {`{ type MockedFunction }`} from &ldquo;vitest&ldquo;;
          </span>
          <br />
          <span className="whitespace-pre-wrap">
            type Component{`<Props>`} = (props: Props) {`=>`} ReactElement |
            null | undefined;
          </span>
          <br />
          <span className="whitespace-pre-wrap">
            export const mockComponent = {`<Props,>`}( component: Component
            {`<Props>`}, ): MockedFunction{`<Component<Props>> =>`}
            vitest.mocked(component).mockReturnValue(
            {`<div>{component.name}</div>`});
          </span>
        </Snippet>,
        <Snippet key="implementation-props" hideSymbol color="primary">
          <span className="whitespace-pre-wrap">
            import {`{ ReactElement }`} from &ldquo;react&ldquo;;
          </span>
          <br />
          <span className="whitespace-pre-wrap">
            type Component{`<Props>`} = (props: Props) {`=>`} ReactElement |
            null | undefined;
          </span>
          <br />
          <span className="whitespace-pre-wrap">
            export const getProps = {`<Props,>`}(component: Component{`<Props>`}
            ,): {`{ calls: Props[]; lastCall: Props }} => {`}
          </span>
          <span className="whitespace-pre-wrap">
            const {`{ lastCall, calls }`} = vitest.mocked(component).mock;
          </span>
          <br />
          <span className="whitespace-pre-wrap">if (!lastCall) {`{`}</span>
          <span className="whitespace-pre-wrap">
            throw new Error({"`${component.name}`"} was not called`);
          </span>
          <span className="whitespace-pre-wrap">{`}`}</span>
          <br />
          <span className="whitespace-pre-wrap">
            return{" "}
            {`{ calls: calls.map((call) => call[0]), lastCall: lastCall[0] };`}
          </span>
          <span className="whitespace-pre-wrap">{`};`}</span>
        </Snippet>,
      ],
    },
  ],
};
