import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { forwardRef } from "react";

interface SelectFieldProps {
  label: string;
  items: string[];
  placeholder: string;
}
const SelectField = forwardRef(function SelectField(
  { label, items, placeholder }: SelectFieldProps,
  ref
) {
  return (
    <div className={`grid w-full max-w-sm items-center gap-3 mt-5`}>
      <Label htmlFor="picture">{label}</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
});

export default SelectField;
