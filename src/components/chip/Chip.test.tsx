import { render, screen } from "@testing-library/react";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("applies additional className when provided", () => {
    const className = "bg-red-500";
    const text = "Test";

    render(<Chip text={text} className={className} />);

    expect(screen.getByText(text)).toHaveClass(className);
  });
});
