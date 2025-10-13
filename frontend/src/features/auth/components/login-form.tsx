import { stack } from "../../../../styled-system/patterns";
import { useAppForm } from "../../../hooks/form/form-hook";
import { loginFormOpts, loginSchema } from "../constants/login";

const LoginForm = () => {
  const form = useAppForm({
    ...loginFormOpts,
    validators: {
      onBlur: loginSchema,
    },
    onSubmit: ({ value }) => {
      console.log("result", value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className={stack({
        gap: "6",
        padding: "6",
      })}
    >
      <form.AppField
        name="email"
        children={(field) => {
          return (
            <field.FieldWrapper label="Email Address">
              <field.TextField placeholder="sample@example.com" />
            </field.FieldWrapper>
          );
        }}
      />
      <form.AppField
        name="password"
        children={(field) => (
          <field.FieldWrapper label="Password">
            <field.TextField type="password" />
          </field.FieldWrapper>
        )}
      />
      <form.AppForm>
        <form.SubmitButton label="Login" />
      </form.AppForm>
    </form>
  );
};

export default LoginForm;
