import { lazy } from "react";

import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

const FieldWrapper = lazy(
  () => import("../../components/ui/form/field-wrapper"),
);
const TextField = lazy(() => import("../../components/ui/form/text-field"));
const SubmitButton = lazy(
  () => import("../../components/ui/form/submit-button"),
);

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    FieldWrapper,
    TextField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
