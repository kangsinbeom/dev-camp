import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HTMLInputTypeAttribute } from "react";

interface InputFieldProps {
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
  isTop?: boolean;
}

export const InputField = ({
  label,
  type,
  id,
  isTop = false,
}: InputFieldProps) => {
  const firstStyle = isTop ? null : "mt-5";
  return (
    <div className={`grid w-full max-w-sm items-center gap-3  ${firstStyle}`}>
      <Label htmlFor="picture">{label}</Label>
      <Input id={id} type={type} />
    </div>
  );
};
