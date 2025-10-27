import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./Card";

const meta = {
  component: Card,
  args: {
    children: "Card",
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
    <Card>
      <h2>Card Contents</h2>
    </Card>
  ),
};
