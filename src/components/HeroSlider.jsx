import { useState, useEffect } from "react";

const images = [
  "public/shoes (1).jpg",
  "public/shoes (3).jpg",
  "public/shoes (4).jpg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-90 relative ">
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
      <div className="absolute inset-0 flex flex-col justify-center px-5 bg-black/40  md:px-30">
        <h1 className="text-3xl font-bold text-yellow-300 md:text-4xl md:w-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
          excepturi!
        </h1>
        <button className="bg-red-500 w-fit px-4 py-1.5">Enroll</button>
      </div>
    </div>
  );
};

export default HeroSlider;
