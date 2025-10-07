import type { ButtonHTMLAttributes, ReactNode } from "react";
import type React from "react";

import { cva } from "../../../../styled-system/css";

type ButtonProps = {
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style">;

const buttonRecipe = cva({
  base: {
    borderRadius: "md",
    paddingX: "4",
    paddingY: "2",
    color: "white",
    backgroundColor: "blue.500",
    fontSize: "0.75em",
    fontWeight: "semibold",
    _hover: {
      backgroundColor: "blue.600",
    },
    _active: {
      backgroundColor: "blue.700",
    },
    _disabled: {
      color: "gray.300",
      backgroundColor: "gray.400",
      _hover: {
        backgroundColor: "gray.400",
      },
      _active: {
        backgroundColor: "gray.400",
      },
    },
  },
});

const Button = ({ children, disabled, onClick, ...props }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <button
      className={buttonRecipe()}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
