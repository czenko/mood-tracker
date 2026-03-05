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
    },
    prev: {
      control: { type: "select" },
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
