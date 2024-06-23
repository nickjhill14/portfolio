import { render, screen } from "@testing-library/react";
import { Page } from "./Page";

describe(Page, () => {
  it("renders the children", () => {
    const buttonText = "Click Me!";
    const children = <button>{buttonText}</button>;

    render(<Page>{children}</Page>);

    expect(
      screen.getByRole("button", { name: buttonText }),
    ).toBeInTheDocument();
  });
});
