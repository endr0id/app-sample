import type React from "react";

import { css } from "../../../../../styled-system/css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const inputRecipe = css({
  width: "full",
  paddingX: "3",
  paddingY: "1",
  borderColor: "gray.300",
  borderRadius: "md",
  borderWidth: "1px",
  _focusVisible: {
    outline: "none",
    ringWidth: "1",
    borderColor: "black",
  },
});

const Input = ({ placeholder }: InputProps) => {
  return <input className={inputRecipe} placeholder={placeholder} />;
};

export default Input;
