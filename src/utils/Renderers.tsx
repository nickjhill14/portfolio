import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";

function renderWithMemoryRouter(component: ReactElement) {
  render(<MemoryRouter>{component}</MemoryRouter>);
}

export { renderWithMemoryRouter };
