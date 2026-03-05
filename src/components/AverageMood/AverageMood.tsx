import { twMerge } from "tailwind-merge";
import PrevCheckins from "../PrevCheckins/PrevCheckins";
import { MoodValue } from "@/app/types";
import MoodIcon from "../MoodIcon/MoodIcon";

const MOOD = {
  [-2]: "Very Sad",
  [-1]: "Sad",
  0: "Neutral",
  1: "Happy",
  2: "Very Happy",
};

const COLOR = {
  [-2]: "bg-red-300",
  [-1]: "bg-indigo-200",
  0: "bg-blue-300",
  1: "bg-green-300",
  2: "bg-amber-300",
};

interface AverageMoodProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  className?: string;
  current?: MoodValue;
  prev?: MoodValue;
}

const Circle = ({ className }: { className: string }) => (
  <div
    aria-hidden="true"
    className={twMerge(
      "absolute group-hover:-translate-x-3 inline-block rounded-full bg-neutral-0 opacity-20 w-[221px] h-[221px] transition-transform duration-500 ease-out",
      className
    )}
  />
);

export default function AverageMood({
  className,
  current,
  prev,
  ...props
}: AverageMoodProps) {
  const hasData: boolean = current !== undefined && prev !== undefined;

  const trend: "increase" | "decrease" | "neutral" | undefined = hasData
    ? current! > prev!
      ? "increase"
      : current! < prev!
        ? "decrease"
        : "neutral"
    : undefined;

  const containerColor = hasData ? COLOR[current!] : "bg-blue-100";
  const heading = hasData ? MOOD[current!] : "Keep tracking!";
  const prevCheckinsProps = hasData ? { hasData, state: trend } : { hasData };

  return (
    <div
      {...props}
      className={twMerge(
        "group overflow-hidden relative rounded-2xl min-h-40 p-5 flex flex-col gap-3 justify-center",
        containerColor,
        className
      )}
    >
      <Circle className="-top-1/4 -right-1/2" />
      <Circle className="top-0 right-[-60%] delay-150" />

      <h3 className="text-neutral-900 text-t4 relative z-10 flex flex-wrap items-center gap-3">
        {hasData && <MoodIcon className="inline-block" mood={current} />}
        {heading}
      </h3>
      <PrevCheckins {...prevCheckinsProps} />
    </div>
  );
}
