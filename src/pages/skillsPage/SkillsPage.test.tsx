import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { Skill, SkillInfo } from "../../domain";
import { buildLanguage, buildSkill } from "../../utils/builders";
import { SkillsPage, SkillsPageProps } from "./SkillsPage";

function renderSkillsPage(propsOverride?: Partial<SkillsPageProps>) {
  const props: SkillsPageProps = {
    skillInfo: { skills: [], languages: [] },
    ...propsOverride,
  };

  render(<SkillsPage {...props} />);
}

describe(SkillsPage, () => {
  it("renders the page", () => {
    renderSkillsPage();

    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
  });

  it("renders a message when there are no skills", () => {
    const skillInfo: SkillInfo = { skills: [], languages: [buildLanguage()] };

    renderSkillsPage({ skillInfo });

    expect(screen.getByText("No skills provided")).toBeInTheDocument();
  });

  it("renders skills", () => {
    const skill1: Skill = buildSkill();
    const skill2: Skill = buildSkill();
    const skillInfo: SkillInfo = { skills: [skill1, skill2], languages: [] };

    renderSkillsPage({ skillInfo });

    expect(screen.getByText(skill1)).toBeInTheDocument();
    expect(screen.getByText(skill2)).toBeInTheDocument();
  });

  it("renders languages", () => {
    const language1Name = faker.location.country();
    const language1Level = 1;
    const language2Name = faker.location.country();
    const language2Level = 5;
    const language1 = buildLanguage({
      name: language1Name,
      level: language1Level,
    });
    const language2 = buildLanguage({
      name: language2Name,
      level: language2Level,
    });
    const skillInfo: SkillInfo = {
      skills: [],
      languages: [language1, language2],
    };

    renderSkillsPage({ skillInfo });

    expect(screen.getByText(language1Name)).toBeInTheDocument();
    expect(screen.getByLabelText(`${language1Level} Star`)).toBeInTheDocument();
    expect(screen.getByText(language2Name)).toBeInTheDocument();
    expect(
      screen.getByLabelText(`${language2Level} Stars`),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no languages", () => {
    renderSkillsPage({ skillInfo: { skills: [buildSkill()], languages: [] } });

    expect(screen.getByText("No languages provided")).toBeInTheDocument();
  });
});
