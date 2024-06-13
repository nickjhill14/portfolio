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

  it("does not render the hidden acknowledgment by default", async () => {
    render(<Footer />);

    expect(
      screen.queryByText("Thank you to the best pair, Kate"),
    ).not.toBeInTheDocument();
  });

  it("renders a link to the GH repo", async () => {
    render(<Footer />);
    const visitRepoLink = screen.getByRole("button", { name: "Visit repo" });

    expect(visitRepoLink).toHaveAttribute(
      "href",
      "https://github.com/nickjhill14/portfolio",
    );
    expect(visitRepoLink).toHaveAttribute("target", "_blank");
    expect(visitRepoLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
