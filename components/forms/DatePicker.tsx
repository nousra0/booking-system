import { useId } from "react";
import { Input } from "../ui/Input";

interface DatePickerProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  min?: string;
  error?: string;
}

export function DatePicker({
  label,
  value,
  onChange,
  min,
  error,
}: DatePickerProps) {
  const id = useId();
  return (
    <Input
      id={id}
      type="date"
      label={label}
      value={value}
      min={min}
      error={error}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}

