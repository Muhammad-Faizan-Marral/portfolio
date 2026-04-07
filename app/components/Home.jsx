import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="brightness-125 flex items-center justify-center flex-col gap-5 mt-36">
      <header>
        <div className="isAvailableSection border-[0.5px] border-[#464545] w-60 p-1.5 h-6 rounded-full bg-white/5 flex items-center justify-center gap-2.5">
          <div className="dot-animation h-2 w-2 rounded-full"></div>
          <span className="uppercase text-[12px] text-[#008cff] tracking-wide">
            Frontend & React Developer
          </span>
        </div>
      </header>

      <main className="flex items-center justify-center ">
        <h1 className="text-[13vw] lg:text-[7.4vw] font-extrabold tracking-tighter leading-[1] text-center">
          Front-End <br />
          <span className="bg-[linear-gradient(140deg,rgba(11,160,219,1)_28%,rgba(102,87,199,1)_49%,rgba(156,0,143,1)_64%)] bg-clip-text text-transparent inline-block drop-shadow-sm">
            Developer
          </span>
        </h1>
      </main>

      <section>
        <p className="text-[#a1a1aa] max-w-160 px-6 sm:text-[19px] md:text-[21px] tracking-tight font-light text-center leading-[1.7rem]">
          I build high-performance, scalable web applications using React,
          Next.js, and modern JavaScript — focusing on clean UI, smooth
          interactions, and real-world usability.
        </p>
      </section>

      <footer className="mt-3 ">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4  w-[90vw]">
          <Link
            className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold 
                 shadow-lg shadow-blue-500/20 transition-all duration-300
                 hover:scale-[1.05] active:scale-[0.98]
                 bg-[linear-gradient(133deg,rgba(42,123,155,1)_0%,rgba(102,87,199,1)_50%,rgba(156,0,143,1)_100%)]
                 
                 hover:shadow-[0_0_20px_rgba(102,87,199,0.5)]"
            href="#projects"
          >
            View Projects
          </Link>

          <a
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/10 
                 text-white font-medium hover:bg-white/5 transition-all 
                 hover:border-white/40 backdrop-blur-sm"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </footer>

      <div className="mt-0.5 arrow-movements">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;
