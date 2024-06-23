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
    <CardHeader className="p-4 pb-2">
      <h2 className="text-2l text-secondary font-bold">{headingText}</h2>
    </CardHeader>
    <CardBody className="flex flex-col gap-4">{children}</CardBody>
  </Card>
);
