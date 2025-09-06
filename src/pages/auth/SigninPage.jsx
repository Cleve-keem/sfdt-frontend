import { FaGraduationCap } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

export default function SigninPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Join Us At Sound Foundation EdTech Academy!
          </h1>
          <p className="mb-6 text-gray-300">
            Are You Ready To Experience The Difference? At Sound Foundation, We
            Are Committed To Providing An Exceptional Educational Experience
            That Prepares Students For Success In A Rapidly Changing World.
          </p>

          <p className="flex items-center gap-3 mb-2">
            <FaGraduationCap /> Learn More About Our Programs — Visit Our
            Programs
          </p>
          <p className="flex items-center gap-3 mb-8 ">
            <MdLocalPhone /> Contact Us — Get In Touch
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 "
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-xl bg-gray-700 border border-gray-600  "
            />
            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 "
            />
          </form>
        </div>

        {/* RIGHT SIDE */}
      </div>
    </div>
  );
}
