import ColumnForm from "../../../../components/ui/form/form";
import { useAppForm } from "../../../../hooks/form/form-hook";
import { signUpFormOpts, signUpValidationSchema } from "../constants/signup";

const SignUpForm = () => {
  const form = useAppForm({
    ...signUpFormOpts,
    validators: {
      onBlur: signUpValidationSchema,
    },
    onSubmit: ({ value }) => {
      console.log("result", value);
    },
  });

  return (
    <ColumnForm
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.AppField
        name="firstName"
        children={(field) => {
          return (
            <field.FieldWrapper label="First Name">
              <field.TextField />
            </field.FieldWrapper>
          );
        }}
      />
      <form.AppField
        name="lastName"
        children={(field) => {
          return (
            <field.FieldWrapper label="Last Name">
              <field.TextField />
            </field.FieldWrapper>
          );
        }}
      />
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
      <form.AppForm>
        <form.SubmitButton label="Sign Up" />
      </form.AppForm>
    </ColumnForm>
  );
};

export default SignUpForm;
