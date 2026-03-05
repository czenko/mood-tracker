import { twMerge } from "tailwind-merge";
import PrevCheckins from "../PrevCheckins/PrevCheckins";

const MOOD = {
  0: "Very Sad",
  1: "Sad",
  2: "Neutral",
  3: "Happy",
  4: "Very Happy",
};

const COLOR = {
  0: "bg-red-300",
  1: "bg-indigo-200",
  2: "bg-blue-300",
  3: "bg-green-300",
  4: "bg-amber-300",
};

interface AverageMoodProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  className?: string;
  current?: 0 | 1 | 2 | 3 | 4;
  prev?: 0 | 1 | 2 | 3 | 4;
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

  // Dynamic props depending on whether we have data
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

      <h3 className="text-neutral-900 text-t4 relative z-10">{heading}</h3>
      <PrevCheckins {...prevCheckinsProps} />
    </div>
  );
}
