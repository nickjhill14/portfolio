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
    expect(
      screen.queryByText("Thank you to the best pair, Kate"),
    ).not.toBeInTheDocument();
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

  it("changes the colour mode to dark when clicking the colour mode icon", async () => {
    render(<LandingPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "Toggle dark mode" }),
    );

    expect(
      screen.getByRole("button", { name: "Toggle light mode" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Toggle dark mode" }),
    ).not.toBeInTheDocument();
  });

  it("changes the colour mode back to light clicking the colour mode icon twice", async () => {
    render(<LandingPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "Toggle dark mode" }),
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Toggle light mode" }),
    );

    expect(
      screen.getByRole("button", { name: "Toggle dark mode" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Toggle light mode" }),
    ).not.toBeInTheDocument();
  });

  it("renders a hidden acknowledgement", async () => {
    render(<LandingPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "View acknowledgements" }),
    );

    expect(
      screen.getByRole("presentation", { name: "Acknowledgements Snackbar" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Thank you to the best pair, Kate")).toBeVisible();
  });

  it("closes the hidden acknowledgement on click", async () => {
    render(<LandingPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "View acknowledgements" }),
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Close acknowledgements" }),
    );

    expect(
      screen.getByText("Thank you to the best pair, Kate"),
    ).not.toBeVisible();
  });
});
