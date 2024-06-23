import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import { CvSection } from "../../domain/cv";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { renderWithMemoryRouter } from "../../utils/Renderers";
import {
  buildCv,
  buildCvSection,
  buildCvSectionItems,
} from "../../utils/builders";
import { CvPage } from "./CvPage";

vitest.mock("react-router-typesafe");
vitest.mock("react-router-dom", async () => ({
  ...(await vitest.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  )),
  useNavigate: vitest.fn(),
}));

describe(CvPage, () => {
  const mockUseLoaderData = vitest.mocked(useLoaderData);
  const mockUseNavigate = vitest.mocked(useNavigate);

  it("renders a loading skeleton when loading CV data", async () => {
    const cvSection = buildCvSection();

    mockUseLoaderData.mockReturnValue({
      cv: Promise.resolve(buildCv({ cvSections: [cvSection] })),
    });

    renderWithMemoryRouter(<CvPage />);

    expect(screen.getByTestId("cv-page-skeleton")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "CV" })).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { name: cvSection.title }),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("cv-page-skeleton")).not.toBeInTheDocument();
  });

  it("renders the CV sections", async () => {
    const experienceSection = buildCvSection({
      title: "Experience",
      items: [buildCvSectionItems()],
    });
    const educationSection = buildCvSection({
      title: "Education",
      items: [buildCvSectionItems()],
    });
    const cvSections: CvSection[] = [experienceSection, educationSection];

    mockUseLoaderData.mockReturnValue({
      cv: Promise.resolve(buildCv({ cvSections })),
    });

    renderWithMemoryRouter(<CvPage />);

    expect(
      await screen.findByRole("heading", { name: experienceSection.title }),
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

  it("renders a message when no CV is provided", async () => {
    mockUseLoaderData.mockReturnValue({
      cv: Promise.resolve(buildCv({ cvSections: undefined })),
    });

    renderWithMemoryRouter(<CvPage />);

    expect(
      await screen.findByText("No CV sections provided"),
    ).toBeInTheDocument();
    expect(screen.queryByText("No items provided")).not.toBeInTheDocument();
  });

  it("renders a message when a CV section is provided with no items", async () => {
    const cvSections: CvSection[] = [buildCvSection({ items: undefined })];

    mockUseLoaderData.mockReturnValue({
      cv: Promise.resolve(buildCv({ cvSections })),
    });

    renderWithMemoryRouter(<CvPage />);

    expect(await screen.findByText("No items provided")).toBeInTheDocument();
    expect(
      screen.queryByText("No CV sections provided"),
    ).not.toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const mockNavigate = vitest.fn();

    mockUseNavigate.mockReturnValue(mockNavigate);
    mockUseLoaderData.mockReturnValue({
      cv: Promise.resolve(buildCv()),
    });

    renderWithMemoryRouter(<CvPage />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(mockNavigate).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
