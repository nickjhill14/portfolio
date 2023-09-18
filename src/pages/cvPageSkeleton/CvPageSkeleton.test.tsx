import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { CvPageSkeleton } from "./CvPageSkeleton";

vitest.mock("react-router-dom");

describe(CvPageSkeleton, () => {
  it("renders the skeleton", () => {
    render(<CvPageSkeleton />);

    expect(screen.getByTestId("cv-section-1-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("cv-section-2-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("cv-section-3-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("cv-section-4-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("skills-section-skeleton")).toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home link", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<CvPageSkeleton />);
    await userEvent.click(screen.getByRole("link", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
