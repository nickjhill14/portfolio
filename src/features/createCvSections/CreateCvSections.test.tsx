import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { buildCvSection } from "../../utils/builders";
import { downloadJson } from "../../utils/helpers/helpers";
import { CreateCvSections, defaultCv } from "./CreateCvSections";

vitest.mock("../../utils/helpers/helpers");

describe(CreateCvSections, () => {
  describe("rendering", () => {
    it("renders the section", () => {
      render(<CreateCvSections />);

      expect(
        screen.getByRole("heading", { name: "Create CV Sections" }),
      ).toBeInTheDocument();
      expect(screen.getByText("No CV sections added")).toBeInTheDocument();
    });
  });

  describe("creating", () => {
    it("creates a CV section", async () => {
      const cvSection = buildCvSection();

      render(<CreateCvSections />);
      await userEvent.type(
        screen.getByRole("textbox", { name: "Title" }),
        cvSection.title,
      );
      await userEvent.click(screen.getByRole("button", { name: "Create" }));

      expect(
        screen.getByText(`"title": "${cvSection.title}"`, { exact: false }),
      ).toBeInTheDocument();
      expect(screen.getByText(cvSection.title)).toBeInTheDocument();
      expect(
        screen.queryByText("No CV sections added"),
      ).not.toBeInTheDocument();
    });

    it("clears the current CV section after creation", async () => {
      render(<CreateCvSections />);
      await userEvent.type(
        screen.getByRole("textbox", { name: "Title" }),
        "Experience",
      );
      await userEvent.click(screen.getByRole("button", { name: "Create" }));

      expect(screen.getByRole("textbox", { name: "Title" })).toHaveValue("");
    });
  });

  describe("deleting", () => {
    it("deletes all CV sections", async () => {
      const cvSection = buildCvSection();

      render(<CreateCvSections />);
      await userEvent.type(
        screen.getByRole("textbox", { name: "Title" }),
        cvSection.title,
      );
      await userEvent.click(screen.getByRole("button", { name: "Create" }));
      await userEvent.click(screen.getByLabelText(`Delete ${cvSection.title}`));

      expect(
        screen.queryByText(`"title": "${cvSection.title}"`, { exact: false }),
      ).not.toBeInTheDocument();
      expect(screen.queryByText(cvSection.title)).not.toBeInTheDocument();
      expect(screen.getByText("No CV sections added")).toBeInTheDocument();
    });

    it("deletes a single CV section", async () => {
      const cvSection1 = buildCvSection({ title: "Experience" });
      const cvSection2 = buildCvSection({ title: "Education" });

      render(<CreateCvSections />);
      await userEvent.type(
        screen.getByRole("textbox", { name: "Title" }),
        cvSection1.title,
      );
      await userEvent.click(screen.getByRole("button", { name: "Create" }));
      await userEvent.type(
        screen.getByRole("textbox", { name: "Title" }),
        cvSection2.title,
      );
      await userEvent.click(screen.getByRole("button", { name: "Create" }));
      await userEvent.click(
        screen.getByLabelText(`Delete ${cvSection1.title}`),
      );

      expect(screen.queryByText(cvSection1.title)).not.toBeInTheDocument();
      expect(screen.getByText(cvSection2.title)).toBeInTheDocument();
    });
  });

  describe("errors", () => {
    it("displays an error message when no title is provided", async () => {
      render(<CreateCvSections />);
      await userEvent.click(screen.getByRole("button", { name: "Create" }));

      expect(screen.getByText("Required field")).toBeInTheDocument();
    });

    it("removes error once a title is provided", async () => {
      render(<CreateCvSections />);
      await userEvent.click(screen.getByRole("button", { name: "Create" }));
      await userEvent.type(
        screen.getByRole("textbox", { name: "Title" }),
        "Experience",
      );
      await userEvent.click(screen.getByRole("button", { name: "Create" }));

      expect(screen.queryByText("Required field")).not.toBeInTheDocument();
    });
  });

  describe("downloading", () => {
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
});
