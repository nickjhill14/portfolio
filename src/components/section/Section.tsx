import { Card, CardBody, CardHeader } from "@heroui/card";
import { PropsWithChildren } from "react";

export type SectionProps = {
  headingText?: string;
  className?: string;
};

export const Section = ({
  headingText,
  className,
  children,
}: PropsWithChildren<SectionProps>) => (
  <Card data-testid="section-container" className={className}>
    {headingText && (
      <CardHeader className="pb-2">
        <h2 className="text-2l text-secondary font-bold">{headingText}</h2>
      </CardHeader>
    )}
    <CardBody className="flex flex-col gap-4">{children}</CardBody>
  </Card>
);
