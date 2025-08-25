import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Navbar Row */}
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">SoundTech Logo</div>

          {/* Desktop Menu */}
          <div className="text-white hidden md:flex space-x-7 font-bold">
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

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-2xl text-gray-700 focus:outline-none"
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
