import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { BasicInfo } from "../../domain";
import { LandingPage } from "./LandingPage";

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
});
