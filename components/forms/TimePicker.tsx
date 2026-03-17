import { useId } from "react";
import { Input } from "../ui/Input";

interface TimePickerProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  error?: string;
}

export function TimePicker({
  label,
  value,
  onChange,
  min,
  max,
  error,
}: TimePickerProps) {
  const id = useId();
  return (
    <Input
      id={id}
      type="time"
      label={label}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      min={min}
      max={max}
      error={error}
    />
  );
}

