function LearningPaths() {
  const card = [
    {
      image: "learningpath (2).png" ,
      header: "Unlock Your Potential with Innovative Learning!",
      desc: "At Sound Foundation EdTech Academy, we harness the power of technology to create an engaging and interactive learning environment. Our innovative courses are designed to inspire creativity and critical thinking, ensuring that students not only learn but thrive in a digital world. Join us and experience education like never before!",
      button: "learningbutton.png",
    },
  ];

  return <div className="mb-90 w-full px-2 border border-red-500">
    {card.map((cardInfo, index) =>(
        <div key={index}>
            <img src={cardInfo.image} alt="learningpath" className="w-full"/>
           <h1 className="text-[20px] font-bold px-3 text-center"> {cardInfo.header}</h1>
            {cardInfo.desc}
            <img src={cardInfo.button} alt="" />
        </div>
    ))}
  </div>;
}
export default LearningPaths;
