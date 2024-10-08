import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import "./index.css";
import { portfolioRouter } from "./routing/portfolioRouting/PortfolioRouting";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <main className="h-screen flex flex-col justify-between pt-8 px-4 md:pt-16 md:px-16 pb-4">
          <RouterProvider router={portfolioRouter} />
          <Footer />
        </main>
      </ThemeProvider>
    </NextUIProvider>
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
);
