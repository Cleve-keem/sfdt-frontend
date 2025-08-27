export default function NavDropDown({ open, dropdown: NavDropDown }) {
  return (
    <ul
      className={`dropdown ${
        open ? "block" : "hidden"
      } text-white w-[300px] bg-black/75 p-4 left-1/2 rounded-md absolute -translate-x-1/2`}
    >
      {NavDropDown.map((nav, index) => (
        <li key={index} className="text-center p-2 ">
          <span className="">{nav.title}</span>
        </li>
      ))}
    </ul>
  );
}
