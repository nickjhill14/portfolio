import { faker } from "@faker-js/faker";
import { BasicInfo, Experience } from "../domain";

function buildBasicInfo(override?: Partial<BasicInfo>): BasicInfo {
  return {
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    linkedIn: faker.internet.userName(),
    github: faker.internet.userName(),
    ...override,
  };
}

function buildExperience(override?: Partial<Experience>): Experience {
  return {
    name: faker.person.jobTitle(),
    location: faker.location.country(),
    dates: faker.date
      .betweens({
        from: "2011-01-08T00:00:00.000Z",
        to: "2020-02-03T00:00:00.000Z",
        count: 2,
      })
      .join(" - "),
    ...override,
  };
}

export { buildBasicInfo, buildExperience };
