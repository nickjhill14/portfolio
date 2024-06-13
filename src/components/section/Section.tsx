import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { PropsWithChildren } from "react";

export type SectionProps = {
  headingText: string;
};

export const Section = ({
  headingText,
  children,
}: PropsWithChildren<SectionProps>) => (
  <Card>
    <CardHeader>
      <h2>{headingText}</h2>
    </CardHeader>
    <CardBody>{children}</CardBody>
  </Card>
);
