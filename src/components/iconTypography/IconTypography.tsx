import {
  Stack,
  SvgIcon,
  SvgIconTypeMap,
  Typography,
  TypographyProps,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type IconTypographyProps = {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
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
