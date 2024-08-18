import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";

export const renderWithMemoryRouter = (component: ReactElement) =>
  render(<MemoryRouter>{component}</MemoryRouter>);
