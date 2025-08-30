import React from "react";

export default function CourseCards() {
  const cardData = [
    {
      imgSrc: "/public/frontend.png",
      title: "Frontend Development",
      description:
        "Duration: 4 months. You'll Learn: HTML, CSS, JavaScript, React, NextJs, Responsive Web Design, Git & GitHub, Modern frontend workflows, Building dynamic web pages.",
    },
    {
      imgSrc: "/public/UIUX.png",
      title: "UIUX Design",
      description:
        "Duration: 3 months. You’ll Learn: UI design principles, UX research & wireframing, Prototyping tools (e.g., Figma), User testing, Design systems & accessibility.",
    },
    {
      imgSrc: "/public/Frontend-UX.png",
      title: "Frontend + UI/UX Combo",
      description:
        "Duration: 4 months. You'll Learn: Full UI/UX design process, Frontend development from scratch, Design-to-code handoff, Building interactive, user-focused websites.",
    },
    {
      imgSrc: "/public/DataAnalysis.png",
      title: "Data Analysis with Excel",
      description:
        "Duration: 4 months. You'll Learn: Spreadsheet fundamentals, Data cleaning & formatting, Advanced Excel functions, Pivot tables & dashboards, Basic data visualization.",
    },
    {
      imgSrc: "/public/DataPython.png",
      title: "Data Analysis with Python",
      description:
        "Duration: 4 months. You'll Learn: Python for data analysis, NumPy & Pandas, Data wrangling, Basic statistics & plotting (Matplotlib/Seaborn), Intro to automation in analysis.",
    },
    {
      imgSrc: "/public/java.png",
      title: "The Fundamentals of Programming with Java",
      description:
        "Duration: 3 months. You'll Learn: Java basics & OOP, Control structures, Working with files, Problem solving with Java.",
    },
    {
      imgSrc: "/public/Forex.png",
      title: "Forex Trading",
      description:
        "Duration: 6 months. You'll Learn: Market fundamentals, Technical & fundamental analysis, Trading strategies, Risk management, Live trading sessions.",
    },
    {
      imgSrc: "/public/video.png",
      title: "Video Production",
      description:
        "Duration: 6 months. You'll Learn: Video planning & scripting, Filming techniques, Audio editing, Post-production (e.g., Adobe Premiere), Motion graphics basics.",
    },
    {
      imgSrc: "/public/digitalImage.png",
      title: "Digital Imaging",
      description:
        "Duration: 6 months. You'll Learn: Photo editing (e.g Photoshop), Image correction & retouching, Creative design techniques, File formats and optimization.",
    },
    {
      imgSrc: "/public/cybersecurity.png",
      title: "Cybersecurity (Deep Penetration Testing)",
      description:
        "Duration: 3 months. You'll Learn: Cybersecurity fundamentals, Ethical hacking, Penetration testing tools, Vulnerability scanning, Reporting and remediation techniques.",
    },
    {
      imgSrc: "/public/frontend.png",
      title: "Coding Bootcamps",
      description:
        "Duration: 3 months per track. You'll Learn: Each track includes Git & GitHub training. Tracks Available: HTML, CSS, JavaScript C# + HTML, CSS C# + JavaScript C++ + HTML, CSS C++ + JavaScript Java + HTML, CSS Java + JavaScript.",
    },
    {
      imgSrc: "/public/backend.png",
      title: "Backend with Python Django",
      description:
        "Duration: 3 months. You'll Learn: Python fundamentals, Django framework, Building RESTful APIs, Database integration (SQLite/PostgreSQL), Authentication & deployment.",
    },
    {
      imgSrc: "/public/fullstack.png",
      title: "Fullstack Development",
      description:
        "Duration: 7 months. You'll Learn: Frontend + Backend, HTML, CSS, JavaScript, React.js, Python Django, Full CRUD apps, Version control & deployment.",
    },
    {
      imgSrc: "/public/advancdFE.png",
      title: "Advanced Frontend (Supabase & Next.js)",
      description:
        "Duration: 3 months. You'll Learn: React with Next.js, Server-side rendering, Supabase (Postgres + Auth), API routing, Building production-ready apps.",
    },
    {
      imgSrc: "/public/webdesign.png",
      title: "Web Design",
      description:
        "Duration: 3 months. You'll Learn: UI/UX fundamentals, HTML, CSS, JavaScript, Design mockups to functional sites, Responsive design best practices.",
    },
    {
      imgSrc: "/public/node.js.png",
      title: "Backend Development with Node.js",
      description:
        "Duration: 3 months. You'll Learn: JavaScript (Node.js) fundamentals, Building RESTful APIs with Express.js, Working with MongoDB (NoSQL), Authentication & Authorization (JWT, OAuth), API testing & Postman, File handling & middleware, Deploying backend apps (e.g., Render, Railway).",
    },
    {
      imgSrc: "/public/php.png",
      title: "Backend Development with PHP",
      description:
        "Duration: 3 months. You'll Learn: PHP syntax & server-side scripting, Working with MySQL databases, Building CRUD applications, Form handling & session management, File uploads & email integration, MVC architecture, Hosting PHP apps on shared servers or cPanel.",
    },
    {
      imgSrc: "/public/videoediting.png",
      title: "Video Editing & Production",
      description:
        "Duration: 6 months. You'll Learn: Storyboarding & scripting techniques, Camera handling & lighting basics, Audio recording & syncing, Video editing (e.g., Adobe Premiere Pro, Final Cut Pro), Motion graphics & transitions, Exporting for web and social platforms, Full production workflow from shoot to screen.",
    },
    {
      imgSrc: "/public/photoediting.png",
      title: "Photography & Photo Editing",
      description:
        "Duration: 6 months. You'll Learn: Camera settings & manual shooting, Composition & lighting techniques, Portrait, landscape & event photography, Image editing in Adobe Photoshop & Lightroom, Retouching, color grading & effects, Creating digital photo albums and prints.",
    },
    {
      imgSrc: "/public/forTrading.png",
      title: "Forex Trading",
      description:
        "Duration: 6 months. You'll Learn: Introduction to the Forex market, Trading platforms & tools (e.g., MetaTrader 4/5), Technical & fundamental analysis, Risk management & psychology of trading, Strategy development (scalping, swing trading), Live trading simulations & mentorship, Moving from demo to real account trading.",
    },
  ];

  return (
    <section className="bg-black py-10 px-10">
      <div className="max-w-[1200px] bg-[#f911302b] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-7 gap-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#f911308b] shadow-2xl hover:scale-105 duration-300 rounded-lg overflow-hidden"
          >
            <div>
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-white p-4 text-[15px] flex flex-col gap-1 items-center">
              <h2 className="font-semibold text-center">{card.title}</h2>
              <p className="text-[14px] font-light text-center">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
