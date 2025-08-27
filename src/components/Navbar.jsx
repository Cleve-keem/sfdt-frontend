import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import NavDropDown from "./NavDropDown";

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
      { title: "Student Login To Portal", link: "/" },
      { title: "Register To Login To Portal", link: "/" },
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
          <div className="text-2xl font-bold text-blue-600">SoundTech Logo</div>
          {/* Desktop Menu */}
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
          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-2xl text-white focus:outline-none"
            >
              <CiMenuKebab />
            </button>
          </div>
        </div>
      </div>

      {/* Side Drawer Overlay */}
      {isOpen && <div className="fixed" onClick={() => setIsOpen(false)}></div>}

      {/* Side Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="font-bold text-blue-600">SoundTech Academy</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="grid px-4 py-6 space-y-4 ">
          <a href="#joinUs" className="hover:text-blue-600">
            Join Us
          </a>
          <a href="#home" className="hover:text-blue-600">
            Login/Sign Up to Portal
          </a>
          <a href="#about" className="hover:text-blue-600">
            About Us
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact Us
          </a>
          <a href="#services" className="hover:text-blue-600">
            Verify Certificate
          </a>
        </div>
      </div>
    </nav>
  );
}
