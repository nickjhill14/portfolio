import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { buildCvSection } from "../../utils/builders";
import { downloadJson } from "../../utils/helpers/helpers";
import { CreateCvSections, defaultCv } from "./CreateCvSections";

vitest.mock("../../utils/helpers/helpers");

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

  it("displays the default CV in a preview window", async () => {
    render(<CreateCvSections />);

    expect(
      screen.getByText('"skillsInfo": {', { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('"skills": []', { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('"languages": []', { exact: false }),
    ).toBeInTheDocument();
  });

  it("downloads the CV when the download button has been clicked", async () => {
    vitest.mocked(downloadJson);

    render(<CreateCvSections />);
    await userEvent.click(screen.getByRole("button", { name: "Download" }));

    expect(downloadJson).toHaveBeenCalledWith(
      "cv",
      JSON.stringify(defaultCv, null, 2),
    );
  });
});
