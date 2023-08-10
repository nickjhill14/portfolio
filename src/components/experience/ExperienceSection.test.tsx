import { render } from "@testing-library/react";
import { ExperienceSection } from "./ExperienceSection";
import { faker } from "@faker-js/faker";
import { Experience } from "../../domain";

describe(ExperienceSection, () => {
  it("renders the section", () => {
    const name = faker.person.jobTitle();
    const location = faker.location.country();
    const dates = faker.date
      .betweens({
        from: "2011-01-08T00:00:00.000Z",
        to: "2020-02-03T00:00:00.000Z",
        count: 2,
      })
      .join(" - ");
    const experience: Experience = { name, location, dates };

    render(<ExperienceSection experience={experience} />);
  });
});
