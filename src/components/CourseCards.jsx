export default function CourseCards() {
  return (
    <section className="bg-black">
      {/* cards grid-container */}
      <div className="max-w-[1440px] bg-[#f9113044] place-self-center mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  p-10 gap-5">
        {/* Card 1 */}

        <div className="bg-[#f91130b3] w-[216px] shadow-2xl ">
          {/* card-image */}
          <div>
            <img src="/frontend.png" alt="" />
          </div>
          {/* card info */}
          <div className="text-white p-4 text-[15px] flex flex-col gap-2 items-center">
            <h2 className="font-semibold">Frontend Development</h2>
            <p className="text-[14px] font-light text-center">
              Duration: 4 months You'll Learn: HTML, CSS, JavaScript, React ,
              NextJs Responsive Web Design Git & GitHub Modern frontend
              workflows Building dynamic web pages
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-[#f91130b3] w-[216px] ">
          {/* card-image */}
          <div>
            <img src="/frontend.png" alt="" />
          </div>
          {/* card info */}
          <div className="text-white p-4 text-[15px] flex flex-col gap-2 items-center">
            <h2 className="font-semibold">Frontend Development</h2>
            <p className="text-[14px] font-light text-center">
              Duration: 4 months You'll Learn: HTML, CSS, JavaScript, React ,
              NextJs Responsive Web Design Git & GitHub Modern frontend
              workflows Building dynamic web pages
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-[#f91130b3] w-[216px] ">
          {/* card-image */}
          <div>
            <img src="/frontend.png" alt="" />
          </div>
          {/* card info */}
          <div className="text-white p-4 text-[15px] flex flex-col gap-2 items-center">
            <h2 className="font-semibold">Frontend Development</h2>
            <p className="text-[14px] font-light text-center">
              Duration: 4 months You'll Learn: HTML, CSS, JavaScript, React ,
              NextJs Responsive Web Design Git & GitHub Modern frontend
              workflows Building dynamic web pages
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-[#f91130b3] w-[216px] ">
          {/* card-image */}
          <div>
            <img src="/frontend.png" alt="" />
          </div>
          {/* card info */}
          <div className="text-white p-4 text-[15px] flex flex-col gap-2 items-center">
            <h2 className="font-semibold">Frontend Development</h2>
            <p className="text-[14px] font-light text-center">
              Duration: 4 months You'll Learn: HTML, CSS, JavaScript, React ,
              NextJs Responsive Web Design Git & GitHub Modern frontend
              workflows Building dynamic web pages
            </p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="bg-[#f91130b3] w-[216px] ">
          {/* card-image */}
          <div>
            <img src="/frontend.png" alt="" />
          </div>
          {/* card info */}
          <div className="text-white p-4 text-[15px] flex flex-col gap-2 items-center">
            <h2 className="font-semibold">Frontend Development</h2>
            <p className="text-[14px] font-light text-center">
              Duration: 4 months You'll Learn: HTML, CSS, JavaScript, React ,
              NextJs Responsive Web Design Git & GitHub Modern frontend
              workflows Building dynamic web pages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
