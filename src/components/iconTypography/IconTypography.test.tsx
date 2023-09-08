import AbcIcon from "@mui/icons-material/Abc";
import type { TypographyProps } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { IconTypography } from "./IconTypography";

describe(IconTypography, () => {
  it("renders the icon and text with a given variant", () => {
    const text = "Test";
    const variant: TypographyProps["variant"] = "subtitle1";

    render(<IconTypography icon={AbcIcon} text={text} variant={variant} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders the typography with an overridden component", () => {
    const text = "Test";

    render(
      <IconTypography icon={AbcIcon} text={text} variant="h1" component="h4" />,
    );

    expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
  });
});
