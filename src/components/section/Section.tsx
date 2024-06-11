import { Paper, styled, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

const SectionPaper = styled(Paper)({
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export type SectionProps = {
  headingText: string;
};

export const Section = (props: PropsWithChildren<SectionProps>) => {
  const { headingText, children } = props;

  return (
    <SectionPaper elevation={5}>
      <Typography variant="h5" component="h1">
        {headingText}
      </Typography>
      {children}
    </SectionPaper>
  );
};
