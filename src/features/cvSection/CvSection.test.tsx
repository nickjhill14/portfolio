import { render, screen } from "@testing-library/react";
import {
  buildCv,
  buildCvSection,
  buildCvSectionItem,
  buildSkill,
  buildSkillsInfo,
} from "@/utils/builders";
import { CvSection } from "./CvSection";
import userEvent from "@testing-library/user-event";
import { CollapsibleDetail, CvSectionItem } from "@/domain/cv";

describe("CvSection", () => {
  it("renders CV section items with basic info", () => {
    const cvSectionItems = [
      buildCvSectionItem({ name: "Software Engineer" }),
      buildCvSectionItem({ name: "Frontend Developer" }),
    ];

    render(
      <CvSection
        cv={buildCv({
          cvSections: [buildCvSection({ items: cvSectionItems })],
        })}
      />,
    );

    cvSectionItems.forEach((item) => {
      expect(
        screen.getByRole("heading", { name: item.name }),
      ).toBeInTheDocument();
    });
  });

  it("renders CV section item with external link", () => {
    const cvSectionItem = buildCvSectionItem({
      name: "Company Name",
      link: "https://example.com",
    });

    render(
      <CvSection
        cv={buildCv({
          cvSections: [buildCvSection({ items: [cvSectionItem] })],
        })}
      />,
    );

    expect(
      screen.getByRole("link", { name: cvSectionItem.name }),
    ).toHaveAttribute("href", cvSectionItem.link);
  });

  it("renders CV section item without link when link is not provided", () => {
    const cvSectionItem = buildCvSectionItem({
      name: "Company Name",
      link: undefined,
    });

    render(
      <CvSection
        cv={buildCv({
          cvSections: [buildCvSection({ items: [cvSectionItem] })],
        })}
      />,
    );

    expect(
      screen.queryByRole("link", { name: cvSectionItem.name }),
    ).not.toBeInTheDocument();
  });

  it("renders location and date range information", () => {
    const cvSectionItem = buildCvSectionItem({
      location: "San Francisco, CA",
      dateRange: "Jan 2020 - Dec 2022",
    });

    render(
      <CvSection
        cv={buildCv({
          cvSections: [buildCvSection({ items: [cvSectionItem] })],
        })}
      />,
    );

    expect(screen.getByText(cvSectionItem.location!)).toBeInTheDocument();
    expect(screen.getByText(cvSectionItem.dateRange!)).toBeInTheDocument();
  });

  it("renders details as list items", () => {
    const details: CvSectionItem["details"] = [
      "Developed web applications",
      "Led team of 5 developers",
    ];

    render(
      <CvSection
        cv={buildCv({
          cvSections: [
            buildCvSection({
              items: [
                buildCvSectionItem({
                  details,
                }),
              ],
            }),
          ],
        })}
      />,
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    details.forEach((detail) => {
      expect(screen.getByText(detail)).toBeInTheDocument();
    });
  });

  it("renders collapsible details in accordion", async () => {
    const collapsibleDetail: CollapsibleDetail = {
      title: "Key Achievements",
      details: ["Achievement 1", "Achievement 2"],
    };

    render(
      <CvSection
        cv={buildCv({
          cvSections: [
            buildCvSection({
              items: [
                buildCvSectionItem({
                  collapsibleDetails: [collapsibleDetail],
                }),
              ],
            }),
          ],
        })}
      />,
    );
    await userEvent.click(
      screen.getByRole("button", { name: collapsibleDetail.title }),
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    collapsibleDetail.details.forEach((detail) => {
      expect(screen.getByText(detail)).toBeInTheDocument();
    });
  });

  it("renders skills section with sorted skills", () => {
    const skills = [
      buildSkill({ name: "Node.js" }),
      buildSkill({ name: "TypeScript" }),
      buildSkill({ name: "React" }),
    ];

    render(
      <CvSection
        cv={buildCv({
          skillsInfo: buildSkillsInfo({ skills }),
        })}
      />,
    );

    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });
});
