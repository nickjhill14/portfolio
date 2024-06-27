import { render, screen } from "@testing-library/react";
import { Section } from "./Section";

describe(Section, () => {
  it("renders the section heading", () => {
    const headingText = "Section Heading";

    render(<Section headingText={headingText} />);

    expect(
      screen.getByRole("heading", { name: headingText, level: 2 }),
    ).toBeInTheDocument();
  });

  it("renders a single child", () => {
    const childName = "Child Name";

    render(
      <Section headingText="Some Heading">
        <button>{childName}</button>
      </Section>,
    );

    expect(screen.getByRole("button", { name: childName })).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    const child1Name = "Child 1 Name";
    const child2Name = "Child 2 Name";

    render(
      <Section headingText="Some Heading">
        <button key={child1Name}>{child1Name}</button>,
        <button key={child2Name}>{child2Name}</button>,
      </Section>,
    );

    expect(
      screen.getByRole("button", { name: child1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: child2Name }),
    ).toBeInTheDocument();
  });

  it("adds classnames to the container", () => {
    const className = "custom-class";

    render(<Section headingText="Some Heading" className={className} />);

    expect(screen.getByTestId("section-container")).toHaveClass(className);
  });
});
