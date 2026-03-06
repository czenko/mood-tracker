import type { Meta, StoryObj } from "@storybook/nextjs";

import AverageSleep from "./AverageSleep";

const meta = {
  title: "Dashboard/AverageSleep",
  component: AverageSleep,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    current: {
      control: { type: "select" },
      options: [undefined, 1, 3.5, 5.5, 7.5, 9],
    },
    prev: {
      control: { type: "select" },
      options: [undefined, 3.5, 5.5, 7.5, 9],
    },
  },
  args: {},
} satisfies Meta<typeof AverageSleep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    current: undefined,
    prev: undefined,
  },
};
