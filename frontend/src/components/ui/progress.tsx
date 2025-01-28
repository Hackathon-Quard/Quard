import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  let red, green;

  if (!!value) {
    if (value < 50) {
      // Transition from red to yellow
      red = 255;
      green = Math.floor((value / 50) * 255);
    } else {
      // Transition from yellow to green
      red = Math.floor(255 - ((value - 50) / 50) * 255);
      green = 255;
    }
  }

  const color = `rgb(${red}, ${green}, 0)`;

  return (
    <ProgressPrimitive.Root ref={ref} className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)} {...props}>
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)`, backgroundColor: color }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
