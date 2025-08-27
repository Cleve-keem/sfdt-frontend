import React from "react";

export default function Logo({ className }) {
  return (
    <div className={`h-15 ${className}`}>
      <img
        src="/sfeaLogo.png"
        alt="SoundTech Academy"
        className="w-full h-full"
      />
    </div>
  );
}
