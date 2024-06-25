import { screen } from "@testing-library/react";
import { basicInfo } from "../../config/basicInfo";
import { BasicInfoSection } from "../../features/basicInfoSection/BasicInfoSection";
import { getProps, mockComponent } from "../../utils/ComponentMocks";
import { renderWithMemoryRouter } from "../../utils/Renderers";
import { LandingPage } from "./LandingPage";

vitest.mock("../../features/basicInfoSection/BasicInfoSection");
vitest.mock("react-router-dom", async () => ({
  ...(await vitest.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  )),
  useNavigate: () => vitest.fn(),
}));

describe(LandingPage, () => {
  beforeEach(() => {
    mockComponent(BasicInfoSection);
  });

  it("renders the page when loading has completed", async () => {
    renderWithMemoryRouter(<LandingPage />);

    expect(getProps(BasicInfoSection).lastCall.basicInfo).toStrictEqual(
      basicInfo,
    );
    expect(screen.getByTestId("landing-page-links")).toBeInTheDocument();
  });
});
