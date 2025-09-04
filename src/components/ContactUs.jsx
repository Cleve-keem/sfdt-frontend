import React from "react";

export default function ContactUs() {
  return (
    <div className="flex justify-between bg-black text-black px-2 md:px-10">
      <div></div>
      <div className="flex flex-col gap-1 items-end my-2 w-[10px] ">
        <div className="rounded-2xl flex w-[300px] md:w-[450px] p-2 border bg-white shadow-md">
          <div className="w-[100px] md:w-[70px]">
            <img src="/contact2.png" alt="contact2" />
          </div>
          <div className="">
            <span className="font-bold text-sm md:text-xl">Contact Us.</span>
            <p className="items-center text-[9.6px] md:text-[12px]">
              Customers or Clients to reach out for Assistance, Inquiries, or
              Feedback.
            </p>
          </div>
        </div>
        <div className="rounded-2xl flex w-[300px] md:w-[450px] p-1 shadow-md bg-white border ">
          <div className="w-[100px] md:w-[50px] ml-4">
            <img src="/contact1.png" alt="contact1" />
          </div>
          <div className="ml-2 md:ml-3">
            <span className="font-bold text-sm md:text-xl">
              Speck to our Customer Care Agent.
            </span>
            <p className=" items-center text-[9.6px] md:text-[12px]">
              Communicate with a Representative from the Customer Service Team
              for Support or Assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
