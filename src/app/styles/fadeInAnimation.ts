import { cva } from "class-variance-authority";

const fadeInAnimation = cva("transform transition-all duration-700 ease-out", {
  variants: {
    isRevealed: {
      true: "opacity-100 translate-y-0",
      false: "opacity-0 translate-y-4",
    },
    delay: {
      0: "delay-0",
      1: "delay-150",
      2: "delay-300",
    },
  },
  defaultVariants: {
    isRevealed: false,
    delay: 0,
  },
});

export default fadeInAnimation;
