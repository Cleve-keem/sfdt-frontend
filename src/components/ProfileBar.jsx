import React from "react";
import { SlLike } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
export default function ProfileBar() {
  return (
    <nav>
      <div>
        <p>teach on sound foundation edtech academy </p>
        <div>
          <SlLike />
          <IoCartOutline />
          <FaRegBell />
        </div>
      </div>
    </nav>
  );
}
