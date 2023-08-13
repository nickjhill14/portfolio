import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { buildDateRange } from "../../utils/builders";
import { Section } from "./Section";

describe(Section, () => {
  it("renders the section", () => {
    const heading = faker.company.buzzNoun();
    const location = faker.location.city();
    const dateRange = buildDateRange();

    render(
      <Section heading={heading} location={location} dateRange={dateRange} />,
    );

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
    expect(screen.getByText(dateRange)).toBeInTheDocument();
  });
});
