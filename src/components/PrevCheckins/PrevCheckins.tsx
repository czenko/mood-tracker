import { cva } from "class-variance-authority";
import ArrowRight from "./ArrowRight";

interface PrevCheckinsProps {
  hasData?: boolean;
  variant?: "mood" | "sleep";
  state?: "neutral" | "increase" | "decrease";
}

const prevCheckinsVariants = cva("z-10 text-t7", {
  variants: {
    variant: {
      mood: "text-neutral-900",
      sleep: "text-neutral-0 opacity-70",
    },
  },
});

export default function PrevCheckins({
  hasData = false,
  variant = "mood",
  state = "neutral",
}: PrevCheckinsProps) {
  const noDataCopy = {
    mood: "Log 5 check-ins to see your average mood.",
    sleep: "Track 5 nights to view average sleep.",
  };
  const changeCopy = {
    neutral: "Same as",
    increase: "Increase from",
    decrease: "Decrease from",
  };

  if (!hasData) {
    return (
      <p className="z-10 text-t7 text-neutral-900">{noDataCopy[variant]}</p>
    );
  }

  return (
    <p className={prevCheckinsVariants({ variant })}>
      <span className="inline-block mr-2">
        <ArrowRight
          fill={variant === "sleep" ? "#FFFFFF" : undefined}
          variant={state}
        />
      </span>
      <span>{changeCopy[state]} the previous 5 check-ins</span>
    </p>
  );
}
