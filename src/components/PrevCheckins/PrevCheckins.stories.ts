import type { Meta, StoryObj } from "@storybook/nextjs";

import PrevCheckins from "./PrevCheckins";

const meta = {
  title: "Dashboard/PrevCheckins",
  component: PrevCheckins,

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Shows the trend of the user's checkins over the past 5 days.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PrevCheckins>;

// Create primary story
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hasData: true,
    variant: "mood",
    state: "neutral",
  },
};
