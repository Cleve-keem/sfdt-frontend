import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from "../Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const navbar = [
  {
    id: 1,
    title: "Join Us",
    link: "joinUs",
    icon: <IoMdArrowDropdown />,
    dropdown: [
      { title: "Register For Coding", link: "/" },
      { title: "Register For Utme/Waec", link: "/" },
    ],
  },
  {
    title: "Login/Sign Up to Portal",
    link: "home",
    icon: <IoMdArrowDropdown />,
    dropdown: [
      { title: "Student Login", link: "/" },
      { title: "Sign Up", link: "/" },
    ],
  },
  { title: "About Us", link: "about" },
  { title: "Contact Us", link: "contact" },
  { title: "Verify Certificate", link: "services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  function handleClickOutside(id) {
    setDropdownOpen((prev) => (prev === id ? null : id));
  }

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Navbar Row */}
        <div className="flex justify-between items-center h-16">
          <Logo />
          {/* Desktop Menu */}
          <DesktopNav
            navbar={navbar}
            setIsOpen={setIsOpen}
            handleClickOutside={handleClickOutside}
            dropdownOpen={dropdownOpen}
          />
          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-2xl text-white focus:outline-none"
            >
              <CiMenuKebab />
            </button>
          </div>
          {/* Side Drawer Overlay */}
        </div>
      </div>
      {isOpen && <div className="fixed" onClick={() => setIsOpen(false)}></div>}

      {/* Mobile side menu */}
      <MobileNav
        navbar={navbar}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleClickOutside={handleClickOutside}
        dropdownOpen={dropdownOpen}
      />
    </nav>
  );
}
