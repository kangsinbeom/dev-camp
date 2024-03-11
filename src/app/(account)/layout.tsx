import React from "react";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="bg-mybg h-screen w-full">{children}</section>;
};

export default AccountLayout;
