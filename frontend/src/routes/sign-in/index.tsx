import { createFileRoute } from "@tanstack/react-router";

import AuthLayout from "../../components/layouts/auth/AuthLayout";
import LoginForm from "../../features/auth/components/login-form";

export const Route = createFileRoute("/sign-in/")({
  component: SignInRoute,
});

function SignInRoute() {
  return (
    <AuthLayout title="Sign in to your account">
      <LoginForm />
    </AuthLayout>
  );
}
