import { TiContacts } from "react-icons/ti";
import { IoMdCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";

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
  const email = "soundfoundationtechacademy@gmail.com,   soundfoundationtechacademy@yahoo.com";

  return (
    <div className="bg-black text-white p-6">
      <ul >
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
  );
}
