import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockComponent } from "../../utils/ComponentMocks";
import { buildLanguage, buildSkill } from "../../utils/builders";
import { SkillsKey } from "../SkillsKey/SkillsKey";
import { SkillsSection } from "./SkillsSection";

vitest.mock("../SkillsKey/SkillsKey");

describe(SkillsSection, () => {
  beforeEach(() => {
    mockComponent(SkillsKey);
  });

  it("renders the section", () => {
    const skills1Name = "Portfolio Creation";
    const skills2Name = "Portfolio Generating";
    const language1Name = "English";
    const language1Level = 1;
    const language2Name = "Mandarin Chinese";
    const language2Level = 5;

    render(
      <SkillsSection
        skillsInfo={{
          skills: [
            buildSkill({ name: skills1Name }),
            buildSkill({ name: skills2Name }),
          ],
          languages: [
            buildLanguage({
              name: language1Name,
              level: language1Level,
            }),
            buildLanguage({
              name: language2Name,
              level: language2Level,
            }),
          ],
        }}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Skills", level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(skills1Name)).toBeInTheDocument();
    expect(screen.getByText(skills2Name)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "View key" })).toBeDisabled();
    expect(screen.queryByText(SkillsKey.name)).not.toBeInTheDocument();
    expect(screen.getByText(language1Name)).toBeInTheDocument();
    expect(screen.getByLabelText(`${language1Level} Star`)).toBeInTheDocument();
    expect(screen.getByText(language2Name)).toBeInTheDocument();
    expect(
      screen.getByLabelText(`${language2Level} Stars`),
    ).toBeInTheDocument();
  });

  it.todo("display key on question hover", async () => {
    render(<SkillsSection skillsInfo={{ skills: [], languages: [] }} />);
    await userEvent.hover(screen.getByRole("button", { name: "View key" }));

    expect(await screen.findByText(SkillsKey.name)).toBeInTheDocument();
  });
});
