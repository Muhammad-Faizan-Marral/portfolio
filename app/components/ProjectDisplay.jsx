"use client";
import React, { memo } from "react";
import Image from "next/image";

export const ProjectCard = memo(({ project, index }) => {
  return (
    <div
      onClick={() => window.open(project.urlToNavigate, "_blank", "noopener,noreferrer")}
      className={`group relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/5 
                  hover:border-[#22d3ee]/30 transition-all duration-700 cursor-pointer 
                  flex flex-col ${project.featured ? "md:col-span-2" : ""}`}
      style={{ 
        animationDelay: `${index * 80}ms`,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.6)"
      }}
    >
      {/* Image Container */}
      <div className="relative h-[280px] md:h-[320px] overflow-hidden">
        <Image
          fill
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
        
        {/* Color Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/10 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
        
        {/* Subtle Shine */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-1000" />
      </div>

      {/* Content */}
      <div className="flex-1 p-8 flex flex-col">
        <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-3 group-hover:text-[#22d3ee] transition-colors duration-500">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-[15px] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-zinc-400 hover:border-[#22d3ee]/30 hover:text-[#22d3ee] bg-zinc-900/50 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-sm">
          <span className="text-zinc-400 group-hover:text-[#22d3ee] transition-colors duration-300">View Live Project</span>
          
          <div className="w-9 h-9 rounded-2xl border border-white/20 flex items-center justify-center text-white group-hover:bg-[#22d3ee] group-hover:text-black group-hover:border-[#22d3ee] transition-all duration-500">
            ↗
          </div>
        </div>
      </div>

      {/* Premium Corner Accent */}
      <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#22d3ee]/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";