import type { Meta, StoryObj } from "@storybook/nextjs";

import MoodBar from "./MoodBar";

const meta = {
  title: "Dashboard/MoodBar",
  component: MoodBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    mood: {
      control: { type: "select" },
      options: [-2, -1, 0, 1, 2],
    },
    sleep: {
      control: { type: "select" },
      options: [1, 3.5, 5.5, 7.5, 9]
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'flex-end', width: '400px', height: '300px', padding: '1rem', backgroundColor: 'white' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  
} satisfies Meta<typeof MoodBar>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mood: 2,
    sleep: 5.5,
  },
};

export default meta;