import { formOptions } from "@tanstack/react-form";
import z from "zod";

const signInFields = {
  email: "",
  password: "",
};

export const signInFormOpts = formOptions({
  defaultValues: signInFields,
});

export const signInValidationSchema = z.object({
  email: z.email("メール形式に誤りがあります"),
  password: z.string("パスワードに誤りがあります"),
});
