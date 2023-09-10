import { AbcOutlined } from "@mui/icons-material";
import { render, screen } from "@testing-library/react";
import { Section, SectionProps } from "./Section";

function renderSection(propsOverride?: Partial<SectionProps>) {
  const props: SectionProps = {
    headingText: "Default Section Heading",
    headingIcon: AbcOutlined,
    children: [],
    ...propsOverride,
  };

  render(<Section {...props} />);
}

describe(Section, () => {
  it("renders the section heading", () => {
    const headingText = "Section Heading";

    renderSection({ headingText });

    expect(
      screen.getByRole("heading", { name: headingText }),
    ).toBeInTheDocument();
  });

  it("renders a single child", () => {
    const childName = "Child Name";

    renderSection({ children: <button>{childName}</button> });

    expect(screen.getByRole("button", { name: childName })).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    const child1Name = "Child 1 Name";
    const child2Name = "Child 2 Name";

    renderSection({
      children: [
        <button key={child1Name}>{child1Name}</button>,
        <button key={child2Name}>{child2Name}</button>,
      ],
    });

    expect(
      screen.getByRole("button", { name: child1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: child2Name }),
    ).toBeInTheDocument();
  });
});
