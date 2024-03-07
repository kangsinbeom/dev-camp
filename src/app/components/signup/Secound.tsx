import React from "react";
import { InputField } from "../shared/InputField";
interface FirstProps {
  isFirst: boolean;
}

const Secound = ({ isFirst }: FirstProps) => {
  return (
    <div
      className={`space-y-3 absolute top-0 left-0 right-0 ${
        isFirst ? "translate-x-full" : null
      }`}
    >
      <InputField id="password" label="비밀번호" type="password" isTop={true} />
      <InputField id="CheckPassword" label="비밀번호 확인" type="password" />
    </div>
  );
};

export default Secound;
