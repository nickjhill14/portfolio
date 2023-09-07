import { render, screen } from "@testing-library/react";
import { CvPage } from "./CvPage";

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

  it("renders a link to the landing page", () => {
    render(
      <CvPage
        experienceInfo={[]}
        educationInfo={[]}
        achievementsInfo={[]}
        skillsInfo={{ skills: [], languages: [] }}
        projectInfo={[]}
      />,
    );

    expect(screen.getByRole("link", { name: "Go Home" })).toHaveAttribute(
      "href",
      "#home",
    );
  });
});
