import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FocusEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
  isTop?: boolean;
  hasError?: boolean;
  helpMessage?: React.ReactNode;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    {
      label,
      type,
      id,
      isTop = false,
      helpMessage,
      hasError,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) {
    const firstStyle = isTop ? null : "mt-5";
    const [focused, setFocused] = useState<boolean>(false);
    const labelColor = hasError
      ? "text-red-500"
      : focused
      ? "text-blue-500"
      : "text-slate-500";
    const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(true);
      onFocus?.(event);
    };
    const handlBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(false);
      onBlur?.(event);
    };
    return (
      <div className={`grid w-full max-w-sm items-center gap-3  ${firstStyle}`}>
        <Label htmlFor="picture" className={`${labelColor}`}>
          {label}
        </Label>
        <div>
          <Input
            ref={ref}
            id={id}
            type={type}
            {...props}
            onBlur={handlBlur}
            onFocus={handleFocus}
          />
          {helpMessage && (
            <p className={`text-xs pl-2 pt-1 ${labelColor}`}>{helpMessage}</p>
          )}
        </div>
      </div>
    );
  }
);

export default InputField;
