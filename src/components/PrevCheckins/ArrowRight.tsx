import { cva } from "class-variance-authority";

interface ArrowRightProps {
  width?: number;
  height?: number;
  fill?: string;
  variant?: "neutral" | "increase" | "decrease";
}

const arrowRightVariants = cva("inline-block", {
  variants: {
    variant: {
      neutral: "rotate-0",
      increase: "-rotate-45",
      decrease: "rotate-45",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

const ArrowRight: React.FC<ArrowRightProps> = ({
  width = 15,
  height = 16,
  fill = "#21214D",
  variant = "neutral",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={arrowRightVariants({ variant })}
      aria-hidden="true"
    >
      <path
        d="M7.53851 1.47761C7.65854 1.32756 7.89862 1.32756 8.04867 1.47761L14.3207 7.74966C14.4708 7.89971 14.4708 8.10978 14.3207 8.25983L8.04867 14.5319C7.89862 14.6819 7.65855 14.6819 7.53851 14.5319L6.93831 13.9617C6.78826 13.8117 6.78826 13.5716 6.93831 13.4515L11.5898 8.77L1.35648 8.77C1.14641 8.77 0.996361 8.61995 0.996361 8.40988L0.996362 7.5696C0.996361 7.38955 1.14641 7.20949 1.35648 7.20949L11.5898 7.20949L6.93831 2.55796C6.78826 2.43792 6.78826 2.19784 6.93831 2.0478L7.53851 1.47761Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowRight;
