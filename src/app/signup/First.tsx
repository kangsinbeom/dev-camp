import { InputField } from "../shared/InputField";
import { SelectField } from "../shared/SelectField";

interface FirstProps {
  isFirst: boolean;
}

const First = ({ isFirst }: FirstProps) => {
  return (
    <div className={`${isFirst ? null : "-translate-x-full ease-in-out"}`}>
      <InputField id="name" label="이름" type="text" isTop={true} />
      <InputField id="email" label="이메일" type="email" />
      <InputField id="phone" label="연락처" type="tel" />
      <SelectField
        label="역할"
        items={["관리자", "일반 사용자"]}
        placeholder="역할을 선택해주세요"
      />
    </div>
  );
};

export default First;
