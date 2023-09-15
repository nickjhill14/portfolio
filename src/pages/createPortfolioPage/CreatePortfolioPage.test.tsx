import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { buildBasicInfo } from "../../utils/builders";
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
    expect(
      screen.getByRole("heading", { name: "Preview" }),
    ).toBeInTheDocument();
  });

  it("displays the basic info provided in a preview window", async () => {
    const basicInfo = buildBasicInfo();

    render(<CreatePortfolioPage />);
    await userEvent.type(
      screen.getByRole("textbox", { name: "Name" }),
      basicInfo.name,
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "Role" }),
      basicInfo.role,
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "Email" }),
      basicInfo.email,
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "Phone" }),
      basicInfo.phone,
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "GitHub" }),
      basicInfo.gitHub,
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "LinkedIn" }),
      basicInfo.linkedIn,
    );

    expect(
      screen.getByText(`"name": "${basicInfo.name}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`"role": "${basicInfo.role}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`"email": "${basicInfo.email}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`"phone": "${basicInfo.phone}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`"gitHub": "${basicInfo.gitHub}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`"linkedIn": "${basicInfo.linkedIn}"`, { exact: false }),
    ).toBeInTheDocument();
  });
});
