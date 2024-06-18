import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe(Footer, () => {
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
