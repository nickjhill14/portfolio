import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { buildCvSection } from "../../utils/builders";
import { CreateCvSections } from "./CreateCvSections";

describe(CreateCvSections, () => {
  it("renders the section", () => {
    render(<CreateCvSections />);

    expect(
      screen.getByRole("heading", { name: "Create CV Sections" }),
    ).toBeInTheDocument();
  });

  it("creates a section", async () => {
    const cvSection = buildCvSection();

    render(<CreateCvSections />);
    await userEvent.type(
      screen.getByRole("textbox", { name: "Title" }),
      cvSection.title,
    );
    await userEvent.click(screen.getByRole("button", { name: "Create" }));

    expect(screen.queryByText("Required field")).not.toBeInTheDocument();
  });

  it("displays an error message when no title is provided", async () => {
    render(<CreateCvSections />);
    await userEvent.click(screen.getByRole("button", { name: "Create" }));

    expect(screen.getByText("Required field")).toBeInTheDocument();
  });
});
