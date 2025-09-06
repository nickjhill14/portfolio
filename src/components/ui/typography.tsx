import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {}

const TypographyH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    />
  ),
);
TypographyH1.displayName = "TypographyH1";

const TypographyH2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
);

TypographyH2.displayName = "TypographyH2";

const TypographyH3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
);

TypographyH3.displayName = "TypographyH3";

const TypographyH4 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
);

TypographyH4.displayName = "TypographyH4";

interface TypographyPProps extends HTMLAttributes<HTMLParagraphElement> {}

const TypographyP = forwardRef<HTMLParagraphElement, TypographyPProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("leading-7", className)} {...props} />
  ),
);
TypographyP.displayName = "TypographyP";

interface TypographyBlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {}

const TypographyBlockquote = forwardRef<
  HTMLQuoteElement,
  TypographyBlockquoteProps
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn("mt-6 border-l-2 pl-6 italic", className)}
    {...props}
  />
));

TypographyBlockquote.displayName = "TypographyBlockquote";

interface TypographyListProps extends HTMLAttributes<HTMLUListElement> {}

const TypographyList = forwardRef<HTMLUListElement, TypographyListProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("my-2 ml-4 list-disc [&>li]:mt-2", className)}
      {...props}
    />
  ),
);

TypographyList.displayName = "TypographyList";

export const Typography = {
  H1: TypographyH1,
  H2: TypographyH2,
  H3: TypographyH3,
  H4: TypographyH4,
  P: TypographyP,
  Blockquote: TypographyBlockquote,
  List: TypographyList,
};
