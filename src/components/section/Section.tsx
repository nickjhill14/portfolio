import { Paper, Typography, styled } from "@mui/material";
import { PropsWithChildren } from "react";

const SectionPaper = styled(Paper)({
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

type SectionProps = {
  headingText: string;
};

function Section(props: PropsWithChildren<SectionProps>) {
  const { headingText, children } = props;

  return (
    <SectionPaper elevation={5}>
      <Typography variant="h5" component="h1">
        {headingText}
      </Typography>
      {children}
    </SectionPaper>
  );
}

export { Section, type SectionProps };
