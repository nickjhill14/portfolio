import { AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isExternal?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, isExternal, children, ...props }, ref) => (
    <a
      className={cn(
        "flex gap-2 items-center hover:underline underline-offset-2",
        className,
      )}
      ref={ref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),
);

Link.displayName = "Link";
