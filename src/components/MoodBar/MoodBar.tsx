import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { MoodValue, SleepValue, COLOR } from "@/app/types";
import MoodIcon from "@/components/MoodIcon/MoodIcon";

interface MoodBarProps {
  mood: MoodValue;
  sleep: SleepValue;
  className?: string;
}


const moodBarVariants = cva(
  "rounded-full p-1",
  {
    variants: {
        sleep: {
            1: 'h-1/5',
            3.5: 'h-2/5',
            5.5: 'h-3/5',
            7.5: 'h-4/5',
            9: 'h-5/5',
            undefined: ''
      },
    },
  }
);

export default function MoodBar({ mood, sleep, className }: MoodBarProps) {



  return <div className={twMerge(moodBarVariants({sleep}), COLOR[mood], className)}>{mood && <MoodIcon className="inline-block" mood={mood} />}</div>;

}
