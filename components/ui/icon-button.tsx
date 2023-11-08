import { cn } from "@/utils/cn";
import { MouseEventHandler } from "react";
type IconButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon: React.ReactElement;
};

const IconButton: React.FC<IconButtonProps> = ({
  className,
  onClick,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
