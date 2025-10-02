import type { ButtonHTMLAttributes, ReactNode } from "react";

import { css } from "../../../../styled-system/css";

type ButtonProps = {
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style">;

const className = css({
  paddingX: "4",
  paddingY: "2",
  borderRadius: "md",
  fontSize: "0.75em",
  fontWeight: "semibold",
  color: "white",
  backgroundColor: "blue.500",
  boxShadow: "md",
  _hover: {
    backgroundColor: "blue.600",
    boxShadow: "lg",
  },
  _active: {
    backgroundColor: "blue.700",
    boxShadow: "sm",
  },
  transition: "all 0.2s ease",
});

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
