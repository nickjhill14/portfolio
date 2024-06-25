import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe(Footer, () => {
  it("renders a link to the GH repo", async () => {
    render(<Footer />);

    expect(screen.getByRole("button", { name: "Visit repo" })).toHaveAttribute(
      "href",
      "https://github.com/nickjhill14/portfolio",
    );
  });
});
