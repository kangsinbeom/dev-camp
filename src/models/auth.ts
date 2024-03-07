export interface BaseForm {
  id: string;
  label: string;
  required: boolean;
  type: string;
  helpMessage?: string;
}

interface TextFieldForm extends BaseForm {
  isText: "TEXT_FIELD";
}
interface SelectFieldForm extends BaseForm {
  isText: "SELECT";
  items: string[];
}
export type AccountForm = TextFieldForm | SelectFieldForm;
