import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { buildBasicInfo } from "../../utils/builders";
import { downloadJson } from "../../utils/helpers/helpers";
import {
  CreateBasicInfoSection,
  defaultBasicInfo,
} from "./CreateBasicInfoSection";

vitest.mock("../../utils/helpers/helpers");

describe(CreateBasicInfoSection, () => {
  it("renders the section", () => {
    render(<CreateBasicInfoSection />);

    expect(
      screen.getByRole("heading", { name: "Create Basic Info" }),
    ).toBeInTheDocument();
  });

  it("displays the basic info provided in a preview window (without phone)", async () => {
    const basicInfo = buildBasicInfo({ phone: undefined });

    render(<CreateBasicInfoSection />);
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

    render(<CreateBasicInfoSection />);
    await userEvent.click(screen.getByRole("checkbox", { name: "Enable" }));
    await userEvent.type(screen.getByRole("textbox", { name: "Phone" }), phone);

    expect(
      await screen.findByText(`"phone": "${phone}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("checkbox", { name: "Enable" }),
    ).not.toBeInTheDocument();
  });

  it("disables phone field by default", async () => {
    render(<CreateBasicInfoSection />);

    expect(screen.getByRole("textbox", { name: "Phone" })).toBeDisabled();
    expect(
      screen.getByRole("checkbox", { name: "Enable" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("checkbox", { name: "Disable" }),
    ).not.toBeInTheDocument();
  });

  it("clears and disables the phone field when disabling the input field", async () => {
    render(<CreateBasicInfoSection />);
    await userEvent.click(screen.getByRole("checkbox", { name: "Enable" }));
    await userEvent.type(
      screen.getByRole("textbox", { name: "Phone" }),
      "07123456789",
    );
    await userEvent.click(screen.getByRole("checkbox", { name: "Disable" }));

    expect(screen.getByRole("textbox", { name: "Phone" })).toHaveValue("");
    expect(screen.getByRole("textbox", { name: "Phone" })).toBeDisabled();
  });

  it("downloads the basic info when the download button has been clicked", async () => {
    vitest.mocked(downloadJson);

    render(<CreateBasicInfoSection />);
    await userEvent.click(screen.getByRole("button", { name: "Download" }));

    expect(downloadJson).toHaveBeenCalledWith(
      "basic-info",
      JSON.stringify(defaultBasicInfo, null, 2),
    );
  });
});
