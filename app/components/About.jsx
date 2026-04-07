import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" lg:h-screen flex items-center justify-around gap-7 flex-col-reverse lg:flex-row  p-10"
    >
      <section className="w-[86vw] sm:h-[90vw] md:h-full lg:w-[37rem] ">
        <div className="">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bridging design &amp; <br />{" "}
              <span className="text-[#22d3ee]">engineering</span>.
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Hi, I’m Muhammad Faizan — a passionate Frontend Engineer
                obsessed with crafting interfaces that feel magical yet perform
                like a beast.
              </p>
              <p>
               I specialize in Next.js, TypeScript, TailwindCSS & Supabase to build SaaS applications that are not only beautiful but also scalable, accessible, and conversion-focused. Whether it’s an AI-powered tool or a high-traffic e-commerce platform, I focus on clean architecture, buttery-smooth animations, and real business impact.
              </p>
              <p>
                When I’m not coding, you’ll find me exploring new design systems, optimizing performance, or sipping coffee while debugging at 3 AM
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-primary">
                    <svg
                      className="w-7 h-7 text-[#22d3ee] dark:text-[#22d3ee]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="11"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1"
                      />

                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m6 12 3 3 8-9"
                      />
                    </svg>
                  </span>
                  <span>Pixel Perfect</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-primary">
                    <svg
                      className="w-7 h-7 text-[#22d3ee] dark:text-[#22d3ee]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="11"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1"
                      />

                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m6 12 3 3 8-9"
                      />
                    </svg>
                  </span>
                  <span>Performance Optimized</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-primary">
                    <svg
                      className="w-7 h-7 text-[#22d3ee] dark:text-[#22d3ee]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="11"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1"
                      />

                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m6 12 3 3 8-9"
                      />
                    </svg>
                  </span>
                  <span>Accessibility Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="brightness-110 group relative h-[95vh] w-[85vw] lg:h-[34rem] lg:w-[30rem] rounded-2xl border-[1px] border-gray-100/10 transition-all duration-700 ease-in-out backdrop-blur-2xl bg-[rgba(255,255,255,0.03)] flex items-center justify-center hover:border-[#3b82f6] hover:shadow-2xl hover:shadow-blue-500/40">
          <div className="bg-[#111111] h-[88vh] w-[77vw] lg:h-[30rem] lg:w-[26rem] rounded-2xl border-[0.5px] border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-white/5 flex items-center justify-start pl-3.5 gap-3 w-full h-[2.2rem] border-b-[0.5px] border-white/10">
              <div className="bg-red-500 h-3 w-3 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              <div className="bg-amber-400 h-3 w-3 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
              <div className="bg-green-500 h-3 w-3 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            </div>

            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed bg-[#111111] ">
              <div>
                <span className="text-purple-400 ">const</span>{" "}
                <span className="text-blue-400 ">developer</span> = {"{"}
              </div>

              <div className="pl-4">
                <span className="text-white ">name</span>:{" "}
                <span className="text-green-400 ">
                  &apos;Muhammad Faizan&apos;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-white">passion</span>:{" "}
                <span className="text-green-400">
                  &apos;Building delightful digital experiences&apos;
                </span>
                ,
              </div>

              <div className="pl-4">
                <span className="text-white">skills</span>: [
              </div>
              <div className="pl-8 text-green-400">
                &apos;React&apos;,
                <br />
                &apos;Next.js&apos;,
                <br />
                &apos;TypeScript&apos;
                <br />
                &apos;TailwindCSS&apos;
                <br />
                &apos;GSAP&apos;
                <br />
                &apos;Supabase&apos;
              </div>
              <div className="pl-4">],</div>

              <div className="pl-4 mt-2">
                <span className="text-blue-400">buildAwesomeStuff</span>:{" "}
                <span className="text-purple-400">function</span>() {"{"}
              </div>
              <div className="pl-8 text-white">
                <span className="text-purple-400">return</span>{" "}
                <span className="text-green-400">true</span>;
              </div>
              <div className="pl-4">{"}"}</div>

              <div>{"};"}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
