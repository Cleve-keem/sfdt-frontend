import { FaRegBell } from "react-icons/fa";

export default function ProfileBar() {
  return (
    <nav className="bg-[linear-gradient(45deg,black,#666666)] py-3 px-4 text-white flex justify-end md:pr-10">
      <div className="flex items-center gap-4 md:gap-10">
        <p className="capitalize text-[12px] sm:text-[14px] md:text-[15px]  md:block">
          teach on sound foundation edtech academy{" "}
        </p>
        <div className="flex items-center gap-3">
          <FaRegBell />

          <img src="/profile.png" alt="" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </nav>
  );
}
