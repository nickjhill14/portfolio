import { useTheme } from "@mui/material";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useColourMode } from "./ThemeContext";

describe("ThemeContext", () => {
  function TestComponent() {
    const theme = useTheme();
    const { toggleColourMode } = useColourMode();

    return (
      <>
        {theme.palette.mode}
        <button onClick={() => toggleColourMode()}>Toggle Colour Mode</button>
      </>
    );
  }

  it("renders the current mode", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByText("light")).toBeInTheDocument();
    expect(screen.queryByText("dark")).not.toBeInTheDocument();
  });

  it("toggles the mode", async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Toggle Colour Mode" }),
    );

    expect(screen.getByText("dark")).toBeInTheDocument();
    expect(screen.queryByText("light")).not.toBeInTheDocument();
  });
});
