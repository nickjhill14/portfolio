import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLoaderData, useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { buildCvInfo } from "../../utils/builders";
import { CvPage } from "./CvPage";

vitest.mock("react-router-dom");

describe(CvPage, () => {
  beforeEach(() => {
    vitest.mocked(useLoaderData).mockReturnValue(buildCvInfo());
  });

  it("renders the CV sections", () => {
    render(<CvPage />);

    expect(
      screen.getByRole("heading", { name: "Experience" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Education" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Achievements" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
  });

  it("renders a link to the CV page", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<CvPage />);
    await userEvent.click(screen.getByRole("link", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
