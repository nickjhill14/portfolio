import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface CodeProps extends HTMLAttributes<HTMLElement> {}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...props}
    />
  ),
);

Code.displayName = "Code";
