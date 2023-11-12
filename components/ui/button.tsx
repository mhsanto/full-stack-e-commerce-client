"use client";
import { cn } from "@/utils/cn";
import React, { forwardRef } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = "button", disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        "w-auto rounded-full bg-black border-transparent px-4 py-2 disabled:cursor-not-allowed text-white disabled:opacity-50 hover:opacity-80 font-semibold,transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
export default Button;
