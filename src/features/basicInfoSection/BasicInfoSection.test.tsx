import { render, screen } from "@testing-library/react";
import { buildBasicInfo } from "../../utils/builders";
import { BasicInfoSection } from "./BasicInfoSection";

describe(BasicInfoSection, () => {
  it("renders the name", () => {
    const basicInfo = buildBasicInfo();

    render(<BasicInfoSection basicInfo={basicInfo} />);

    expect(
      screen.getByRole("heading", { name: basicInfo.name }),
    ).toBeInTheDocument();
  });

  it("renders the role", () => {
    const basicInfo = buildBasicInfo();

    render(<BasicInfoSection basicInfo={basicInfo} />);

    expect(
      screen.getByRole("heading", { name: basicInfo.role }),
    ).toBeInTheDocument();
  });

  it("renders an email link", () => {
    const basicInfo = buildBasicInfo();

    render(<BasicInfoSection basicInfo={basicInfo} />);
    const emailLink = screen.getByRole("link", {
      name: basicInfo.email,
    });

    expect(emailLink).toHaveAttribute("href", `mailto:${basicInfo.email}`);
    expect(emailLink).toHaveAttribute("target", "_blank");
    expect(emailLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a LinkedIn link", () => {
    const basicInfo = buildBasicInfo();

    render(<BasicInfoSection basicInfo={basicInfo} />);
    const linkedInLink = screen.getByRole("link", {
      name: basicInfo.linkedIn,
    });

    expect(linkedInLink).toHaveAttribute(
      "href",
      `https://www.linkedin.com/in/${basicInfo.linkedIn}`,
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a GH link", () => {
    const basicInfo = buildBasicInfo();

    render(<BasicInfoSection basicInfo={basicInfo} />);
    const gitHubLink = screen.getByRole("link", {
      name: basicInfo.gitHub,
    });

    expect(gitHubLink).toHaveAttribute(
      "href",
      `https://www.github.com/${basicInfo.gitHub}`,
    );
    expect(gitHubLink).toHaveAttribute("target", "_blank");
    expect(gitHubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the section without phone", () => {
    const basicInfo = buildBasicInfo({ phone: undefined });

    render(<BasicInfoSection basicInfo={basicInfo} />);

    expect(screen.queryByTestId("PhoneIcon")).not.toBeInTheDocument();
  });

  it("renders the phone link when provided", () => {
    const phone = "07123456789";
    const basicInfo = buildBasicInfo({ phone });

    render(<BasicInfoSection basicInfo={basicInfo} />);
    const phoneLink = screen.getByRole("link", { name: phone });

    expect(phoneLink).toHaveAttribute("href", `tel:${phone}`);
    expect(phoneLink).toHaveAttribute("target", "_blank");
    expect(phoneLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
