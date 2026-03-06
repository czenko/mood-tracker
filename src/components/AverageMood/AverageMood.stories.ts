import type { Meta, StoryObj } from "@storybook/nextjs";

import AverageMood from "./AverageMood";

const meta = {
  title: "Dashboard/AverageMood",
  component: AverageMood,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    current: {
      control: { type: "select" },
      options: [undefined, -2, -1, 0, 1, 2],
    },
    prev: {
      control: { type: "select" },
      options: [undefined, -2, -1, 0, 1, 2],
    },
  },
  args: {},
} satisfies Meta<typeof AverageMood>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    current: undefined,
    prev: undefined,
  },
};
