import { useFieldContext } from "../../../hooks/form/form-hook";

import { textFieldRecipe } from "./form.styles";

const TextField = ({
  placeholder,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const field = useFieldContext<string>();
  return (
    <input
      id={field.name}
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
      placeholder={placeholder}
      className={textFieldRecipe}
      {...props}
    />
  );
};

export default TextField;
