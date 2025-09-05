import { RiArrowRightFill } from "react-icons/ri";

function Button() {
  return (
    <button className="bg-red-500 text-white w-fit px-4 py-1.5 rounded-xl cursor-pointer flex text-center items-center gap-2">
      <RiArrowRightFill />
      Enroll
    </button>
  );
}
export default Button;
