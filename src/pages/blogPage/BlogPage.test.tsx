import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { basicInfo } from "../../config/basicInfo";
import { PortfolioRoutePaths } from "../../routing/PortfolioRouting";
import { BlogPage } from "./BlogPage";

describe(BlogPage, () => {
  it("renders the page", async () => {
    render(<BlogPage />);

    expect(
      screen.getByRole("heading", { name: "Blog", level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "For blog request and/or any queries. Please contact me here:",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: basicInfo.email,
      }),
    ).toHaveAttribute("href", `mailto:${basicInfo.email}`);
  });

  it("navigates to the react component testing blog page when clicking the btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<BlogPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "React Component Testing" }),
    );

    expect(navigateMock).toHaveBeenCalledWith(
      `${PortfolioRoutePaths.BLOG}/react-component-testing`,
    );
  });
});
