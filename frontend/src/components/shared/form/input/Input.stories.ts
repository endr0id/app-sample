import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "./Input";

const meta = {
  component: Input,
  args: {
    placeholder: "placeholder",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormInput: Story = {};
