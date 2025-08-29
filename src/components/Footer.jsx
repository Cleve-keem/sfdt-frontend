import { TiContacts } from "react-icons/ti";
import { IoMdCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { CgInstagram } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  const contact = [
    {
      title: "Coding/Jamb & Waec Center",
      address: "Betterdays Estate Off Ireakari Opposite Car Wash Bus Stop",
    },
    {
      title: "Waec & Jamb Center",
      address: "Plot 64B Cele, Mowokeker, Elepe, Ikorodu.",
    },
    {
      title: "Coding Center",
      address: "52, Eleshin Opposite Adide Store, Along ijede Road, Ikorodu",
    },
  ];
  const phone = "+234 8169194879, +234 9130198740";
  const email =
    "soundfoundationtechacademy@gmail.com,   soundfoundationtechacademy@yahoo.com";

  const socials = [
    {
      logo: <CgInstagram />,
      link: "https://www.instagram.com/soundfoundationedtechacademy/",
    },
    { logo: <BiLogoGmail />, link: "mailto:soundtech.gmail.com" },
    {
      logo: <BsTwitterX />,
      link: "https://twitter.com/soundfoundationedtechacademy",
    },
    {
      logo: <FaFacebookSquare />,
      link: "https://www.facebook.com/soundfoundationedtechacademy",
    },
    {
      logo: <IoLogoTiktok />,
      link: "https://www.tiktok.com/@soundfoundationedtechacademy",
    },
  ];

  return (
    <footer className=" bg-red-600 text-white p-6 ">
      <div className="md:justify-between w-full md:flex">
        <div className="mx-10">
          <ul>
            {contact.map((cont, index) => (
              <li key={index} className="  gap-4 mb-4">
                <span className="flex items-center gap-2">
                  <TiContacts />
                  <h3 className="font-bold">{cont.title}</h3>
                </span>
                <p className="text-sm">{cont.address}</p>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 mb-2">
            <IoMdCall />
            <h3 className="font-bold">{phone}</h3>
          </div>

          <div className="flex items-center gap-2">
            <BiLogoGmail />
            <h3 className="font-bold">{email}</h3>
          </div>
        </div>
        <div className="bg-black rounded-2xl shadow-xl p-6 flex justify-center items-center flex-col gap-4">
          <span className="font-semibold">
            Follow Us On Our Social Media Handles
          </span>
          <h3 className="text-sm">Sound Foundation EdTech Academy</h3>
          <div className="flex gap-6 text-xl cursor-pointer">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                {social.logo} 
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm border-t border-white/30 pt-4">
        © 2025 Sound Foundation EdTech Academy. All rights reserved.
      </div>
    </footer>
  );
}
