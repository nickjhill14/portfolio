import { render, screen } from "@testing-library/react";
import { buildBasicInfo } from "../../utils/builders";
import { BasicInfoSection } from "./BasicInfoSection";

describe(BasicInfoSection, () => {
  it("renders the section", () => {
    const basicInfo = buildBasicInfo();

    render(<BasicInfoSection basicInfo={basicInfo} />);
    const emailLink = screen.getByRole("link", {
      name: basicInfo.email,
    });
    const linkedInLink = screen.getByRole("link", {
      name: basicInfo.linkedIn,
    });
    const gitHubLink = screen.getByRole("link", {
      name: basicInfo.gitHub,
    });

    expect(
      screen.getByRole("heading", { name: basicInfo.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: basicInfo.role }),
    ).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", `mailto:${basicInfo.email}`);
    expect(emailLink).toHaveAttribute("target", "_blank");
    expect(emailLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkedInLink).toHaveAttribute(
      "href",
      `https://www.linkedin.com/in/${basicInfo.linkedIn}`,
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(gitHubLink).toHaveAttribute(
      "href",
      `https://www.github.com/${basicInfo.gitHub}`,
    );
    expect(gitHubLink).toHaveAttribute("target", "_blank");
    expect(gitHubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  // TODO: Improve the test
  it("renders the section without phone", () => {
    const basicInfo = buildBasicInfo({ phone: undefined });

    render(<BasicInfoSection basicInfo={basicInfo} />);

    expect(screen.queryByTestId("PhoneIcon")).not.toBeInTheDocument();
  });

  it("renders the phone link when provided", () => {
    const phone = "07123456789";

    render(<BasicInfoSection basicInfo={buildBasicInfo({ phone })} />);
    const phoneLink = screen.getByRole("link", { name: phone });

    expect(phoneLink).toHaveAttribute("href", `tel:${phone}`);
    expect(phoneLink).toHaveAttribute("target", "_blank");
    expect(phoneLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
