import { render, screen } from "@testing-library/react";
import { buildDateRange } from "../../utils/builders";
import { SectionDetails } from "./SectionDetails";

describe(SectionDetails, () => {
  it("renders the section details", () => {
    const heading = "Section Details Heading";
    const location = "UK";
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
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("does not render the detail list when there are none", () => {
    render(
      <SectionDetails
        heading="Section Details Heading"
        location="UK"
        dateRange={buildDateRange()}
        details={[]}
      />,
    );

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("renders the section details with detail list", () => {
    const details: string[] = ["Detail 1", "Detail 2"];

    render(
      <SectionDetails
        heading="Section Details Heading"
        location="UK"
        dateRange={buildDateRange()}
        details={details}
      />,
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(details.length);
    expect(screen.getAllByRole("listitem")[0]).toHaveStyle(
      "display: list-item",
    );
    expect(screen.getByText(details[0])).toBeInTheDocument();
    expect(screen.getByText(details[1])).toBeInTheDocument();
  });

  it("does not render bullet point when there is 1 detail", () => {
    const details: string[] = ["Detail 1"];

    render(
      <SectionDetails
        heading="Section Details Heading"
        location="UK"
        dateRange={buildDateRange()}
        details={details}
      />,
    );

    expect(screen.getByRole("listitem")).not.toHaveStyle("display: list-item");
  });
});
