const images = [
  { src: "images/shoes (1).jpg", type: "mobile" },
  { src: "images/shoes (2).jpg", type: "mobile" },
  { src: "images/shoes (3).jpg", type: "mobile" },
  { src: "images/shoes (4).jpg", type: "mobile" },
];

function HeroSlider () {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000); // change every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden mb-[3rem] md:mb-[5rem]" id="banner">
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt="slideshow images"
          className={`absolute ${
            img.type === "mobile" ? "" : "hidden"
          } inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
          ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Static Text Content */}
      <div className="absolute inset-0 flex flex-col gap-15 items-center justify-center text-white text-center bg-black/40">
        <h1 className="font-bold text-[4rem] leading-18 md:text-[5rem] md:px-10 md:leading-21">
          Make your move more confortable
        </h1>
        <button className="bg-white py-2 px-4 text-[19px] text-black font-semibold rounded-[13px] hover:bg-[#173728] hover:text-[white] hover:border hover:border-white">
          Explore more
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default HeroSlider;
