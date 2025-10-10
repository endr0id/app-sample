import type { FormHTMLAttributes } from "react";

import { stack } from "../../../../styled-system/patterns";

type FormProps = {
  children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

const Form = ({ children }: FormProps) => {
  return (
    <form
      className={stack({
        gap: "6",
        padding: "6",
      })}
    >
      {children}
    </form>
  );
};

export default Form;
