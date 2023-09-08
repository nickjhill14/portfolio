import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { CvPage } from "./CvPage";

vitest.mock("react-router-dom");

describe(CvPage, () => {
  it("renders the CV sections", () => {
    render(
      <CvPage
        experienceInfo={[]}
        educationInfo={[]}
        achievementsInfo={[]}
        skillsInfo={{ skills: [], languages: [] }}
        projectInfo={[]}
      />,
    );

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

    render(
      <CvPage
        experienceInfo={[]}
        educationInfo={[]}
        achievementsInfo={[]}
        skillsInfo={{ skills: [], languages: [] }}
        projectInfo={[]}
      />,
    );
    await userEvent.click(screen.getByRole("link", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
