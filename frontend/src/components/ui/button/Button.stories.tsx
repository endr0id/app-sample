import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";

const meta = {
  component: Button,
  args: {
    children: "Click me",
    disabled: false,
  },
  argTypes: {
    size: {
      control: false,
    },
    onClick: {
      description: "Triggered when the button is clicked.",
      control: false,
      action: "clicked",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Button size="small" {...args}>
        Small
      </Button>
      <Button size="medium" {...args}>
        Medium
      </Button>
      <Button size="large" {...args}>
        Large
      </Button>
    </div>
  ),
};
