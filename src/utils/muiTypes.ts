import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export type MuiIcon = OverridableComponent<SvgIconTypeMap<object, "svg">> & {
  muiName: string;
};
