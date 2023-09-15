import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreatePortfolioPage } from "./CreatePortfolioPage";

describe(CreatePortfolioPage, () => {
  it("renders the page", () => {
    render(<CreatePortfolioPage />);

    expect(
      screen.getByRole("heading", { name: "Create A Portfolio" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Add Basic Info" }),
    ).toBeInTheDocument();
  });

  it("displays the basic info provided in a preview window", async () => {
    const name = "Nick Hill";
    const role = "Senior Consultant Developer";

    render(<CreatePortfolioPage />);
    await userEvent.type(screen.getByRole("textbox", { name: "Name" }), name);
    await userEvent.type(screen.getByRole("textbox", { name: "Role" }), role);

    expect(
      screen.getByText(`"name": "${name}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`"role": "${role}"`, { exact: false }),
    ).toBeInTheDocument();
  });
});
