import { Stack, SvgIcon, Typography, TypographyProps } from "@mui/material";
import { MuiIcon } from "../../utils/muiTypes";

type IconTypographyProps = {
  icon: MuiIcon;
  text: string;
  variant: TypographyProps["variant"];
};

function IconTypography({ icon, text, variant }: IconTypographyProps) {
  return (
    // TODO: Center the icon and the text
    <Stack direction="row" spacing={1} alignItems="flexStart">
      <Typography variant={variant}>
        <SvgIcon component={icon} fontSize="inherit" />
      </Typography>
      <Typography variant={variant}>{text}</Typography>
    </Stack>
  );
}

export { IconTypography, type IconTypographyProps };
