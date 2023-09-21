import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from "@mui/material";
import { motion } from "framer-motion";

type ButtonProps = { onClick: () => void; text: string } & MuiButtonProps;

function Button({ onClick, text, ...muiButtonProps }: ButtonProps) {
  return (
    <MuiButton
      component={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variant="contained"
      onClick={onClick}
      {...muiButtonProps}
    >
      {text}
    </MuiButton>
  );
}

export { Button };
