import { render, screen } from "@testing-library/react";
import { basicInfo } from "@/config/basicInfo";
import { BasicInfoSection } from "@/features/basicInfoSection/BasicInfoSection";
import { getProps, mockComponent } from "@/utils/ComponentMocks";
import { LandingPage } from "./LandingPage";

vitest.mock("../../features/basicInfoSection/BasicInfoSection");

describe("LandingPage", () => {
  beforeEach(() => {
    mockComponent(BasicInfoSection);
  });

  it("renders the page when loading has completed", async () => {
    render(<LandingPage />);

    expect(getProps(BasicInfoSection).lastCall.basicInfo).toStrictEqual(
      basicInfo,
    );
    expect(screen.getByTestId("landing-page-links")).toBeInTheDocument();
  });
});
