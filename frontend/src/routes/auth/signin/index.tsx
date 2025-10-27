import { createFileRoute } from "@tanstack/react-router";

import AuthLayout from "../../../components/layouts/auth/AuthLayout";
import LoginForm from "../../../features/auth/signin/components/signin-form";

export const Route = createFileRoute("/auth/signin/")({
  component: SignInRoute,
});

function SignInRoute() {
  return (
    <AuthLayout title="Sign in to your account">
      <LoginForm />
    </AuthLayout>
  );
}
