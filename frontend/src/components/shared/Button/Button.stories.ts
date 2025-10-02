import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";

const meta = {
  component: Button,
  args: {
    children: "Click me",
    disabled: false,
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
