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
      address: "Plot 64B Cele, Mowokeke, Elepe, Ikorodu.",
    },
    {
      title: "Coding Center",
      address: "52, Eleshin Opposite Adide Store, Along ijede Road, Ikorodu",
    },
  ];
  const phone = "08169194879, 09130198740";
  const email = "soundfoundationtechacademy@gmail.com";

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
    <footer className="flex flex-col justify-center bg-black text-white p-6 ">
      <div className="flex flex-col gap-10 items-center max-w-7xl md:min-w-[70%] justify-between mx-auto md:flex-row ">
        <div className="px-4">
          <ul>
            {contact.map((cont, index) => (
              <li key={index} className="gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="md:text-2xl">
                    <TiContacts />
                  </span>
                  <h3 className="font-bold">{cont.title}</h3>
                </div>
                <p className="text-[12px] md:text-x">{cont.address}</p>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 mb-2">
            <IoMdCall />
            <h3 className="font-bold text-xl">{phone}</h3>
          </div>

          <div className="flex items-center gap-2">
            <BiLogoGmail />
            <h3 className="text-[12px] md:text-x">{email}</h3>
          </div>
        </div>
        <div className="bg-white text-black rounded-2xl flex justify-center items-center h-[200px] mt-3 p-5 flex-col gap-4">
          <span className="font-semibold">
            Follow Us On Our Social Media Handles
          </span>
          <h3 className="text-sm">Sound Foundation EdTech Academy</h3>
          <div className="flex gap-6 text-3xl cursor-pointer">
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
        <div className="flex flex-col">
          © 2025 Sound Foundation EdTech Academy.
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
