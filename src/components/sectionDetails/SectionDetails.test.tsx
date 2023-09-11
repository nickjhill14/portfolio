import { render, screen } from "@testing-library/react";
import { buildDateRange } from "../../utils/builders";
import { SectionDetails } from "./SectionDetails";

describe(SectionDetails, () => {
  it("renders the section details", () => {
    const heading = "Section Details Heading";

    render(<SectionDetails heading={heading} />);

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(
      screen.queryByTestId("LocationOnOutlinedIcon"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("CalendarMonthOutlinedIcon"),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("renders the location when provided", () => {
    const heading = "Section Details Heading";
    const location = "UK";

    render(<SectionDetails heading={heading} location={location} />);

    expect(screen.getByTestId("LocationOnOutlinedIcon")).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
  });

  it("renders the date when provided", () => {
    const heading = "Section Details Heading";
    const dateRange = buildDateRange();

    render(<SectionDetails heading={heading} dateRange={dateRange} />);

    expect(screen.getByTestId("CalendarMonthOutlinedIcon")).toBeInTheDocument();
    expect(screen.getByText(dateRange)).toBeInTheDocument();
  });

  it("does not render the detail list when there are none", () => {
    render(<SectionDetails heading="Section Details Heading" details={[]} />);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("renders the section details with detail list", () => {
    const details: string[] = ["Detail 1", "Detail 2"];

    render(
      <SectionDetails heading="Section Details Heading" details={details} />,
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
      <SectionDetails heading="Section Details Heading" details={details} />,
    );

    expect(screen.getByRole("listitem")).not.toHaveStyle("display: list-item");
  });

  it("does not render a divider by default", () => {
    render(<SectionDetails heading="Section Details Heading" />);

    expect(screen.queryByTestId("divider")).not.toBeInTheDocument();
  });

  it("renders a divider when set to true", () => {
    render(<SectionDetails heading="Section Details Heading" divider />);

    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });
});
