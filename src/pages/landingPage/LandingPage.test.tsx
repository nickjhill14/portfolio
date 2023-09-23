import { screen } from "@testing-library/react";
import { useLoaderData } from "react-router-typesafe";
import { renderWithMemoryRouter } from "../../utils/Renderers";
import { buildBasicInfo } from "../../utils/builders";
import { LandingPage } from "./LandingPage";

const navigateMock = vitest.fn();

vitest.mock("react-router-typesafe");
vitest.mock("react-router-dom", async () => {
  const actual = await vitest.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  );

  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe(LandingPage, () => {
  const useLoaderDataMock = vitest.mocked(useLoaderData);

  it("renders a loading skeleton when loading basic info data", async () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue({
      basicInfo: Promise.resolve(basicInfo),
    });

    renderWithMemoryRouter(<LandingPage />);

    expect(screen.getByTestId("landing-page-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("landing-page-links")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { name: basicInfo.name }),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId("landing-page-skeleton"),
    ).not.toBeInTheDocument();
  });

  it("renders the page (without phone)", async () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue({
      basicInfo: Promise.resolve(basicInfo),
    });

    renderWithMemoryRouter(<LandingPage />);

    expect(
      await screen.findByRole("heading", { name: basicInfo.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: basicInfo.role }),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("PhoneIcon")).not.toBeInTheDocument();
  });

  it("renders an email link", async () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue({
      basicInfo: Promise.resolve(basicInfo),
    });

    renderWithMemoryRouter(<LandingPage />);
    const emailLink = await screen.findByRole("link", {
      name: basicInfo.email,
    });

    expect(emailLink).toHaveAttribute("href", `mailto:${basicInfo.email}`);
    expect(emailLink).toHaveAttribute("target", "_blank");
    expect(emailLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a LinkedIn link", async () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue({
      basicInfo: Promise.resolve(basicInfo),
    });

    renderWithMemoryRouter(<LandingPage />);
    const linkedInLink = await screen.findByRole("link", {
      name: basicInfo.linkedIn,
    });

    expect(linkedInLink).toHaveAttribute(
      "href",
      `https://www.linkedin.com/in/${basicInfo.linkedIn}`,
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a GH link", async () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue({
      basicInfo: Promise.resolve(basicInfo),
    });

    renderWithMemoryRouter(<LandingPage />);
    const gitHubLink = await screen.findByRole("link", {
      name: basicInfo.gitHub,
    });

    expect(gitHubLink).toHaveAttribute(
      "href",
      `https://www.github.com/${basicInfo.gitHub}`,
    );
    expect(gitHubLink).toHaveAttribute("target", "_blank");
    expect(gitHubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the phone link when provided", async () => {
    const phone = "07123456789";
    const basicInfo = buildBasicInfo({ phone });

    useLoaderDataMock.mockReturnValue({
      basicInfo: Promise.resolve(basicInfo),
    });

    renderWithMemoryRouter(<LandingPage />);
    const phoneLink = await screen.findByRole("link", { name: phone });

    expect(phoneLink).toHaveAttribute("href", `tel:${phone}`);
    expect(phoneLink).toHaveAttribute("target", "_blank");
    expect(phoneLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
