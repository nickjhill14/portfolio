import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ className, value, max = 5, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      {Array.from({ length: max }, (_, i) => (
        <Circle
          key={i}
          size={16}
          className={cn(
            "transition-colors",
            i < value
              ? "fill-primary text-primary"
              : "fill-transparent text-muted-foreground",
          )}
        />
      ))}
    </div>
  ),
);

Rating.displayName = "Rating";
