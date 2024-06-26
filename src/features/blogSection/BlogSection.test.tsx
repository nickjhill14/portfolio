import { render, screen } from "@testing-library/react";
import { BlogSection } from "./BlogSection";

describe(BlogSection, () => {
  it("renders the section", () => {
    render(<BlogSection />);

    expect(
      screen.getByRole("heading", {
        name: "React Component Testing",
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Testing React components comes with a number of challenges/,
      ),
    ).toBeInTheDocument();
  });
});
