import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { afterEach } from "vitest";
import { basicInfo } from "../../config/basicInfo";
import { BasicInfoSection } from "../../features/basicInfoSection/BasicInfoSection";
import { LandingPageLinks } from "../../features/landingPageLinks/LandingPageLinks";
import { getProps, mockComponent } from "../../utils/ComponentMocks";
import { LandingPage } from "./LandingPage";

vitest.mock("../../features/basicInfoSection/BasicInfoSection");
vitest.mock("../../features/landingPageLinks/LandingPageLinks");
vitest.mock("react-router-dom", async () => ({
  ...(await vitest.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  )),
  useNavigate: () => vitest.fn(),
}));

describe(LandingPage, () => {
  beforeEach(() => {
    mockComponent(BasicInfoSection);
    mockComponent(LandingPageLinks);
    vitest.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("renders the page", () => {
    render(<LandingPage />);

    expect(getProps(BasicInfoSection).lastCall.basicInfo).toStrictEqual(
      basicInfo,
    );
    expect(screen.getByText(LandingPageLinks.name)).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Jumping dog" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "👋 Welcome!", level: 2 }),
    ).not.toBeInTheDocument();
  });

  it.todo("renders the welcome message after 4.5 secs", async () => {
    render(<LandingPage />);
    act(() => {
      vi.advanceTimersByTime(4500);
    });

    expect(
      screen.getByRole("heading", { name: "👋 Welcome!", level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("img", { name: "Jumping dog" }),
    ).not.toBeInTheDocument();
  });
});
