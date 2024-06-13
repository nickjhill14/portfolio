import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { portfolioRouter } from "./routing/portfolioRouting/PortfolioRouting";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <NextUIProvider>
      <main>
        <RouterProvider router={portfolioRouter} />
      </main>
    </NextUIProvider>
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
);
