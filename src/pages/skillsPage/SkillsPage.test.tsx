import { render, screen } from "@testing-library/react";
import { Skill, SkillInfo } from "../../domain";
import { buildSkill } from "../../utils/builders";
import { SkillsPage } from "./SkillsPage";

describe(SkillsPage, () => {
  it("renders the page", () => {
    render(<SkillsPage skillInfo={[]} />);

    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
  });

  it("renders a message when there are no skills", () => {
    render(<SkillsPage skillInfo={[]} />);

    expect(screen.getByText("No skills provided")).toBeInTheDocument();
  });

  it("renders skills", () => {
    const skill1: Skill = buildSkill();
    const skill2: Skill = buildSkill();
    const skillInfo: SkillInfo = [skill1, skill2];

    render(<SkillsPage skillInfo={skillInfo} />);

    expect(screen.getByText(skill1)).toBeInTheDocument();
    expect(screen.getByText(skill2)).toBeInTheDocument();
  });
});
