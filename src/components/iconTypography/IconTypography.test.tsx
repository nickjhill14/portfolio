import AbcIcon from "@mui/icons-material/Abc";
import { TypographyProps } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { IconTypography, IconTypographyProps } from "./IconTypography";

describe(IconTypography, () => {
  it("renders the icon and text with a given variant", () => {
    const text = "Test";
    const variant: TypographyProps["variant"] = "subtitle1";
    const iconTypographyProps: IconTypographyProps = {
      icon: AbcIcon,
      text,
      variant,
    };

    render(<IconTypography {...iconTypographyProps} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
