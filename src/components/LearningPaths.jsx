function LearningPaths() {
  const card = [
    {
      image: "learningpath (1).png",
      header: "Unlock Your Potential with Innovative Learning!",
      desc: "At Sound Foundation EdTech Academy, we harness the power of technology to create an engaging and interactive learning environment. Our innovative courses are designed to inspire creativity and critical thinking, ensuring that students not only learn but thrive in a digital world. Join us and experience education like never before!",
      button: "Enroll",
    },
    {
      image: "learningpath (2).png",
      header: "Tailored Learning Paths for Every Student!",
      desc: "We understand that every learner is unique. That’s why Sound Foundation EdTech Academy offers personalized education plans that cater to individual strengths and interests. Our dedicated educators work closely with students to create customized learning experiences, helping them achieve their academic goals and build a strong foundation for the future.",
      button: "Enroll",
    },
    {
      image: "learningpath (3).png",
      header: "Learn from Industry Experts!",
      desc: "At Sound Foundation EdTech Academy, our team of experienced educators and industry professionals are passionate about teaching and mentoring. With real-world experience and a commitment to student success, our instructors provide valuable insights and guidance, equipping students with the skills they need to excel in their chosen fields.",
      button: "Enroll",
    },
  ];

  return (
    // <div className="mb-90 flex flex-col gap-15 w-full px-8 md:px-32 ">
    //   {card.map((cardInfo, index) => (
    //     <div
    //       key={index}
    //       className="flex flex-col gap-4 py-3 px-2 rounded-2xl border-gradient text-white md:flex-row-reverse md:py-6 md:px-7 md:gap-6"
    //     >
    //       <img
    //         src={cardInfo.image}
    //         alt="learningpath"
    //         className="w-full  md:w-[250px] md:h-auto object-contain"
    //       />
    //       <div className="flex flex-col gap-4 md:justify-center md:gap-8">
    //         <h1 className="text-[22px] font-bold"> {cardInfo.header}</h1>
    //         <p className="text-[16px] ">{cardInfo.desc}</p>
    //         <button className="bg-red-500 text-white px-4 py-1 rounded-xl w-fit md:mx-auto md:mt-6">
    //           {cardInfo.button}
    //         </button>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="mb-90 flex flex-col gap-15 w-full px-8 md:px-32 ">
  {card.map((cardInfo, index) => (
    <div
      key={index}
      className={`flex flex-col gap-4 py-3 px-2 rounded-2xl border-gradient text-white 
        ${index === 0 ? "md:flex-row" : "md:flex-row"} md:py-6 md:px-7 md:gap-6`}
    >
      <img
        src={cardInfo.image}
        alt="learningpath"
        className={`w-full object-contain 
          ${index === 2 ? "md:w-[700px]" : "md:w-[450px]"} md:h-auto`}
      />

      <div className="flex flex-col gap-4 md:justify-center md:gap-8">
        <h1 className="text-[22px] font-bold md:text-[26px]">{cardInfo.header}</h1>
        <p className="text-[16px] md:text-[18px]">{cardInfo.desc}</p>
        <button className="bg-red-500 text-white px-4 py-1 rounded-xl w-fit md:mx-auto md:mt-6">
          {cardInfo.button}
        </button>
      </div>
    </div>
  ))}
</div>

  );
}
export default LearningPaths;
