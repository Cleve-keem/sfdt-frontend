import { FaGraduationCap } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { useForm } from "react-hook-form";

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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              label="Repeat Password"
              name="confirmPassword"
              type="password"
              register={register}
              errors={errors}
            />

           
          </form>
        </div>

        {/* RIGHT SIDE */}
      </div>
    </div>
  );
}
