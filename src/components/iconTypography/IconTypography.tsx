import {
  styled,
  SvgIcon,
  Typography,
  type TypographyProps,
} from "@mui/material";
import { ElementType } from "react";
import { MuiIcon } from "../../utils/muiTypes";

const StyledIconTypography = styled(Typography)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: "5px",
});

type IconTypographyProps = {
  icon: MuiIcon;
  text: string;
  variant: TypographyProps["variant"];
  component?: ElementType;
};

export const IconTypography = ({
  icon,
  text,
  variant,
  component,
}: IconTypographyProps) => {
  const typographyProps: TypographyProps = {
    variant,
    component,
  };

  return (
    <StyledIconTypography {...typographyProps}>
      <SvgIcon component={icon} fontSize="inherit" />
      {text}
    </StyledIconTypography>
  );
};
