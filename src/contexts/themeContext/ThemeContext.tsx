import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const ColourMode = createContext({ toggleColourMode: () => {} });

function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colourMode = useMemo(
    () => ({
      toggleColourMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiOutlinedInput: {
            styleOverrides: {
              input: {
                "&:-webkit-autofill": {
                  backgroundClip: "text",
                },
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColourMode.Provider value={colourMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColourMode.Provider>
  );
}

function useColourMode() {
  return useContext(ColourMode);
}

export { ThemeProvider, useColourMode };
