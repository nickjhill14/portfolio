import { Paper, styled } from "@mui/material";
import { ReactElement } from "react";
import { MuiIcon } from "../../utils/muiTypes";
import { IconTypography } from "../iconTypography/IconTypography";

const SectionPaper = styled(Paper)({
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

type SectionProps = {
  headingText: string;
  headingIcon: MuiIcon;
  children: ReactElement | ReactElement[];
};

function Section(props: SectionProps) {
  const { headingText, headingIcon, children } = props;

  return (
    <SectionPaper elevation={6}>
      <IconTypography
        icon={headingIcon}
        text={headingText}
        variant="h5"
        component="h2"
      />
      {children}
    </SectionPaper>
  );
}

export { Section, type SectionProps };
