import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import ReactComponentTesting from "../../assets/react-component-mock-vs-real.png";
import { Section } from "../../components/section/Section";

export const BlogSection = () => (
  <Section headingText="React Component Testing" className="md:w-2/3">
    <strong>🚧 This blog is still in draft mode!</strong>
    <h3 className="text-secondary">Overview</h3>
    <p>
      Testing React components comes with a number of challenges. Namely, the
      integration between parent, sibling, and child components. There&apos;s 2
      &ldquo;traditional&ldquo; techniques to test this:
    </p>
    <ul className="pl-6">
      <li className="list-disc">
        Integration tests focusing on how the end-user interacts with the app
      </li>
      <li className="list-disc">
        Unit tests with mocking for all sibling and child components
      </li>
    </ul>
    <p>
      This article focuses on meeting a balance between these 2 approaches to
      gain the benefits of end-user interaction and test isolation.
    </p>
    <Divider />
    <h3 className="text-secondary">Project Structure</h3>
    <p>
      Splitting React components into 3 different directories helps divide
      responsibilities. This improves codebase navigability and is useful in a
      monorepo or MFE architecture where there may be a demand for a shared
      component library. These directories are:
    </p>
    <ul className="pl-6">
      <li className="list-disc">
        <code>/pages</code>: The highest-level on a route. Can incl. features
        and components (e.g. <code>{"<Homepage />"}</code>)
      </li>
      <li className="list-disc">
        <code>/features</code>: Contains domain logic and language. Can incl.
        other features and components (e.g. <code>{"<BlogSection />"}</code>)
      </li>
      <li className="list-disc">
        <code>/components</code>: Generic components. Can incl. other components
        (e.g. <code>{"<Button />"}</code>)
      </li>
    </ul>
    <Divider />
    <h3 className="text-secondary">Mocks VS. Real</h3>
    <Image
      src={ReactComponentTesting}
      alt="React component layer testing"
      width={500}
    />
  </Section>
);
