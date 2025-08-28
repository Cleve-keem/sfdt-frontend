import React from "react";
import { SlLike } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
export default function ProfileBar() {
  return (
    <nav className="bg-[linear-gradient(45deg,black,#666666)] py-3  text-white flex justify-end pr-10">
      <div className=" flex items-center gap-10 ">
        <p className=" capitalize text-[15px] ">
          teach on sound foundation edtech academy{" "}
        </p>
        <div className="flex items-center gap-3">
          <SlLike />
          <IoCartOutline />
          <FaRegBell />

          <img src="/profile.png" alt="" />
        </div>
      </div>
    </nav>
  );
}
