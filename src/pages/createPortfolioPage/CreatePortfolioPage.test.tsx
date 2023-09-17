import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { buildBasicInfo } from "../../utils/builders";
import { downloadJson } from "../../utils/helpers/helpers";
import { CreatePortfolioPage, defaultBasicInfo } from "./CreatePortfolioPage";

vitest.mock("react-router-dom");
vitest.mock("../../utils/helpers/helpers");

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

  it("navigates to the landing page when clicking the home button", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<CreatePortfolioPage />);
    await userEvent.click(screen.getByRole("link", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });

  it("displays the basic info provided in a preview window (without phone)", async () => {
    const basicInfo = buildBasicInfo({ phone: undefined });

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
      screen.getByText(`"gitHub": "${basicInfo.gitHub}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`"linkedIn": "${basicInfo.linkedIn}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("phone: ", { exact: false }),
    ).not.toBeInTheDocument();
  });

  it("adds the phone to the preview", async () => {
    const phone = "07123456789";

    render(<CreatePortfolioPage />);
    await userEvent.click(screen.getByRole("checkbox", { name: "Enable" }));
    await userEvent.type(screen.getByRole("textbox", { name: "Phone" }), phone);

    expect(
      screen.getByText(`"phone": "${phone}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("checkbox", { name: "Enable" }),
    ).not.toBeInTheDocument();
  });

  it("disables phone field by default", async () => {
    render(<CreatePortfolioPage />);

    expect(screen.getByRole("textbox", { name: "Phone" })).toBeDisabled();
    expect(
      screen.getByRole("checkbox", { name: "Enable" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("checkbox", { name: "Disable" }),
    ).not.toBeInTheDocument();
  });

  it("clears and disables the phone field when disabling the input field", async () => {
    render(<CreatePortfolioPage />);
    await userEvent.click(screen.getByRole("checkbox", { name: "Enable" }));
    await userEvent.type(
      screen.getByRole("textbox", { name: "Phone" }),
      "07123456789",
    );
    await userEvent.click(screen.getByRole("checkbox", { name: "Disable" }));

    expect(screen.getByRole("textbox", { name: "Phone" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "Phone" })).toBeDisabled();
    expect(
      screen.queryByText("phone: ", { exact: false }),
    ).not.toBeInTheDocument();
  });

  it("copies the preview JSON to the clipboard when the clipboard icon has been clicked", async () => {
    userEvent.setup();
    render(<CreatePortfolioPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "Copy to clipboard" }),
    );
    const clipboardText = await navigator.clipboard.readText();

    expect(clipboardText).toEqual(JSON.stringify(defaultBasicInfo, null, 2));
    expect(screen.getByText("Copied to clipboard")).toBeInTheDocument();
  });

  it("removes the copied to clipboard tooltip on click away", async () => {
    render(<CreatePortfolioPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "Copy to clipboard" }),
    );
    await userEvent.click(screen.getByRole("textbox", { name: "Name" }));

    await waitFor(() => {
      expect(screen.queryByText("Copied to clipboard")).not.toBeInTheDocument();
    });
  });

  it("downloads the basic info when the download button has been clicked", async () => {
    vitest.mocked(downloadJson);

    render(<CreatePortfolioPage />);
    await userEvent.click(screen.getByRole("button", { name: "Download" }));

    expect(downloadJson).toHaveBeenCalledWith(
      "basic-info",
      JSON.stringify(defaultBasicInfo, null, 2),
    );
  });
});
