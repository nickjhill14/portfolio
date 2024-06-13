import { faker } from "@faker-js/faker";
import { BasicInfo } from "../domain/basicInfo";
import { Cv, CvSection, CvSectionItems, Language, Skill } from "../domain/cv";

export const buildBasicInfo = (override?: Partial<BasicInfo>): BasicInfo => ({
  name: "Portfolio Pete",
  role: "Portfolio Creator",
  email: "portfolio-pete@email.com",
  linkedIn: "portfolio-pete",
  gitHub: "portfolio-pete-dev",
  ...override,
});

export const buildDateRange = (): string =>
  faker.date
    .betweens({
      from: "2011-01-08T00:00:00.000Z",
      to: "2020-02-03T00:00:00.000Z",
      count: 2,
    })
    .map((date) =>
      date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
      }),
    )
    .join(" - ");

export const buildSkill = (override?: Partial<Skill>): Skill => ({
  name: "Portfolio Creation",
  ...override,
});

export const buildLanguage = (override?: Partial<Language>): Language => ({
  name: "English",
  level: 5,
  ...override,
});

export const buildCvSection = (override?: Partial<CvSection>): CvSection => ({
  title: "Experience",
  ...override,
});

export const buildCvSectionItems = (
  override?: Partial<CvSectionItems>,
): CvSectionItems => ({ name: "Went To University", ...override });

export const buildCv = (override?: Partial<Cv>): Cv => ({
  skillsInfo: { skills: [], languages: [] },
  ...override,
});
