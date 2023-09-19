import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CvSection } from "../../domain/cv";
import { CreateCvSection } from "./CreateCvSection";

describe(CreateCvSection, () => {
  it("adds a section title", async () => {
    const onCreate = vitest.fn();
    const cvSection: CvSection = { title: "Experience" };

    render(<CreateCvSection onCreate={onCreate} />);
    await userEvent.type(
      screen.getByRole("textbox", { name: "Title" }),
      cvSection.title,
    );
    await userEvent.click(screen.getByRole("button", { name: "Create" }));

    expect(onCreate).toHaveBeenCalledWith(cvSection);
    expect(screen.queryByText("Required field")).not.toBeInTheDocument();
  });

  it("displays an error message when no title is provided", async () => {
    const onCreate = vitest.fn();

    render(<CreateCvSection onCreate={onCreate} />);
    await userEvent.click(screen.getByRole("button", { name: "Create" }));

    expect(onCreate).not.toHaveBeenCalled();
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });
});
