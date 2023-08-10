import { faker } from "@faker-js/faker";
import { Experience } from "../domain";

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

export { buildExperience };
