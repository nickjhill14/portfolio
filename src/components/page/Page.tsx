import { PropsWithChildren } from "react";

export const Page = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-4">{children}</div>
);
