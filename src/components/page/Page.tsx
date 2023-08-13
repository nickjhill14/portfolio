import { Container } from "@mui/material";
import { ReactElement } from "react";
import { MuiIcon } from "../../utils/muiTypes";
import { IconTypography } from "../iconTypography/IconTypography";

type PageProps = {
  headingText: string;
  headingIcon: MuiIcon;
  children: ReactElement | ReactElement[];
};

function Page(props: PageProps) {
  const { headingText, headingIcon, children } = props;

  return (
    <Container>
      <IconTypography icon={headingIcon} text={headingText} variant="h2" />
      {children}
    </Container>
  );
}

export { Page, type PageProps };
