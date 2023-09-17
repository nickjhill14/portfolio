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
    expect(screen.getByText(basicInfo.email)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.linkedIn)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.email)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.gitHub)).toBeInTheDocument();
    expect(screen.queryByTestId("PhoneIcon")).not.toBeInTheDocument();
    expect(screen.getByTestId("landing-page-links")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders the phone when provided", () => {
    const phone = "07123456789";
    const basicInfo = buildBasicInfo({ phone });

    useLoaderDataMock.mockReturnValue(basicInfo);

    render(<LandingPage />);

    expect(screen.getByText(phone)).toBeInTheDocument();
  });
});
