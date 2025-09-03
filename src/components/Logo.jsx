import React from "react";
import { Link } from "react-router";

export default function Logo({ className }) {
  return (
    <Link to="/" className={`h-15 w-25 ${className}`}>
      <img
        src="/sfeaLogo.png"
        alt="SoundTech Academy"
        className="w-full h-full"
      />
    </Link>
  );
}
