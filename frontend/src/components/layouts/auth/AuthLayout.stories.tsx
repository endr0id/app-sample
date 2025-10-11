import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "../../ui/button/Button";
import Form from "../../ui/form/Form";
import Input from "../../ui/form/input/Input";

import AuthLayout from "./AuthLayout";

const meta = {
  component: AuthLayout,
  args: {
    children: (
      <>
        <Form>
          <Input placeholder="id" />
          <Input type="password" placeholder="password" />
          <Button onClick={() => console.log("clicked")}>login</Button>
        </Form>
      </>
    ),
    title: "Log in to your account",
  },
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogIn: Story = {
  render: (args) => <AuthLayout title={args.title}>{args.children}</AuthLayout>,
};
