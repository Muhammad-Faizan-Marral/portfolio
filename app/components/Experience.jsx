import React from "react";

const Experience = () => {
  return (
    <div className="brightness-125 max-w-4xl mx-auto px-6 mt-6" id="experience">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
          Career Path
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Experience
        </h2>
      </div>

      <div className="relative pl-8 md:pl-0">
        
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

        {/* INTERNSHIP */}
        <div className="relative mb-12 md:flex justify-between items-center group w-full ">
          <div className="md:w-[45%] mb-4 md:mb-0 md:text-right order-1">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
             Full-Stack Software Engineer Intern
            </h3>
            <p className="text-gray-400">softechgenics</p>
          </div>

          <div className="absolute left-[-19px] md:left-1/2 w-4 h-4 rounded-full bg-[#0e0e0e] border-2 border-primary shadow-[0_0_10px_rgba(19,164,236,0.5)] -translate-x-1/2 order-2 z-10"></div>

          <div className="md:w-[45%] order-3 pl-6 md:pl-0">
            <span className="text-sm font-mono text-primary/80 mb-2 block">
              Apr 2024 – Jul 2024
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
             Engineered production-grade full-stack features using the MERN ecosystem. Developed robust server layouts, handled system tokens (JWT access/refresh workflows), and integrated real-time micro-interactions while maintaining strict Git compliance.
            </p>
          </div>
        </div>

        {/* PROJECT-BASED EXPERIENCE */}
        <div className="relative mb-12 md:flex  justify-between items-center group w-full">
          <div className="md:w-[45%] order-3 md:order-1 mb-4 md:mb-0 md:text-right pl-6 md:pl-0">
            <span className="text-sm font-mono text-primary/80 mb-2 block">
              2023 – Present
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
             Architected standalone financial SaaS solutions and real-time chat infrastructures. Designed secure PostgreSQL and MongoDB database schemas, implemented client-side data caching strategies using TanStack Query, and engineered custom business-logic algorithms like dynamic background stream tracking.
            </p>
          </div>

          <div className="absolute left-[-19px] md:left-1/2 w-4 h-4 rounded-full bg-[#0e0e0e] border-2 border-gray-600 group-hover:border-primary transition-colors -translate-x-1/2 order-2 z-10"></div>

          <div className="md:w-[45%] order-1 md:order-3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              Full-Stack Developer (Independent / Contract)
            </h3>
            <p className="text-gray-400">Personal & Portfolio Projects</p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="relative md:flex justify-between items-center group w-full">
          <div className="md:w-[45%] mb-4  md:mb-0 md:text-right order-1">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              Bachelor of Computer Science
            </h3>
            <p className="text-gray-400">Islamia University Bahawalpur</p>
          </div>

          <div className="absolute left-[-19px] md:left-1/2 w-4 h-4 rounded-full bg-[#0e0e0e] border-2 border-gray-600 group-hover:border-primary transition-colors -translate-x-1/2 order-2 z-10"></div>

          <div className="md:w-[45%] order-3 pl-6 md:pl-0">
            <span className="text-sm font-mono text-primary/80 mb-2 block">
              2021 – 2025
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging the gap between CS theory and practical web development
              by building robust, real-world applications with a focus on
              efficient architecture.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Experience;
