import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdLock, MdPerson } from "react-icons/md";
import { RiHashtag } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const formFields = [
  {
    id: "username",
    name: "username",
    type: "text",
    label: "Username",
    icon: <MdPerson />,
    validation: { required: "Username is required" },
  },
  {
    id: "password",
    name: "password",
    type: "password", // Initial type
    label: "Password",
    icon: <MdLock />,
    validation: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
    },
  },
  {
    id: "repeat_password",
    name: "repeat_password",
    type: "password", // Initial type
    label: "Repeat Password",
    icon: <MdLock />,
    validation: {
      required: "Please repeat your password",
    },
  },
  {
    id: "student_id",
    name: "student_id",
    type: "text",
    label: "Student ID",
    icon: <RiHashtag />,
    validation: {
      required: "Student ID is required",
      pattern: {
        value: /^[0-9]+$/,
        message: "Student ID must contain only numbers",
      },
    },
  },
];

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <section className="px-5 md:px-10 lg:px-20 py-10 min-h-screen flex items-center justify-center text-white">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto gap-10">
        {/* Left container */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-5 w-full lg:w-1/2">
          <h1 className="capitalize sm:w-120 text-2xl md:text-4xl font-bold">
            sound foundation edtech academy student login portal
          </h1>
          <p className="text-sm md:text-base my-4">
            Your Gateway to Personalized Learning
          </p>
          <img
            src="/loginkey.png"
            alt=""
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>

        {/* Form container */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-5 w-full lg:w-1/2">
          <h1 className="capitalize text-2xl md:text-3xl font-bold">
            login to your account
          </h1>
          <p className="text-sm md:text-base">
            Access your courses, assignments, and learning resources anytime,
            anywhere
          </p>

          <IoPersonCircleOutline className="text-6xl md:text-7xl bg-[#D9D9D9] text-[#4b4b4b] rounded-full" />

          <form
            className="mt-3 md:mt-7 grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            {formFields.map((field) => (
              <div key={field.name} className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  {field.icon}
                  <label htmlFor={field.id}>{field.label}</label>
                </div>
                <div className="relative w-full">
                  {" "}
                  {/* Added relative wrapper */}
                  <input
                    type={
                      field.name === "password"
                        ? showPassword
                          ? "text"
                          : "password"
                        : field.name === "repeat_password"
                        ? showRepeatPassword
                          ? "text"
                          : "password"
                        : field.type
                    }
                    name={field.name}
                    id={field.id}
                    className={`bg-[#D9D9D9] rounded px-5 py-2 w-full pr-10 text-black outline-0 ${
                      // Added pr-10 for icon space
                      errors[field.name] ? "border border-red-500" : ""
                    }`}
                    {...register(
                      field.name,
                      field.name === "repeat_password"
                        ? {
                            ...field.validation,
                            validate: (value) =>
                              value === password || "Passwords do not match",
                          }
                        : field.validation
                    )}
                  />
                  {(field.name === "password" ||
                    field.name === "repeat_password") && (
                    <span
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-black"
                      onClick={() =>
                        field.name === "password"
                          ? setShowPassword(!showPassword)
                          : setShowRepeatPassword(!showRepeatPassword)
                      }
                    >
                      {field.name === "password" ? (
                        showPassword ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )
                      ) : showRepeatPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </span>
                  )}
                </div>
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.name].message}
                  </p>
                )}
              </div>
            ))}

            {/* Remember me and Submit button */}
            <div className="flex flex-col gap-5 mt-3 md:col-span-2">
              {" "}
              {/* Made this span two columns on medium screens */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className="scale-130 rounded accent-red-500"
                  {...register("remember_me")}
                />
                Remember me
              </div>
              <button
                type="submit"
                className="bg-[#F91130] hover:bg-[#ea0221] active:bg-[#da0320] cursor-pointer text-white font-bold py-2 px-4 rounded w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
