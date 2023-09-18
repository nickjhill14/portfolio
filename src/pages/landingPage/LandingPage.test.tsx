import { render, screen } from "@testing-library/react";
import { useLoaderData } from "react-router-dom";
import { buildBasicInfo } from "../../utils/builders";
import { LandingPage } from "./LandingPage";

vitest.mock("react-router-dom");

describe(LandingPage, () => {
  const useLoaderDataMock = vitest.mocked(useLoaderData);

  beforeEach(() => {
    useLoaderDataMock.mockReturnValue(buildBasicInfo());
  });

  it("renders the page (without phone)", () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue(basicInfo);

    render(<LandingPage />);

    expect(
      screen.getByRole("heading", { name: basicInfo.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: basicInfo.role }),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("PhoneIcon")).not.toBeInTheDocument();
    expect(screen.getByTestId("landing-page-links")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders an email link", () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue(basicInfo);

    render(<LandingPage />);
    const emailLink = screen.getByRole("link", { name: basicInfo.email });

    expect(emailLink).toHaveAttribute("href", `mailto:${basicInfo.email}`);
    expect(emailLink).toHaveAttribute("target", "_blank");
    expect(emailLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a LinkedIn link", () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue(basicInfo);

    render(<LandingPage />);
    const linkedInLink = screen.getByRole("link", { name: basicInfo.linkedIn });

    expect(linkedInLink).toHaveAttribute(
      "href",
      `https://www.linkedin.com/in/${basicInfo.linkedIn}`,
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a GH link", () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue(basicInfo);

    render(<LandingPage />);
    const gitHubLink = screen.getByRole("link", { name: basicInfo.gitHub });

    expect(gitHubLink).toHaveAttribute(
      "href",
      `https://www.github.com/${basicInfo.gitHub}`,
    );
    expect(gitHubLink).toHaveAttribute("target", "_blank");
    expect(gitHubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the phone link when provided", () => {
    const phone = "07123456789";
    const basicInfo = buildBasicInfo({ phone });

    useLoaderDataMock.mockReturnValue(basicInfo);

    render(<LandingPage />);
    const phoneLink = screen.getByRole("link", { name: phone });

    expect(phoneLink).toHaveAttribute("href", `tel:${phone}`);
    expect(phoneLink).toHaveAttribute("target", "_blank");
    expect(phoneLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
