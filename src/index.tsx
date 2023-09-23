import { Container, styled } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { ThemeProvider } from "./contexts/themeContext/ThemeContext";
import { portfolioRouter } from "./routing/portfolioRouting/PortfolioRouting";

const AppContainer = styled(Container)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

const PageContainer = styled(Container)({
  flex: 1,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <ThemeProvider>
      <main>
        <AppContainer disableGutters maxWidth={false}>
          <PageContainer disableGutters maxWidth={false}>
            <RouterProvider router={portfolioRouter} />
          </PageContainer>
          <Footer />
        </AppContainer>
      </main>
    </ThemeProvider>
    <Analytics />
  </StrictMode>,
);
