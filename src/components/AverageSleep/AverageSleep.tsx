import { twMerge } from "tailwind-merge";
import PrevCheckins from "../PrevCheckins/PrevCheckins";
import { SleepValue } from "@/app/types";
import SvgIconSleep from "./IconSleep";

const SLEEP = {
  1: "0-2 hours",
  3.5: "3-4 hours",
  5.5: "5-6 hours",
  7.5: "7-8 hours",
  9: "9+ hours",
};

interface AverageSleepProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  className?: string;
  current?: SleepValue;
  prev?: SleepValue;
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

export default function AverageSleep({
  className,
  current,
  prev,
  ...props
}: AverageSleepProps) {
  const hasData: boolean = current !== undefined && prev !== undefined;

  const trend: "increase" | "decrease" | "neutral" | undefined = hasData
    ? current! > prev!
      ? "increase"
      : current! < prev!
        ? "decrease"
        : "neutral"
    : undefined;

  const containerColor = hasData ? "bg-blue-600" : "bg-blue-100";
  const textColor = hasData ? "text-neutral-0" : "text-neutral-900";
  const heading = hasData ? SLEEP[current!] : "Not enough data yet!";
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

      <h3
        className={
          textColor + " text-t4 relative z-10 flex flex-wrap items-center gap-3"
        }
      >
        {hasData && (
          <SvgIconSleep
            width="24"
            height="24"
            fill="#FFFFFF"
            className="opacity-70"
          />
        )}
        {heading}
      </h3>
      <PrevCheckins variant="sleep" {...prevCheckinsProps} />
    </div>
  );
}
