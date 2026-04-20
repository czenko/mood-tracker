export type MoodValue = -2 | -1 | 0 | 1 | 2;
export type SleepValue = 1 | 3.5 | 5.5 | 7.5 | 9;

export const MOOD = {
  [-2]: "Very Sad",
  [-1]: "Sad",
  0: "Neutral",
  1: "Happy",
  2: "Very Happy",
};

export const COLOR = {
  [-2]: "bg-red-300",
  [-1]: "bg-indigo-200",
  0: "bg-blue-300",
  1: "bg-green-300",
  2: "bg-amber-300",
};