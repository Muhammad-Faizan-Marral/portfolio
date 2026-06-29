import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="lg:h-screen flex items-center justify-around gap-7 flex-col-reverse lg:flex-row p-10"
    >
      {/* Left Content */}
      <section className="w-[86vw] sm:h-[90vw] md:h-full lg:w-[37rem]">
        <div>
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Engineering scalable <br />
              <span className="text-[#22d3ee] bg-gradient-to-r from-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">
                full-stack systems
              </span>.
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-[17px]">
              <p>
                Hi, I’m <span className="text-white font-medium">Muhammad Faizan</span> — a passionate Full-Stack Engineer 
                crafting high-performance digital experiences that scale.
              </p>
              <p>
                I specialize in building robust, real-time applications using modern JavaScript/TypeScript ecosystems. 
                From distributed systems and low-latency architectures to beautiful, buttery-smooth interfaces — 
                I turn complex requirements into production-grade solutions.
              </p>
              <p>
                When I’m not coding, you’ll find me deep-diving into system design, exploring new UI paradigms, 
                or turning caffeine into clean, performant code at 3 AM.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-full bg-[#22d3ee]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m6 12 3 3 8-9" />
                    </svg>
                  </div>
                  <span>Real-Time WebSockets</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-full bg-[#22d3ee]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m6 12 3 3 8-9" />
                    </svg>
                  </div>
                  <span>Production AI Pipelines</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="w-7 h-7 rounded-full bg-[#22d3ee]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m6 12 3 3 8-9" />
                    </svg>
                  </div>
                  <span>Optimized Database Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Code Window */}
      <section>
        <div className="group relative h-[95vh] w-[85vw] lg:h-[34rem] lg:w-[32rem] rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950/90 to-black/90 backdrop-blur-3xl flex items-center justify-center transition-all duration-700 hover:border-[#22d3ee]/50 hover:shadow-2xl hover:shadow-[#22d3ee]/20 overflow-hidden">
          
          {/* Glass Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="bg-[#0a0a0a] h-[88vh] w-[77vw] lg:h-[30rem] lg:w-[28rem] rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
            
            {/* MacOS Traffic Lights */}
            <div className="bg-zinc-900 flex items-center justify-start pl-4 gap-2 w-full h-11 border-b border-white/10">
              <div className="bg-red-500 h-3.5 w-3.5 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
              <div className="bg-amber-400 h-3.5 w-3.5 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
              <div className="bg-emerald-500 h-3.5 w-3.5 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
            </div>

            {/* Code Content */}
            <div className="p-8 font-mono text-sm leading-relaxed bg-[#0a0a0a] h-[calc(100%-44px)] overflow-auto">
              <div className="text-[#c084fc]">
                const{" "}
                <span className="text-[#60a5fa] font-semibold">developer</span>{" "}
                = {"{"}
              </div>

              <div className="pl-6 mt-3">
                <span className="text-[#e2e8f0]">name</span>:{" "}
                <span className="text-emerald-400">"Muhammad Faizan"</span>,
              </div>

              <div className="pl-6">
                <span className="text-[#e2e8f0]">role</span>:{" "}
                <span className="text-emerald-400">"Full-Stack Software Engineer"</span>,
              </div>

              <div className="pl-6">
                <span className="text-[#e2e8f0]">focus</span>:{" "}
                <span className="text-emerald-400">"Distributed Systems &amp; Premium UI Architectures"</span>,
              </div>

              <div className="pl-6 mt-4">
                <span className="text-[#e2e8f0]">coreTech</span>: [
              </div>
              
              <div className="pl-10 text-emerald-400 space-y-1">
                &apos;Next.js&apos;,<br />
                &apos;TypeScript&apos;,<br />
                &apos;Node.js&apos;,<br />
                &apos;PostgreSQL&apos;,<br />
                &apos;Socket.io&apos;,<br />
                &apos;Prisma&apos;
              </div>
              <div className="pl-6">],</div>

              <div className="pl-6 mt-5">
                <span className="text-[#60a5fa]">executeCode</span>:{" "}
                <span className="text-[#c084fc]">() =&gt;</span>{" "}
                <span className="text-emerald-400">"Transforms caffeine into low-latency applications"</span>
              </div>

              <div className="mt-6 text-[#c084fc]">{"};"}</div>

              {/* Subtle cursor effect */}
              <div className="inline-block w-2 h-5 bg-[#22d3ee] animate-pulse ml-1 -mb-1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;