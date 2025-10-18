import { createFileRoute } from "@tanstack/react-router";

import AuthLayout from "../../../components/layouts/auth/AuthLayout";
import SignUpForm from "../../../features/auth/signup/components/signup-form";

export const Route = createFileRoute("/auth/signup/")({
  component: SignUpRoute,
});

function SignUpRoute() {
  return (
    <AuthLayout title="Create your Account">
      <SignUpForm />
    </AuthLayout>
  );
}
