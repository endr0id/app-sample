import { stack } from "../../../../styled-system/patterns";
import { useAppForm } from "../../../components/ui/form/form";

const LoginForm = () => {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
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
        children={(field) => (
          <field.TextField placeholder="sample@example.com" />
        )}
      />
      <form.AppField
        name="password"
        children={(field) => <field.TextField type="password" />}
      />
      <form.AppForm>
        <form.SubmitButton label="Login" />
      </form.AppForm>
    </form>
  );
};

export default LoginForm;
