export default function ContactUs() {
  return (
    <div className="flex justify-between md:px-10 ">
      <div></div>
      <div className="flex md:flex-col gap-1 md:items-end md:my-2 right-2 fixed top-80 bottom-[90%]">
        <div className="rounded-xl h-[60px] md:h-[70px] pt- md:px-1 flex items-center md:w-[450px] border bg-white shadow-md ">
          <div className="w-[60px]  md:w-[70px] items-center cursor-pointer">
            <img src="/contact2.png" alt="contact2" />
          </div>
          <div className="hidden md:block">
            <span className="font-bold text-sm md:text-xl">Contact Us.</span>
            <p className="items-center text-[9.6px] md:text-[12px]">
              Customers or Clients to reach out for Assistance, Inquiries, or
              Feedback.
            </p>
          </div>
        </div>
        <div className="rounded-xl flex h-[60px] md:h-[70px] md:w-[450px] py-6 px-3 md:p-1 shadow-md bg-white border items-center">
          <div className="w-[30px]  md:w-[50px] md:ml-4 cursor-pointer">
            <img src="/contact1.png" alt="contact1" />
          </div>
          <div className="ml-2 md:ml-3 hidden md:block">
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
