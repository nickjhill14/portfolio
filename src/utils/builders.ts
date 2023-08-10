import { faker } from "@faker-js/faker";
import { BasicInfo, Education, Experience } from "../domain";
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

export { buildBasicInfo, buildDateRange, buildExperience, buildEducation };
