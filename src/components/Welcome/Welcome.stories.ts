import type { Meta, StoryObj } from "@storybook/nextjs";

import Welcome from "./Welcome";

const meta = {
  title: "Dashboard/Welcome",
  component: Welcome,

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A welcome component that displays a personalized greeting with the current date. This displays at the top of the dashboard.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    firstName: {
      description: "The user's first name to display in the greeting",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    firstName: "Lisa",
  },
};
