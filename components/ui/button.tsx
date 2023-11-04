import React, { forwardRef } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes <HTMLButtonElement> {}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = "button", disabled, ...props }, ref) => (
    <button ref={ref} >
      {children}
    </button>
  )
);
Button.displayName = "Button";
