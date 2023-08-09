import { render, screen } from "@testing-library/react";
import { LandingPage } from "./LandingPage";
import { faker } from "@faker-js/faker";

describe(LandingPage, () => {
  it("renders the page", () => {
    const name = faker.person.fullName();
    const role = faker.person.jobTitle();
    const email = faker.internet.email();
    const phoneNumber = faker.phone.number();
    const linkedIn = faker.internet.userName();
    const github = faker.internet.userName();
    const basicInfo = { name, role, email, phoneNumber, linkedIn, github };

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
