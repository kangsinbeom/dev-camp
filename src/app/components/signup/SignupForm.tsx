"use client";

import { MouseEvent, useState } from "react";
import First from "./First";
import Secound from "./Secound";
import ButtonBox from "./ButtonBox";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const { register, formState, handleSubmit } = useForm<FormData>({
    mode: "onBlur",
  });
  const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFirst((prev) => !prev);
  };
  const onSubmit = () => {};
  return (
    <form className="relative space-y-3 overflow-x-hidden">
      <First isFirst={isFirst} />
      <Secound isFirst={isFirst} />
      <ButtonBox
        isFirst={isFirst}
        onClick={handleClickButton}
        onSubmit={handleSubmit(onSubmit)}
      />
    </form>
  );
};

export default SignupForm;
