import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { BasicInfo } from "../../domain";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { buildBasicInfo } from "../../utils/builders";
import { LandingPage } from "./LandingPage";

vitest.mock("react-router-dom");

describe(LandingPage, () => {
  it("renders the page", () => {
    const name = faker.person.fullName();
    const role = faker.person.jobTitle();
    const email = faker.internet.email();
    const phoneNumber = faker.phone.number();
    const linkedIn = faker.internet.userName();
    const github = faker.internet.userName();
    const basicInfo: BasicInfo = {
      name,
      role,
      email,
      phoneNumber,
      linkedIn,
      github,
    };

    render(<LandingPage basicInfo={basicInfo} />);

    expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: role })).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(phoneNumber)).toBeInTheDocument();
    expect(screen.getByText(linkedIn)).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(github)).toBeInTheDocument();
  });

  it("renders a link to the CV page", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<LandingPage basicInfo={buildBasicInfo()} />);
    await userEvent.click(screen.getByRole("link", { name: "Go To CV" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.CV);
  });
});
