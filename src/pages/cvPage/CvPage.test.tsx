import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CvSection } from "../../domain/cv";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import {
  buildCv,
  buildCvSection,
  buildCvSectionItems,
} from "../../utils/builders";
import { CvPage } from "./CvPage";

vitest.mock("react-router-dom");

describe(CvPage, () => {
  const useLoaderDataMock = vitest.mocked(useLoaderData);

  beforeEach(() => {
    useLoaderDataMock.mockReturnValue(buildCv());
  });

  it("renders the CV sections", () => {
    const experienceSection = buildCvSection({
      title: "Experience",
      items: [buildCvSectionItems()],
    });
    const educationSection = buildCvSection({
      title: "Education",
      items: [buildCvSectionItems()],
    });
    const cvSections: CvSection[] = [experienceSection, educationSection];

    useLoaderDataMock.mockReturnValue(buildCv({ cvSections }));

    render(<CvPage />);

    expect(
      screen.getByRole("heading", { name: experienceSection.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: educationSection.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(
      screen.queryByText("No CV sections provided"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("No items provided")).not.toBeInTheDocument();
  });

  it("renders a message when no CV is provided", () => {
    useLoaderDataMock.mockReturnValue(buildCv({ cvSections: undefined }));

    render(<CvPage />);

    expect(screen.getByText("No CV sections provided")).toBeInTheDocument();
    expect(screen.queryByText("No items provided")).not.toBeInTheDocument();
  });

  it("renders a message when a CV section is provided with no items", () => {
    const cvSections: CvSection[] = [buildCvSection({ items: undefined })];

    useLoaderDataMock.mockReturnValue(buildCv({ cvSections }));

    render(<CvPage />);

    expect(screen.getByText("No items provided")).toBeInTheDocument();
    expect(
      screen.queryByText("No CV sections provided"),
    ).not.toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home link", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<CvPage />);
    await userEvent.click(screen.getByRole("link", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
