import type { ButtonHTMLAttributes, ReactNode } from "react";
import type React from "react";

import { css } from "../../../../styled-system/css";

type ButtonProps = {
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style">;

const Button = ({
  children,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  const className = css({
    paddingX: "4",
    paddingY: "2",
    borderRadius: "md",
    fontSize: "0.75em",
    fontWeight: "semibold",
    color: disabled ? "gray.300" : "white",
    backgroundColor: disabled ? "gray.500" : "blue.500",
    boxShadow: "md",
    _hover: disabled
      ? {}
      : {
          backgroundColor: "blue.600",
          boxShadow: "lg",
        },
    _active: disabled
      ? {}
      : {
          backgroundColor: "blue.700",
          boxShadow: "sm",
        },
    transition: "all 0.2s ease",
  });

  return (
    <button className={className} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
