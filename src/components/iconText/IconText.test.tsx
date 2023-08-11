import AbcIcon from "@mui/icons-material/Abc";
import { render, screen } from "@testing-library/react";
import { IconText, IconTextProps } from "./IconText";

describe(IconText, () => {
  it("renders the icon and text", () => {
    const icon = AbcIcon;
    const text = "Test";
    const iconTextProps: IconTextProps = { icon, text };

    render(<IconText {...iconTextProps} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
