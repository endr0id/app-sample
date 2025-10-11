import type { Meta, StoryObj } from "@storybook/react-vite";

import AuthLayout from "../../../components/layouts/auth/AuthLayout";
import Button from "../../../components/ui/button/Button";
import Form from "../../../components/ui/form/sample";
import Input from "../../../components/ui/form/input/Input";

const meta = {
  title: "Layout/Auth/Login",
  component: AuthLayout,
  args: {
    children: (
      <Form>
        <Input />
        <Input />
        <Button>Login</Button>
      </Form>
    ),
    title: "Login Layout",
  },
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  render: (args) => <AuthLayout title={args.title}>{args.children}</AuthLayout>,
};
