import React from "react";

export default function WelcomeText() {
  return (
    <section className="bg-black text-white flex justify-center">
      <div className="flex flex-col gap-7 text-center w-[650px] py-12">
        <h1 className="text-[28px] font-bold">
          Welcome to Sound Foundation EdTech Academy!
        </h1>
        <p className="text-[15px]">
          We are thrilled to have you join our vibrant community of learners and
          educators! At Sound Foundation EdTech Academy, we believe in the power
          of education to transform lives
        </p>
      </div>
    </section>
  );
}
