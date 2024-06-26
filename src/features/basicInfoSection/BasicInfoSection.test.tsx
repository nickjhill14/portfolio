import { render, screen } from "@testing-library/react";
import { buildBasicInfo } from "../../utils/builders";
import { BasicInfoSection } from "./BasicInfoSection";

describe(BasicInfoSection, () => {
  it("renders the section", async () => {
    const basicInfo = buildBasicInfo();

    render(<BasicInfoSection basicInfo={basicInfo} />);

    expect(
      screen.getByRole("heading", { name: basicInfo.name, level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("👋")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: basicInfo.role, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: basicInfo.email,
      }),
    ).toHaveAttribute("href", `mailto:${basicInfo.email}`);
    expect(
      screen.getByRole("link", {
        name: basicInfo.linkedIn,
      }),
    ).toHaveAttribute(
      "href",
      `https://www.linkedin.com/in/${basicInfo.linkedIn}`,
    );
    expect(
      screen.getByRole("link", {
        name: basicInfo.gitHub,
      }),
    ).toHaveAttribute("href", `https://www.github.com/${basicInfo.gitHub}`);
  });
});
