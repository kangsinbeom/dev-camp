import SignupForm from "@/app/components/signup/SignupForm";
import React from "react";

const SignupPage = () => {
  return (
    <>
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          계정을 생성합니다
        </h3>
        <p className="text-sm text-muted-foreground">
          필수 정보를 입력헤볼게요.
        </p>
      </div>
      <div className="pt-0 p-6">
        <SignupForm />
      </div>
    </>
  );
};

export default SignupPage;
