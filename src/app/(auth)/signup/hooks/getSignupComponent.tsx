import InputField from "@/app/components/shared/InputField";
import SelectField from "@/app/components/shared/SelectField";
import { VALIDATION_MESSAGE_MAP } from "@/constants/auth";
import { AccountForm } from "@/models/auth";
import { FormState, UseFormRegister } from "react-hook-form";

type FormData = {
  [key: string]: string;
};

const getSignupComponent = (
  form: AccountForm,
  isTop: boolean,
  register: UseFormRegister<FormData>,
  formState: FormState<FormData>
) => {
  if (form.isText === "SELECT") {
    return (
      <SelectField
        label={form.label}
        items={form.items}
        placeholder="역할을 선택해주세요"
        {...register(form.id, {
          required: form.required,
          pattern: VALIDATION_MESSAGE_MAP[form.id],
        })}
      />
    );
  } else if (form.isText === "TEXT_FIELD") {
    return (
      <InputField
        id={form.id}
        label={form.label}
        type={form.type}
        isTop={isTop}
        helpMessage={
          (formState.errors[form.id]?.message as string) || form.helpMessage
        }
        hasError={formState.errors[form.id] != null}
        {...register(form.id, {
          required: form.required,
          pattern: VALIDATION_MESSAGE_MAP[form.id],
        })}
      />
    );
  } else {
    return null;
  }
};

export default getSignupComponent;
