import { Stack, SvgIcon, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type IconTextProps = {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  text: string;
};

function IconText({ icon, text }: IconTextProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="flexStart">
      <Typography variant="h2">
        <SvgIcon component={icon} fontSize="inherit" />
      </Typography>
      <Typography variant="h2">{text}</Typography>
    </Stack>
  );
}

export { IconText, type IconTextProps };
