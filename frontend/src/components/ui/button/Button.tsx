import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

import { buttonRecipe } from "./Button.styles";

import type { RecipeVariantProps } from "../../../../styled-system/types";

type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;

type ButtonProps = {
  children: ReactNode;
} & ButtonVariants &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style">;

const Button = ({
  children,
  size = "medium",
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <button
      className={buttonRecipe({ size: size })}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
