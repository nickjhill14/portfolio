import { screen } from "@testing-library/react";
import { useLoaderData } from "react-router-typesafe";
import { renderWithMemoryRouter } from "../../utils/Renderers";
import { buildBasicInfo } from "../../utils/builders";
import { LandingPage } from "./LandingPage";

const navigateMock = vitest.fn();

vitest.mock("react-router-typesafe");
vitest.mock("react-router-dom", async () => ({
  ...(await vitest.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  )),
  useNavigate: () => navigateMock,
}));

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
  });

  it("renders the page when loading has completed", async () => {
    const basicInfo = buildBasicInfo();

    useLoaderDataMock.mockReturnValue({
      basicInfo: Promise.resolve(basicInfo),
    });

    renderWithMemoryRouter(<LandingPage />);

    expect(
      await screen.findByRole("heading", { name: basicInfo.name }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("landing-page-links")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(
      screen.queryByTestId("landing-page-skeleton"),
    ).not.toBeInTheDocument();
  });
});
