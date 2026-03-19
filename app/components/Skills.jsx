
import React from "react";
import { SkillCard } from "./SkillCard";

const skills = [
  {
    name: "HTML5",
    icon: "M12 2L2 5l1.5 14 8.5 3 8.5 3L22 5z",
    color: "group-hover:text-orange-500",
  },
  {
    name: "CSS3",
    icon: "M20 5L18.5 19l-6.5 2.5L5.5 19 4 5z",
    color: "group-hover:text-blue-500",
  },
  {
    name: "Tailwind",
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z M6 16c0-3.31 2.69-6 6-6s6 2.69 6 6",
    color: "group-hover:text-sky-400",
  },
  {
    name: "JavaScript",
    icon: "M3 3h18v18H3V3zm11.5 11h-1.5v2h1.5v-2zm-3-4h-1.5v6H10v-6H8.5V8.5h3V10z",
    color: "group-hover:text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: "M3 3h18v18H3V3zm7.5 10.5h3v1.5h-3v-1.5zm0-3h3v1.5h-3V10.5zm0-3h3V9h-3V7.5z",
    color: "group-hover:text-blue-400",
  },
  {
    name: "React",
    icon: "M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-1.5c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z",
    color: "group-hover:text-cyan-400",
  },
  {
    name: "Next.js",
    icon: "M12 2L2 19.778h20L12 2zm0 4.5l6.5 11.278H5.5L12 6.5z",
    color: "group-hover:text-white",
  },
  {
    name: "Redux",
    icon: "M16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.07c-.62.35-1 1.02-1 1.79 0 1.1.9 2 2 2s2-.9 2-2c0-.77-.38-1.44-1-1.79V8.14c1.72.45 3 2 3 3.86z",
    color: "group-hover:text-purple-500",
  },
  {
    name: "GSAP",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z",
    color: "group-hover:text-green-500",
  },
  {
    name: "Git",
    icon: "M21 3h-8l-2-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    color: "group-hover:text-orange-600",
  },
  {
    name: "GitHub",
    icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z",
    color: "group-hover:text-gray-300",
  },
  {
    name: "REST API",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    color: "group-hover:text-indigo-500",
  },
  {
    name: "Vite",
    icon: "M8 3l4 7-4 7-4-7 4-7zm8 0l4 7-4 7-4-7 4-7z",
    color: "group-hover:text-purple-400",
  },
  {
    name: "Responsive",
    icon: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z",
    color: "group-hover:text-teal-400",
  },
  {
    name: "Framer",
    icon: "M12 2L4 9v12l8 3 8-3V9l-8-7zm0 2.18L17.82 9 12 12.82 6.18 9 12 4.18z",
    color: "group-hover:text-pink-500",
  },
  {
    name: "Node.js",
    icon: "M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7.5 3.75v7.5L12 19.5l-7.5-3.75v-7.5L12 4.5z",
    color: "group-hover:text-green-600",
  },
];

const Skills = () => {
  return (
    <section
      className=" relative py-12  bg-[#050505] overflow-hidden border-t-[0.5px] border-b-[0.5px] border-[#1c1c1c] brightness-110"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#3b82f6] font-mono text-[19px] uppercase">
              My Toolbox
            </span>
          </div>
          <h2 className="text-4xl font-semibold  md:text-5xl lg:text-6xl  text-white tracking-tight leading-tight -mt-3.5">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
