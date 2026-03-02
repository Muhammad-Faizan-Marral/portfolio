import React from "react";

const Experience = () => {
  return (
    <div class="max-w-4xl mx-auto px-6 mt-6" id="experience">
      <div class="text-center mb-16">
        <span class="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
          Career Path
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-white">Experience</h2>
      </div>
      <div class="relative pl-8 md:pl-0">
        {/* <!-- Vertical Line --> */}
        <div class="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>
        {/* <!-- Item 1 --> */}
        <div class="relative mb-12 md:flex justify-between items-center group w-full ">
          <div class="md:w-[45%] mb-4 md:mb-0 md:text-right order-1">
            <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">
              Senior Front-End Developer
            </h3>
            <p class="text-gray-400">TechCorp Inc.</p>
          </div>
          <div class="absolute left-[-19px] md:left-1/2 w-4 h-4 rounded-full bg-[#0e0e0e] border-2 border-primary shadow-[0_0_10px_rgba(19,164,236,0.5)] -translate-x-1/2 order-2 z-10"></div>
          <div class="md:w-[45%] order-3 pl-6 md:pl-0">
            <span class="text-sm font-mono text-primary/80 mb-2 block">
              2022 - Present
            </span>
            <p class="text-gray-400 text-sm leading-relaxed">
              Leading the frontend team in rebuilding the core platform
              dashboard. Improved performance by 40% and established a new
              design system.
            </p>
          </div>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="relative mb-12 md:flex justify-between items-center group w-full">
          <div class="md:w-[45%] order-3 md:order-1 mb-4 md:mb-0 md:text-right pl-6 md:pl-0">
            <span class="text-sm font-mono text-primary/80 mb-2 block">
              2020 - 2022
            </span>
            <p class="text-gray-400 text-sm leading-relaxed">
              Developed interactive marketing sites for Fortune 500 clients.
              Collaborated closely with designers to ensure pixel-perfect
              implementation.
            </p>
          </div>
          <div class="absolute left-[-19px] md:left-1/2 w-4 h-4 rounded-full bg-[#0e0e0e] border-2 border-gray-600 group-hover:border-primary transition-colors -translate-x-1/2 order-2 z-10"></div>
          <div class="md:w-[45%] order-1 md:order-3 mb-4 md:mb-0">
            <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">
              UI Developer
            </h3>
            <p class="text-gray-400">Creative Agency</p>
          </div>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="relative md:flex justify-between items-center group w-full">
          <div class="md:w-[45%] mb-4 md:mb-0 md:text-right order-1">
            <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">
              Freelance Web Developer
            </h3>
            <p class="text-gray-400">Self Employed</p>
          </div>
          <div class="absolute left-[-19px] md:left-1/2 w-4 h-4 rounded-full bg-[#0e0e0e] border-2 border-gray-600 group-hover:border-primary transition-colors -translate-x-1/2 order-2 z-10"></div>
          <div class="md:w-[45%] order-3 pl-6 md:pl-0">
            <span class="text-sm font-mono text-primary/80 mb-2 block">
              2018 - 2020
            </span>
            <p class="text-gray-400 text-sm leading-relaxed">
              Built custom WordPress themes and Shopify stores for small
              businesses. Managed full project lifecycle from concept to
              deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
