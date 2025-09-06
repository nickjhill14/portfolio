import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTheme } from "next-themes";
import { Footer } from "./Footer";

vitest.mock("next-themes");

describe("Footer", () => {
  const mockUseTheme = vitest.mocked(useTheme);

  beforeEach(() => {
    mockUseTheme.mockReturnValue({ themes: [], setTheme: vitest.fn() });
  });

  it("renders the footer", async () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "Visit repo" })).toHaveAttribute(
      "href",
      "https://github.com/nickjhill14/portfolio",
    );
    expect(screen.getByText("Developed by Nicholas Hill")).toBeInTheDocument();
  });

  it("sets the mode to dark on click", async () => {
    const mockSetTheme = vitest.fn();

    mockUseTheme.mockReturnValue({
      theme: "light",
      themes: [],
      setTheme: mockSetTheme,
    });

    render(<Footer />);
    await userEvent.click(
      screen.getByRole("button", { name: "Change to dark mode" }),
    );

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("sets the mode to light on click", async () => {
    const mockSetTheme = vitest.fn();

    mockUseTheme.mockReturnValue({
      theme: "dark",
      themes: [],
      setTheme: mockSetTheme,
    });

    render(<Footer />);
    await userEvent.click(
      screen.getByRole("button", { name: "Change to light mode" }),
    );

    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
