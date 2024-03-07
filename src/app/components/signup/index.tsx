import SignupForm from "./SignupForm";

const SignupPage = () => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-[380px]">
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
      </div>
    </div>
  );
};

export default SignupPage;
