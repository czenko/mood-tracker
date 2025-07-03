import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

const buttonVariants = cva(
  [
    "transition-all duration-100 hover:cursor-pointer",
    "active:scale-95",
    "disabled:cursor-not-allowed",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blue-600",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-t5 bg-blue-600 text-white hover:bg-blue-700 ",
          "py-3 px-8 rounded-[10px]",
          "disabled:bg-blue-200 disabled:scale-100",
        ],
        secondary: [
          "text-t6 text-neutral-900",
          "py-2 px-4 rounded-lg",
          "ring ring-inset ring-neutral-300 hover:ring-neutral-900",
        ],
      },
    },
  }
);

export default function Button({
  children,
  onClick,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(buttonVariants({ variant }), className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
