import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

import { stack } from "../../../../styled-system/patterns";

import SubmitButton from "./submit-button";
import TextField from "./text-field";

type FormProps = {
  children: React.ReactNode;
};

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});

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
