import { useState, useEffect } from "react";

const images = [
  "/heroImage1.jpg",
  "/heroImage2.jpg",
  "/heroImage3.jpg",
  "/heroImage4.jpeg",
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
    <div className="w-full h-screen overflow-hidden  relative left-0 right-0 ">
      <div
        className="flex inset-0 h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`w-full h-full object-cover bg-no-repeat flex-shrink-0 "
            `}
          />
        ))}
      </div>
      <div className="absolute inset-0 text-[18px] flex flex-col gap-10 justify-center px-5 text-white md:px-30">
        <h1 className="text-4xl font-bold capitalize md:leading-15 md:text-5xl md:w-3xl">
          Empower your learning journey with sound foundation edTech academy!
        </h1>
        <button className="bg-red-500 w-fit px-6 py-1.5 rounded-xl">  
          Enroll
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
