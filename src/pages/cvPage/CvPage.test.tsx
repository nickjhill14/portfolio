import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { cv } from "../../config/cv";
import { CvSection } from "../../features/cvSection/CvSection";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { getProps, mockComponent } from "../../utils/ComponentMocks";
import { renderWithMemoryRouter } from "../../utils/Renderers";
import { CvPage } from "./CvPage";

vitest.mock("../../features/cvSection/CvSection");
vitest.mock("react-router-dom", async () => ({
  ...(await vitest.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  )),
  useNavigate: vitest.fn(),
}));

describe(CvPage, () => {
  beforeEach(() => {
    mockComponent(CvSection);
  });

  it("renders the page", async () => {
    renderWithMemoryRouter(<CvPage />);

    expect(
      screen.getByRole("heading", { name: "CV", level: 1 }),
    ).toBeInTheDocument();
    expect(getProps(CvSection).lastCall.cv).toStrictEqual(cv);
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const mockNavigate = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(mockNavigate);

    renderWithMemoryRouter(<CvPage />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(mockNavigate).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
