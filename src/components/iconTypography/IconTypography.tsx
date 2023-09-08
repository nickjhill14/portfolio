import {
  Stack,
  SvgIcon,
  Typography,
  type TypographyProps,
} from "@mui/material";
import { ElementType } from "react";
import { MuiIcon } from "../../utils/muiTypes";

type IconTypographyProps = {
  icon: MuiIcon;
  text: string;
  variant: TypographyProps["variant"];
  component?: ElementType;
};

function IconTypography({
  icon,
  text,
  variant,
  component,
}: IconTypographyProps) {
  const typographyProps: TypographyProps = {
    variant,
    component,
  };

  return (
    // TODO: Center the icon and the text
    <Stack direction="row" spacing={1} alignItems="flexStart">
      <Typography {...typographyProps}>
        <SvgIcon component={icon} fontSize="inherit" />
      </Typography>
      <Typography variant={variant}>{text}</Typography>
    </Stack>
  );
}

export { IconTypography };
