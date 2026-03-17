import type {
  ButtonHTMLAttributes,
  ReactNode,
  ReactElement,
  ComponentProps,
} from "react";
import { cloneElement, isValidElement } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  asChild?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-blue-700 text-white hover:bg-blue-800 focus-visible:ring-blue-500 shadow-sm hover:shadow-md",
  secondary:
    "bg-blue-50 text-blue-900 hover:bg-blue-100 focus-visible:ring-blue-300",
  outline:
    "border border-slate-300 text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-400",
  ghost: "text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  iconLeft,
  iconRight,
  children,
  asChild,
  ...props
}: ButtonProps) {
  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className,
  );

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement;
    const { className: childClassName, ...childProps } = child.props as {
      className?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    };

    type ChildType = Exclude<typeof child.type, string>;
    type ChildProps = ComponentProps<ChildType>;

    return cloneElement(child as ReactElement<ChildProps>, {
      ...(childProps as ChildProps),
      ...(props as ChildProps),
      className: clsx(classes, childClassName),
    });
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {iconLeft && <span className="inline-flex">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="inline-flex">{iconRight}</span>}
    </button>
  );
}

