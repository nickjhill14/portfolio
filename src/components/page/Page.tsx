import { PropsWithChildren } from "react";
import { Footer } from "../footer/Footer";

type PageProps = {
  className?: string;
};

export const Page = ({ className, children }: PropsWithChildren<PageProps>) => (
  <div className={className} data-testid="page">
    {children}
    <Footer />
  </div>
);
