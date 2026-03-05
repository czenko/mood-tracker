import type { Meta, StoryObj } from "@storybook/nextjs";

import MoodIcon from "./MoodIcon";

const meta = {
  title: "Dashboard/MoodIcon",
  component: MoodIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mood: {
      control: { type: "select" },
      options: [-2, -1, 0, 1, 2],
    },
  },
  args: {},
} satisfies Meta<typeof MoodIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mood: -2,
  },
};
