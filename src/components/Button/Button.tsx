import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        [
          "transition-all duration-100 hover:brightness-125 hover:cursor-pointer",
          "active:scale-95 active:brightness-100",
          "py-4 px-8 rounded-[10px]",
          "text-t5 bg-blue-600 text-white",
        ].join(" "),
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
