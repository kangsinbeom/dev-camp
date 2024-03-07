import React from "react";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="min-h-screen">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-[380px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authlayout;
