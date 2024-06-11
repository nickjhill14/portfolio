import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";

const ColourMode = createContext({
  toggleColourMode: () => {
  }
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colourMode = useMemo(
    () => ({
      toggleColourMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  return (
    <ColourMode.Provider value={colourMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColourMode.Provider>
  );
};

export const useColourMode = () => useContext(ColourMode);
