import { formOptions } from "@tanstack/react-form";
import z from "zod";

const loginFields = {
  email: "",
  password: "",
};

export const loginFormOpts = formOptions({
  defaultValues: loginFields,
});

export const loginSchema = z.object({
  email: z.email("メール形式に誤りがあります"),
  password: z.string("パスワードに誤りがあります"),
});
