import { PropsWithChildren } from "react";

// TODO: Add home btn
export const Page = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-4">{children}</div>
);
