import { Button as NextUiButton } from "@nextui-org/button";

type ButtonProps = {
  onClick: () => void;
  text: string;
};

export const Button = ({ onClick, text }: ButtonProps) => (
  <NextUiButton variant="solid" onClick={onClick}>
    {text}
  </NextUiButton>
);
