import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { buildDateRange } from "../../utils/builders";
import { Section, SectionProps } from "./Section";

describe(Section, () => {
  it("renders the section", () => {
    const heading = faker.company.buzzNoun();
    const location = faker.location.city();
    const dateRange = buildDateRange();
    const sectionProps: SectionProps = { heading, location, dateRange };

    render(<Section {...sectionProps} />);

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
    expect(screen.getByText(dateRange)).toBeInTheDocument();
  });
});
