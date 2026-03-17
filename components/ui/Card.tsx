import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

