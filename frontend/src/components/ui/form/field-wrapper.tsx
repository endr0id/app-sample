import { useStore } from "@tanstack/react-form";

import { useFieldContext } from "../../../hooks/form/form-hook";

import { errorTextRecipe } from "./form.styles";

import type { ZodIssue } from "zod/v3";

type FieldWrapperProps = {
  children: React.ReactNode;
  label: string;
};

const FieldWrapper = ({ children, label }: FieldWrapperProps) => {
  const field = useFieldContext<string>();
  const errors = useStore(
    field.store,
    (state) => state.meta.errors as ZodIssue[],
  );
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      {children}
      {errors.map((error, i) => (
        <div key={i} className={errorTextRecipe}>
          {error.message}
        </div>
      ))}
    </div>
  );
};

export default FieldWrapper;
