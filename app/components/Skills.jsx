"use client";
import React, { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5", "CSS3", "JavaScript", "TypeScript",
      "React.js", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion",
    ],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST API", "Socket.io", "JWT Auth"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Supabase"],
  },
  {
    title: "State Management",
    skills: ["Redux Toolkit", "TanStack Query", "Zustand"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Vercel", "Railway"],
  },
  {
    title: "AI & Others",
    skills: ["Prompt Engineering", "AI Integration", "Cloudinary"],
  },
];

const totalSkills = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

const SkillRow = ({ category, index }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className="skill-row group"
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 70}ms, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 70}ms`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-12 py-10 border-b border-white/5 last:border-none items-start">
        {/* Category */}
        <div className="flex-shrink-0">
          <span
            className="inline-block font-mono text-xs tracking-[3px] uppercase text-zinc-500 mb-1"
          >
            {category.title}
          </span>
          <div className="h-px w-12 bg-gradient-to-r from-white/30 to-transparent mt-3" />
        </div>

        {/* Skills */}
        <div className="text-[21px] md:text-[23px] leading-tight font-light tracking-[-0.4px] text-zinc-400">
          {category.skills.map((skill, i) => (
            <React.Fragment key={skill}>
              <span
                className="skill-word inline-block transition-all duration-300 hover:text-white hover:-translate-y-0.5 cursor-default"
                onMouseEnter={(e) => {
                  e.target.style.color = "#ffffff";
                  e.target.style.textShadow = "0 0 20px rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#e4e4e7";
                  e.target.style.textShadow = "none";
                }}
              >
                {skill}
              </span>
              {i < category.skills.length - 1 && (
                <span className="text-zinc-700 mx-4 text-lg">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative bg-[#050505] py-24 md:py-32 border-y border-white/5 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div
        ref={containerRef}
        className="max-w-[1180px] mx-auto px-6 md:px-8 lg:px-12"
      >
        {/* Header */}
        <div
          ref={headerRef}
          className="opacity-0 translate-y-6 transition-all duration-700"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-white/30" />
            <span className="font-mono text-xs tracking-[4px] text-zinc-500 uppercase">Expertise</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[68px] font-semibold text-white tracking-[-2.5px] leading-[1.05] mt-6">
            Technical<br />Skills
          </h2>

          <p className="mt-6 font-mono text-sm text-zinc-500 tracking-widest">
            {totalSkills} TECHNOLOGIES — {skillCategories.length} DOMAINS
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

        {/* Skill Rows */}
        <div className="space-y-1">
          {skillCategories.map((category, index) => (
            <SkillRow key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Footer Accent */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-20 pt-10 border-t border-white/5 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span>Currently exploring</span>
            <div className="px-3 py-1 rounded-full border border-white/10 text-white/80 text-[10px] tracking-widest">THREE.JS</div>
            <div className="px-3 py-1 rounded-full border border-white/10 text-white/80 text-[10px] tracking-widest">DOCKER</div>
          </div>
          
          <div className="text-right">
            Updated June 2026
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;