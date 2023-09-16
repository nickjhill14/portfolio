import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Footer } from "./Footer";

describe(Footer, () => {
  it("changes the colour mode when clicking the colour mode icon", async () => {
    render(<Footer />);
    await userEvent.click(
      screen.getByRole("button", { name: "Toggle light mode" }),
    );

    expect(
      screen.getByRole("button", { name: "Toggle dark mode" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Toggle light mode" }),
    ).not.toBeInTheDocument();
  });

  it("changes the colour mode back clicking the colour mode icon twice", async () => {
    render(<Footer />);
    await userEvent.click(
      screen.getByRole("button", { name: "Toggle light mode" }),
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Toggle dark mode" }),
    );

    expect(
      screen.getByRole("button", { name: "Toggle light mode" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Toggle dark mode" }),
    ).not.toBeInTheDocument();
  });

  it("renders a hidden acknowledgement when the view button is clicked", async () => {
    render(<Footer />);
    await userEvent.click(
      screen.getByRole("button", { name: "View acknowledgements" }),
    );

    expect(
      screen.getByRole("presentation", { name: "Acknowledgements Snackbar" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Thank you to the best pair, Kate")).toBeVisible();
  });

  it("does not render the hidden acknowledgment by default", async () => {
    render(<Footer />);

    expect(
      screen.queryByText("Thank you to the best pair, Kate"),
    ).not.toBeInTheDocument();
  });

  it("closes the hidden acknowledgement on click", async () => {
    render(<Footer />);
    await userEvent.click(
      screen.getByRole("button", { name: "View acknowledgements" }),
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Close acknowledgements" }),
    );

    expect(
      screen.getByText("Thank you to the best pair, Kate"),
    ).not.toBeVisible();
  });
});
