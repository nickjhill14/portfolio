import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { buildDateRange } from "../../utils/builders";
import { SectionDetails } from "./SectionDetails";

describe(SectionDetails, () => {
  it("renders the section details", () => {
    const heading = faker.company.buzzNoun();
    const location = faker.location.city();
    const dateRange = buildDateRange();

    render(
      <SectionDetails
        heading={heading}
        location={location}
        dateRange={dateRange}
      />,
    );

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
    expect(screen.getByText(dateRange)).toBeInTheDocument();
  });
});
