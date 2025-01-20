import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CollapsibleDetail } from "../../domain/cv";
import { buildDateRange } from "../../utils/builders";
import { SectionDetails } from "./SectionDetails";

describe(SectionDetails, () => {
  describe("header", () => {
    it("renders the header", () => {
      const heading = "Section Details Heading";

      render(<SectionDetails heading={heading} />);

      expect(
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
      expect(
        screen.queryByTestId("LocationOnOutlinedIcon"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByTestId("CalendarMonthOutlinedIcon"),
      ).not.toBeInTheDocument();
      expect(screen.queryByRole("list")).not.toBeInTheDocument();
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("renders the link when provided", () => {
      const link = faker.internet.url();

      render(<SectionDetails heading="Test heading" link={link} />);
      const linkComponent = screen.getByRole("link");

      expect(linkComponent).toHaveAttribute("href", link);
      expect(linkComponent).toHaveAttribute("target", "_blank");
      expect(linkComponent).toHaveAttribute("rel", "noopener noreferrer");
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

      expect(
        screen.getByTestId("CalendarMonthOutlinedIcon"),
      ).toBeInTheDocument();
      expect(screen.getByText(dateRange)).toBeInTheDocument();
    });
  });

  describe("details", () => {
    it("does not render the detail list when there are none", () => {
      render(<SectionDetails heading="Section Details Heading" details={[]} />);

      expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });

    it("renders the section details with detail list", () => {
      const details = ["Detail 1", "Detail 2"];

      render(
        <SectionDetails heading="Section Details Heading" details={details} />,
      );

      expect(screen.getByRole("list")).toBeInTheDocument();
      details.forEach((detail) => {
        const listItem = screen
          .getAllByRole("listitem")
          .find((item) => item.textContent === detail);

        expect(listItem).toBeInTheDocument();
        expect(listItem).toHaveClass("list-disc");
      });
    });

    it("does not render bullet point when there is 1 detail", () => {
      render(
        <SectionDetails
          heading="Section Details Heading"
          details={["Detail 1"]}
        />,
      );

      expect(screen.getByRole("listitem")).not.toHaveClass("list-disc");
    });
  });

  describe("collapsible details", () => {
    it.each([[], undefined])(
      "does not render the collapsible details when %s",
      (collapsibleDetails) => {
        render(
          <SectionDetails
            heading="Section Details Heading"
            collapsibleDetails={collapsibleDetails}
          />,
        );

        expect(screen.queryByRole("button")).not.toBeInTheDocument();
        expect(screen.queryByRole("list")).not.toBeInTheDocument();
      },
    );

    it("opens the accordion to display details when there are collapsible details", async () => {
      const collapsibleDetail: CollapsibleDetail = {
        title: "Detail Heading",
        details: ["Detail 1", "Detail 2"],
      };

      render(
        <SectionDetails
          heading="Section Details Heading"
          collapsibleDetails={[collapsibleDetail]}
        />,
      );
      await userEvent.click(
        screen.getByRole("button", { name: collapsibleDetail.title }),
      );

      expect(screen.getByRole("list")).toBeInTheDocument();
      collapsibleDetail.details.forEach((detail) => {
        const listItem = screen
          .getAllByRole("listitem")
          .find((item) => item.textContent === detail);
        expect(listItem).toBeInTheDocument();
        expect(listItem).toHaveClass("list-disc");
      });
    });

    it("does not render bullet point when there is 1 detail", async () => {
      const collapsibleDetail: CollapsibleDetail = {
        title: "Detail Heading",
        details: ["Detail 1"],
      };

      render(
        <SectionDetails
          heading="Section Details Heading"
          collapsibleDetails={[collapsibleDetail]}
        />,
      );
      await userEvent.click(
        screen.getByRole("button", { name: collapsibleDetail.title }),
      );

      expect(screen.getByRole("listitem")).not.toHaveClass("list-disc");
    });
  });

  describe("divider", () => {
    it("does not render a divider by default", () => {
      render(<SectionDetails heading="Section Details Heading" />);

      expect(screen.queryByTestId("divider")).not.toBeInTheDocument();
    });

    it("renders a divider when set to true", () => {
      render(<SectionDetails heading="Section Details Heading" divider />);

      expect(screen.getByTestId("divider")).toBeInTheDocument();
    });
  });
});
