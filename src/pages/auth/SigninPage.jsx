
import { FaGraduationCap } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";

// ✅ Reusable Input Component
function InputField({ label, name, type = "text", register, errors }) {
  return (
    <div>
      <input
        type={type}
        placeholder={label}
        {...register(name, { required: `${label} is required` })}
        className="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-indigo-500"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
}

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Form Submit Handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="gap-12 w-full bg-gradient-to-b from-black to-gray-800 text-white px-6 py-12 md:px-[8rem]">
      {/* FORM STARTS HERE */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-12 w-full outline-0 md:flex-row"
      >
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

          {/* Inputs */}
          <div className="space-y-4">
            <InputField
              label="Username"
              name="username"
              register={register}
              errors={errors}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              register={register}
              errors={errors}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              register={register}
              errors={errors}
            />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              register={register}
              errors={errors}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold mb-4">
            Register With Us Today We Are Dedicated To Providing High-Quality
            Education And Innovative Learning Solutions
          </h1>
          <p className="mb-6 text-gray-300">
            Access Your Courses, Assignments and Discover How Sound Foundation
            EdTech Academy Can Help You Achieve Academic Excellence and Personal
            Growth.
          </p>

          <div className="space-y-4">
            <InputField
              label="Date Of Birth"
              name="dob"
              type="text"
              register={register}
              errors={errors}
            />

            <InputField
              label="Contact Address"
              name="address"
              register={register}
              errors={errors}
            />

            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              register={register}
              errors={errors}
            />

            <InputField
              label="Alternative Phone Number"
              name="altPhone"
              type="tel"
              register={register}
              errors={errors}
            />

            {/* .... Gender ....  */}
            <div>
              <label className="block font-semibold mb-2">Gender</label>
              <div className="flex gap-4 accent-red-500">
                <label>
                  <input
                    type="radio"
                    value="Male"
                    {...register("gender", { required: "Gender is required" })}
                  />
                  Male
                </label>
                <label>
                  <input type="radio" value="Female" {...register("gender")} />{" "}
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    value="Prefer Not To Say"
                    {...register("gender")}
                  />{" "}
                  Prefer Not To Say
                </label>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>

            {/* .....Remember Me......  */}
            <div className="flex gap-10">
              <div className="flex items-center gap-2">
              <input type="checkbox" {...register("remember")} className="accent-red-500"/>
              <span>Remember Me</span>
            </div>

            {/* .... Submit ..... */}
            <Button text="Submit"/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
