import { faker } from "@faker-js/faker";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import {
  Achievement,
  BasicInfo,
  Education,
  Experience,
  Language,
  Project,
  Skill,
} from "../domain";
import { upperCaseFirstChar } from "./helpers";

function buildBasicInfo(override?: Partial<BasicInfo>): BasicInfo {
  return {
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number("+44 7## ### ###"),
    linkedIn: faker.internet.userName(),
    github: faker.internet.userName(),
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
    name: faker.person.jobTitle(),
    location: faker.location.country(),
    dateRange: buildDateRange(),
    ...override,
  };
}

function buildEducation(override?: Partial<Education>): Education {
  return {
    qualification: `Degree In ${upperCaseFirstChar(faker.company.buzzNoun())}`,
    institution: `School Of ${faker.location.city()}`,
    dateRange: buildDateRange(),
    ...override,
  };
}

function buildProject(override?: Partial<Project>): Project {
  return {
    name: upperCaseFirstChar(faker.company.buzzNoun()),
    institution: `School Of ${faker.location.city()}`,
    dateRange: buildDateRange(),
    ...override,
  };
}

function buildAchievement(override?: Partial<Achievement>): Achievement {
  return {
    name: `Certificate In ${upperCaseFirstChar(faker.company.buzzNoun())}`,
    icon: EmojiEventsOutlinedIcon,
    description: faker.lorem.sentence(5),
    ...override,
  };
}

function buildSkill(): Skill {
  return upperCaseFirstChar(faker.hacker.ingverb());
}

function buildLanguage(override?: Partial<Language>): Language {
  return {
    name: faker.location.country(),
    level: faker.number.int(5),
    ...override,
  };
}

export {
  buildBasicInfo,
  buildDateRange,
  buildExperience,
  buildEducation,
  buildProject,
  buildAchievement,
  buildSkill,
  buildLanguage,
};
