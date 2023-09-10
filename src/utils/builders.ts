import { faker } from "@faker-js/faker";
import { BasicInfo } from "../domain/basicInfo";
import {
  Achievement,
  CvInfo,
  Education,
  Experience,
  Language,
  Project,
  Skill,
} from "../domain/cvInfo";

function buildBasicInfo(override?: Partial<BasicInfo>): BasicInfo {
  return {
    name: "Portfolio Pete",
    role: "Portfolio Creator",
    email: "portfolio-pete@email.com",
    phoneNumber: "(+44) 765 432 100",
    linkedIn: "portfolio-pete",
    github: "portfolio-pete-dev",
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

function buildExperience(override?: Partial<Experience>): Experience {
  return {
    name: "Portfolio Creator",
    location: "UK",
    dateRange: buildDateRange(),
    ...override,
  };
}

function buildEducation(override?: Partial<Education>): Education {
  return {
    qualification: "Degree In Portfolio Creation",
    institution: "University Of Portfolios",
    dateRange: buildDateRange(),
    ...override,
  };
}

function buildProject(override?: Partial<Project>): Project {
  return {
    name: "Portfolio Generator",
    institution: "Personal Project",
    dateRange: buildDateRange(),
    ...override,
  };
}

function buildAchievement(override?: Partial<Achievement>): Achievement {
  return {
    name: "Certificate In Portfolio Creation",
    description: "Created a portfolio",
    ...override,
  };
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

function buildCvInfo(override?: Partial<CvInfo>): CvInfo {
  return {
    experienceInfo: [buildExperience()],
    educationInfo: [buildEducation()],
    projectInfo: [buildProject()],
    skillInfo: { skills: [buildSkill()], languages: [buildLanguage()] },
    achievementsInfo: [buildAchievement()],
    ...override,
  };
}

export {
  buildAchievement,
  buildBasicInfo,
  buildCvInfo,
  buildDateRange,
  buildEducation,
  buildExperience,
  buildLanguage,
  buildProject,
  buildSkill,
};
