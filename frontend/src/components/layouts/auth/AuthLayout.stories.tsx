import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "../../ui/button/Button";
import Input from "../../ui/form/input/Input";

import AuthLayout from "./AuthLayout";

const meta = {
  component: AuthLayout,
  args: {
    children: (
      <>
        <Input placeholder="id" />
        <Input type="password" placeholder="password" />
        <Button>login</Button>
      </>
    ),
    title: "Log in to your account",
  },
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Layout: Story = {
  render: (args) => <AuthLayout title={args.title}>{args.children}</AuthLayout>,
};
