import { faker } from "@faker-js/faker";
import { AbcOutlined } from "@mui/icons-material";
import { render, screen } from "@testing-library/react";
import { Page, PageProps } from "./Page";

function renderPage(propsOverride?: Partial<PageProps>) {
  const props: PageProps = {
    headingText: faker.company.buzzNoun(),
    headingIcon: AbcOutlined,
    children: [],
    ...propsOverride,
  };

  render(<Page {...props} />);
}

describe(Page, () => {
  it("renders the page heading", () => {
    const headingText = faker.company.buzzNoun();

    renderPage({ headingText });

    expect(
      screen.getByRole("heading", { name: headingText }),
    ).toBeInTheDocument();
  });

  it("renders a single child", () => {
    const childName = "Child Name";

    renderPage({ children: <button>{childName}</button> });

    expect(screen.getByRole("button", { name: childName })).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    const child1Name = "Child 1 Name";
    const child2Name = "Child 2 Name";

    renderPage({
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
