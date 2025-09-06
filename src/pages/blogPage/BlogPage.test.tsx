import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { basicInfo } from "@/config/basicInfo";
import { blogs } from "@/config/blog";

import { PortfolioRoutePaths } from "@/routing/routePaths";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));
vi.mock("@/config/basicInfo", () => ({
  basicInfo: {
    email: "test@example.com",
  },
}));
vi.mock("@/config/blog", () => ({
  blogs: [
    {
      title: "React Component Testing",
      readTime: 5,
    },
  ],
}));

describe("BlogPage", () => {
  const mockUseNavigate = vi.mocked(useNavigate);

  it("displays main heading", () => {
    render(<BlogPage />);

    expect(screen.getByRole("heading", { name: "Blog" })).toBeInTheDocument();
  });

  it("displays contact message with email link", () => {
    render(<BlogPage />);

    expect(
      screen.getByText(
        new RegExp(
          "For blog request and/or any queries. Please contact me here:",
        ),
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: basicInfo.email })).toHaveAttribute(
      "href",
      `mailto:${basicInfo.email}`,
    );
  });

  it("marks email link as external", () => {
    render(<BlogPage />);

    expect(
      screen.getByRole("link", { name: basicInfo.email }),
    ).toBeInTheDocument();
  });

  it("displays blog button with first blog title", () => {
    render(<BlogPage />);

    expect(
      screen.getByRole("button", { name: blogs[0].title }),
    ).toBeInTheDocument();
  });

  it("navigates to blog post when blog button is clicked", async () => {
    const mockNavigate = vi.fn();

    mockUseNavigate.mockReturnValue(mockNavigate);

    render(<BlogPage />);
    await userEvent.click(screen.getByRole("button", { name: blogs[0].title }));

    expect(mockNavigate).toHaveBeenCalledWith(
      `${PortfolioRoutePaths.BLOG}/${blogs[0].title
        .replaceAll(" ", "-")
        .toLowerCase()}`,
    );
  });

  it("formats blog title correctly for URL", async () => {
    const mockNavigate = vi.fn();

    mockUseNavigate.mockReturnValue(mockNavigate);

    render(<BlogPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "React Component Testing" }),
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      `${PortfolioRoutePaths.BLOG}/react-component-testing`,
    );
  });
});
