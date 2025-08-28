import React from "react";

export default function DesktopNav() {
  return (
    <ul className="text-white hidden md:flex space-x-7">
      {navbar.map((nav, index) => (
        <li
          className="relative"
          key={index}
          onClick={() => nav.dropdown && handleClickOutside(index)}
        >
          <span
            // href={nav.link}
            className="hover:text-blue-600 flex items-center gap-2 cursor-pointer"
          >
            {nav.title}
            <span
              className={`${
                dropdownOpen === index ? "rotate-180" : "rotate-0"
              } duration-400`}
            >
              {nav.icon}
            </span>
          </span>
          {nav.dropdown && (
            <NavDropDown
              open={dropdownOpen === index}
              dropdown={nav.dropdown}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
