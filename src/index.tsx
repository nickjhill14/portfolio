import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeContext/ThemeContext";
import { portfolioRouter } from "./routing/portfolioRouting/PortfolioRouting";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <ThemeProvider>
      <main>
        <RouterProvider router={portfolioRouter} />
      </main>
    </ThemeProvider>
    <Analytics />
  </StrictMode>,
);
