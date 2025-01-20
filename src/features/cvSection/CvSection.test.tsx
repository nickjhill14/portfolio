import { render, screen } from "@testing-library/react";
import { getProps, mockComponent } from "../../utils/ComponentMocks";
import {
  buildCv,
  buildCvSection,
  buildCvSectionItem,
  buildSkillsInfo,
} from "../../utils/builders";
import { SkillsSection } from "../skillsSection/SkillsSection";
import { CvSection } from "./CvSection";

vitest.mock("../skillsSection/SkillsSection");

describe(CvSection, () => {
  beforeEach(() => {
    mockComponent(SkillsSection);
  });

  it("renders CV sections when provided", () => {
    const cvSection1 = buildCvSection();
    const cvSection2 = buildCvSection();

    render(
      <CvSection cv={buildCv({ cvSections: [cvSection1, cvSection2] })} />,
    );

    expect(
      screen.getByRole("heading", { name: cvSection1.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: cvSection2.title }),
    ).toBeInTheDocument();
  });

  it("renders CV section items when provided", () => {
    const cvSectionItem1 = buildCvSectionItem();
    const cvSectionItem2 = buildCvSectionItem();

    render(
      <CvSection
        cv={buildCv({
          cvSections: [
            buildCvSection({ items: [cvSectionItem1, cvSectionItem2] }),
          ],
        })}
      />,
    );

    expect(
      screen.getByRole("heading", { name: cvSectionItem1.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: cvSectionItem2.name }),
    ).toBeInTheDocument();
  });

  it("renders skills section with skills info", () => {
    const skillsInfo = buildSkillsInfo();

    render(<CvSection cv={buildCv({ skillsInfo: skillsInfo })} />);

    expect(getProps(SkillsSection).lastCall.skillsInfo).toStrictEqual(
      skillsInfo,
    );
  });
});
