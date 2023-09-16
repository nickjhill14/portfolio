import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLoaderData, useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { buildBasicInfo } from "../../utils/builders";
import { LandingPage } from "./LandingPage";

vitest.mock("react-router-dom");

describe(LandingPage, () => {
  const useLoaderDataMock = vitest.mocked(useLoaderData);

  beforeEach(() => {
    useLoaderDataMock.mockReturnValue(buildBasicInfo());
  });

  it("renders the page", () => {
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
    expect(screen.getByText(basicInfo.phone)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.linkedIn)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.email)).toBeInTheDocument();
    expect(screen.getByText(basicInfo.gitHub)).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("navigates to the CV page when clicking the CV button", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<LandingPage />);
    await userEvent.click(screen.getByRole("link", { name: "View CV" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.CV);
  });

  it("navigates to the create portfolio page when clicking the create button", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<LandingPage />);
    await userEvent.click(screen.getByRole("link", { name: "Create" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.CREATE);
  });
});
