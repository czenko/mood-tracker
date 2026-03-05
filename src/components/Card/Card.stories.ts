import type { Meta, StoryObj } from "@storybook/nextjs";

import Card from "./Card";

const meta = {
  title: "Dashboard/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Average Mood (Last 5 Check-ins)",
  },
};
