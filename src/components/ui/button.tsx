import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gray-medium text-white hover:bg-gray-light hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-gray-light text-gray-light hover:bg-gray-light hover:text-gray-dark",
        secondary: "bg-gray-light text-gray-dark hover:bg-white",
        ghost: "hover:bg-gray-medium/20 hover:text-white",
        link: "text-gray-light underline-offset-4 hover:underline hover:text-white",
        primary: "bg-gray-medium text-white hover:bg-gray-light hover:scale-[1.02]",
        active: "bg-white text-gray-dark hover:bg-gray-light hover:text-white",
        hero: "bg-gradient-to-r from-gray-medium to-gray-light text-white hover:scale-[1.02] font-semibold",
        glass: "bg-gray-medium/30 backdrop-blur-sm border border-gray-light/30 text-white hover:bg-gray-medium/50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
