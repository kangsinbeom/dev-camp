"use client";

import { Fragment, MouseEvent, useState } from "react";
import ButtonBox from "./ButtonBox";
import { useForm } from "react-hook-form";
import { FIRSTFORM, SECOUNDFORM } from "@/constants/auth";
import getSignupComponent from "@/app/(auth)/signup/hooks/getSignupComponent";

type FormData = {
  [key: string]: string;
};

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
      <div className={`${isFirst ? null : "-translate-x-full ease-in-out"}`}>
        {FIRSTFORM.map((form, index) => {
          const isTop = index === 0 ? true : false;
          return (
            <Fragment key={form.id}>
              {getSignupComponent(form, isTop, register, formState)}
            </Fragment>
          );
        })}
      </div>
      <div
        className={`space-y-3 absolute top-0 left-0 right-0 ${
          isFirst ? "translate-x-full" : null
        }`}
      >
        {SECOUNDFORM.map((form, index) => {
          const isTop = index === 0 ? true : false;
          return (
            <Fragment key={form.id}>
              {getSignupComponent(form, isTop, register, formState)}
            </Fragment>
          );
        })}
      </div>
      <ButtonBox
        isFirst={isFirst}
        onClick={handleClickButton}
        onSubmit={handleSubmit(onSubmit)}
      />
    </form>
  );
};

export default SignupForm;
