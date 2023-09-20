import { faker } from "@faker-js/faker";
import { BasicInfo } from "../domain/basicInfo";
import { Cv, CvSection, CvSectionItems, Language, Skill } from "../domain/cv";

function buildBasicInfo(override?: Partial<BasicInfo>): BasicInfo {
  return {
    name: "Portfolio Pete",
    role: "Portfolio Creator",
    email: "portfolio-pete@email.com",
    linkedIn: "portfolio-pete",
    gitHub: "portfolio-pete-dev",
    ...override,
  };
}

function buildDateRange(): string {
  return faker.date
    .betweens({
      from: "2011-01-08T00:00:00.000Z",
      to: "2020-02-03T00:00:00.000Z",
      count: 2,
    })
    .map((date) => {
      return date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
      });
    })
    .join(" - ");
}

function buildSkill(override?: Partial<Skill>): Skill {
  return { name: "Portfolio Creation", ...override };
}

function buildLanguage(override?: Partial<Language>): Language {
  return {
    name: "English",
    level: 5,
    ...override,
  };
}

function buildCvSection(override?: Partial<CvSection>): CvSection {
  return {
    title: "Experience",
    ...override,
  };
}

function buildCvSectionItems(
  override?: Partial<CvSectionItems>,
): CvSectionItems {
  return { name: "Went To University", ...override };
}

function buildCv(override?: Partial<Cv>): Cv {
  return {
    skillsInfo: { skills: [], languages: [] },
    ...override,
  };
}

export {
  buildBasicInfo,
  buildCv,
  buildCvSection,
  buildCvSectionItems,
  buildDateRange,
  buildLanguage,
  buildSkill,
};
