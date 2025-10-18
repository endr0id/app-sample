import { createFileRoute } from "@tanstack/react-router";

import AuthLayout from "../../../components/layouts/auth/AuthLayout";

export const Route = createFileRoute("/auth/signup/")({
  component: SignUpRoute,
});

function SignUpRoute() {
  return <AuthLayout title="Create your Account">SignUp</AuthLayout>;
}
