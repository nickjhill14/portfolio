import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { Page } from "./Page";

describe(Page, () => {
  it("renders the children (without home button)", () => {
    const buttonText = "Click Me!";
    const children = <button>{buttonText}</button>;

    render(<Page showHomeButton={false}>{children}</Page>);

    expect(
      screen.getByRole("button", { name: buttonText }),
    ).toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<Page showHomeButton />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
