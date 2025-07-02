import { cva } from "class-variance-authority";
import ArrowRight from "./ArrowRight";

interface PrevCheckinsProps {
  hasData: boolean;
  variant: "mood" | "sleep";
  state: "default" | "increase" | "decrease";
}

const prevCheckinsVariants = cva("text-t7 text-neutral-900", {
  variants: {
    variant: {
      mood: "",
      sleep: "opacity-70",
    },
  },
});

export default function PrevCheckins({
  hasData = false,
  variant = "mood",
  state = "default",
}: PrevCheckinsProps) {
  const noDataCopy = {
    mood: "Log 5 check-ins to see your average mood.",
    sleep: "Track 5 nights to view average sleep.",
  };
  const changeCopy = {
    default: "Same as",
    increase: "Increase from",
    decrease: "Decrease from",
  };

  if (!hasData) {
    return (
      <p className="text-t7 text-neutral-900 opacity-70">
        {noDataCopy[variant]}
      </p>
    );
  }

  return (
    <p className={prevCheckinsVariants({ variant })}>
      <span className="inline-block mr-2">
        <ArrowRight variant={state} />
      </span>
      <span>{changeCopy[state]} the previous 5 check-ins</span>
    </p>
  );
}
