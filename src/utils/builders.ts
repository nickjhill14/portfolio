import { faker } from "@faker-js/faker";
import { BasicInfo } from "../domain/basicInfo";
import { Language } from "../domain/cv";
import { Project } from "../domain/projects";
import { Skill, SkillKey } from "../domain/skills";

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
  key: SkillKey.other,
  name: faker.hacker.noun(),
  ...override,
});

export const buildLanguage = (override?: Partial<Language>): Language => ({
  name: "English",
  level: 5,
  ...override,
});

export const buildProject = (override?: Partial<Project>): Project => ({
  title: faker.hacker.noun(),
  description: faker.lorem.sentence(),
  githubLink: faker.internet.url(),
  skills: [],
  ...override,
});
