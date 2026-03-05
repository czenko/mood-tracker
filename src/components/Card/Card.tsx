import { twMerge } from "tailwind-merge";

interface CardProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={twMerge(
        "bg-neutral-0 rounded-2xl ring ring-blue-100 flex flex-col gap-6 p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
