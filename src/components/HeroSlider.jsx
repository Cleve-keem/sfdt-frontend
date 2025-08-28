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
    <div>
      <div className="relative w-full h-screen overflow-hidden ">
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
    </div>
  );
};

export default HeroSlider;
