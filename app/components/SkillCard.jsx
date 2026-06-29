import React, { memo } from "react";

export const SkillCard = memo(({ skill, delay }) => {
  return (
    <div
      className="group relative h-28 rounded-2xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm 
                 hover:border-white/10 hover:bg-zinc-900/50 transition-all duration-500 
                 flex items-center justify-center text-center overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-500" />

      <span className="text-zinc-400 group-hover:text-zinc-200 font-light tracking-wide transition-colors duration-300 text-[15px]">
        {skill.name}
      </span>

      {/* Very subtle shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />
    </div>
  );
});

SkillCard.displayName = "SkillCard";