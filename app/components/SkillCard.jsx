import React, { memo } from "react";

export const SkillCard = memo(({ skill, index }) => {
  return (
    <div
      className="group relative aspect-square rounded-xl bg-zinc-900/20 border border-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 hover:bg-zinc-900/40 overflow-hidden cursor-default">
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 p-4  ">
        <svg
          className={`transform-gpu backface-hidden  w-8 h-8 text-zinc-600 transition-all duration-700 group-hover:scale-125 group-hover:rotate-8 ${skill.color}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ transformOrigin: "center center" }}
        >
          <path d={skill.icon} />
        </svg>
        <span className="text-[10px] font-medium tracking-widest text-zinc-600 uppercase group-hover:text-zinc-300 transition-colors duration-500 text-center">
          {skill.name}
        </span>
      </div>
      {/* Shine Effect */}
      <div className="will-change-transform transform-gpu pointer-events-none absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%]  transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
    </div>
  );
});

SkillCard.displayName = "SkillCard";
