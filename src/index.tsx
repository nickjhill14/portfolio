import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { portfolioRouter } from "./routing/portfolioRouting/PortfolioRouting";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <main>
      <ThemeProvider theme={theme}>
        <RouterProvider router={portfolioRouter} />
      </ThemeProvider>
    </main>
    <Analytics />
  </React.StrictMode>,
);
