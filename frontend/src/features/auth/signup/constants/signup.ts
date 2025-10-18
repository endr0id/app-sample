import { formOptions } from "@tanstack/react-form";
import z from "zod";

const signUpFields = {
  firstName: "",
  lastName: "",
  email: "",
};

export const signUpFormOpts = formOptions({
  defaultValues: signUpFields,
});

export const signUpValidationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email("メール形式に誤りがあります"),
});
