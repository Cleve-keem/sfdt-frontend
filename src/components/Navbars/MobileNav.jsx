import { IoMdClose } from "react-icons/io";
import Logo from "../Logo";

export default function MobileNav({
  navbar,
  isOpen,
  setIsOpen,
  dropdownOpen,
  handleClickOutside,
}) {
  return (
    <div
      className={`absolute bottom-0 top-0 left-0 w-69 bg-white shadow-md z-50 transform transition-transform duration-300 md:hidden ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-4 border-b bg-black">
        <Logo />
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl text-white"
        >
          <IoMdClose />
        </button>
      </div>
      <ul className="flex flex-col px-4 py-6 h-screen space-y-4 bg-white">
        {navbar.map((nav, index) => (
          <div
            className="relative "
            key={index}
            onClick={() => nav.dropdown && handleClickOutside(index)}
          >
            <div
              // href={nav.link}
              className="hover:text-blue-600 items-center gap-2 cursor-pointer"
            >
              <div className="flex items-center">
                <span>{nav.title}</span>
                <span
                  className={`${
                    dropdownOpen === index ? "rotate-180" : "rotate-0"
                  } duration-400`}
                >
                  {nav.icon}
                </span>
              </div>
              {nav.dropdown && (
                <div
                  className={`${
                    dropdownOpen === index ? "block" : "hidden"
                  } transition-all duration-500`}
                >
                  {nav.dropdown.map((nav, index) => (
                    <div key={index} className="py-2 ">
                      <span className="">{nav.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
