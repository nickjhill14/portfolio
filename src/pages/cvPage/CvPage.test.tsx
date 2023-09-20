import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

const navigateMock = vitest.fn();

vitest.mock("react-router-typesafe");
vitest.mock("react-router-dom", async () => {
  const actual = await vitest.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  );

  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe(CvPage, () => {
  const useLoaderDataMock = vitest.mocked(useLoaderData);

  it("renders a loading skeleton when loading CV data", async () => {
    const cvSection = buildCvSection();

    useLoaderDataMock.mockReturnValue({
      cv: Promise.resolve(buildCv({ cvSections: [cvSection] })),
    });

    renderWithMemoryRouter(<CvPage />);

    expect(screen.getByTestId("cv-page-skeleton")).toBeInTheDocument();
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

    useLoaderDataMock.mockReturnValue({
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
    useLoaderDataMock.mockReturnValue({
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

    useLoaderDataMock.mockReturnValue({
      cv: Promise.resolve(buildCv({ cvSections })),
    });

    renderWithMemoryRouter(<CvPage />);

    expect(await screen.findByText("No items provided")).toBeInTheDocument();
    expect(
      screen.queryByText("No CV sections provided"),
    ).not.toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home link", async () => {
    useLoaderDataMock.mockReturnValue({
      cv: Promise.resolve(buildCv()),
    });

    renderWithMemoryRouter(<CvPage />);
    await userEvent.click(screen.getByRole("link", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
