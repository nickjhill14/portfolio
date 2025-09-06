import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

export const CodeBlock = forwardRef<
  HTMLPreElement,
  HTMLAttributes<HTMLPreElement>
>(({ className, children, ...props }, ref) => (
  <div className="relative max-w-fit">
    <pre
      ref={ref}
      className={cn("overflow-auto rounded-md border bg-muted p-4", className)}
      {...props}
    >
      {children}
    </pre>
  </div>
));

CodeBlock.displayName = "CodeBlock";
