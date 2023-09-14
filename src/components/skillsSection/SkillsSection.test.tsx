import { render, screen } from "@testing-library/react";
import { SkillsInfo } from "../../domain/cv";
import { buildLanguage, buildSkill } from "../../utils/builders";
import { SkillsSection, SkillsSectionProps } from "./SkillsSection";

function renderSkillsSection(propsOverride?: Partial<SkillsSectionProps>) {
  const props: SkillsSectionProps = {
    skillsInfo: { skills: [], languages: [] },
    ...propsOverride,
  };

  render(<SkillsSection {...props} />);
}

describe(SkillsSection, () => {
  it("renders the section", () => {
    renderSkillsSection();

    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
  });

  it("renders a message when there are no skills", () => {
    const skillsInfo: SkillsInfo = { skills: [], languages: [buildLanguage()] };

    renderSkillsSection({ skillsInfo });

    expect(screen.getByText("No skills provided")).toBeInTheDocument();
  });

  it("renders skills", () => {
    const skill1 = buildSkill({ name: "Portfolio Creation" });
    const skill2 = buildSkill({ name: "Portfolio Generating" });
    const skillsInfo: SkillsInfo = { skills: [skill1, skill2], languages: [] };

    renderSkillsSection({ skillsInfo });

    expect(screen.getByText(skill1.name)).toBeInTheDocument();
    expect(screen.getByText(skill2.name)).toBeInTheDocument();
  });

  it("renders languages", () => {
    const language1Name = "English";
    const language1Level = 1;
    const language2Name = "Mandarin Chinese";
    const language2Level = 5;
    const language1 = buildLanguage({
      name: language1Name,
      level: language1Level,
    });
    const language2 = buildLanguage({
      name: language2Name,
      level: language2Level,
    });
    const skillsInfo: SkillsInfo = {
      skills: [],
      languages: [language1, language2],
    };

    renderSkillsSection({ skillsInfo });

    expect(screen.getByText(language1Name)).toBeInTheDocument();
    expect(screen.getByLabelText(`${language1Level} Star`)).toBeInTheDocument();
    expect(screen.getByText(language2Name)).toBeInTheDocument();
    expect(
      screen.getByLabelText(`${language2Level} Stars`),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no languages", () => {
    renderSkillsSection({
      skillsInfo: { skills: [buildSkill()], languages: [] },
    });

    expect(screen.getByText("No languages provided")).toBeInTheDocument();
  });
});
