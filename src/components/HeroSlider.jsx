import { useState, useEffect } from "react";
import { RiArrowRightFill } from "react-icons/ri";

const images = [
  "public/heroImage (1).jpg",
  "public/heroImage (2).jpg",
  "public/heroImage (3).jpeg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-90 relative mt-8">
      <div className=" w-full h-screen overflow-hidden ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full py-[2rem] object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 text-[18px] flex flex-col gap-10 justify-center px-5 text-white md:px-30">
        <h1 className="text-4xl font-bold capitalize md:leading-15 md:text-5xl md:w-3xl">
          Empower your learning journey with sound foundation edTech academy!
        </h1>
        <button className="flex items-center gap-3 bg-red-500 w-fit px-6 py-1.5 rounded-xl hover:bg-amber-50 hover:text-black ransition-all duration-1000 ease-in-out">
            <RiArrowRightFill />
          Enroll
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
