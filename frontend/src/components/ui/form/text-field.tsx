import { css } from "../../../../styled-system/css";

import { useFieldContext } from "./form";

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

const TextField = ({
  placeholder,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const field = useFieldContext<string>();
  return (
    <input
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
      placeholder={placeholder}
      className={inputRecipe}
      {...props}
    />
  );
};

export default TextField;
