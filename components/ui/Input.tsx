import type { InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  iconLeft?: ReactNode;
  error?: string;
}

export function Input({
  label,
  hint,
  iconLeft,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <label className="flex w-full flex-col gap-1.5 text-sm">
      {label && <span className="font-medium text-slate-800">{label}</span>}
      <div className="relative">
        {iconLeft && (
          <span className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-slate-400">
            {iconLeft}
          </span>
        )}
        <input
          className={clsx(
            "w-full rounded-xl border bg-white/80 px-3 py-2.5 text-sm text-slate-900 shadow-xs outline-none transition placeholder:text-slate-400 focus:ring-2",
            iconLeft && "pl-9",
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-100",
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />
      </div>
      {error ? (
        <span
          id={props.id ? `${props.id}-error` : undefined}
          className="text-xs text-red-500"
        >
          {error}
        </span>
      ) : (
        hint && <span className="text-xs text-slate-500">{hint}</span>
      )}
    </label>
  );
}

