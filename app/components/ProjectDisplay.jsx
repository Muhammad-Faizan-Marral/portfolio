"use client";
import React, { useState, memo } from "react";
import Image from "next/image";

const ArrowIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export const ProjectCard = memo(({ project }) => {
  return (
    <div
      onClick={() =>
        window.open(project.urlToNavigate, "_blank", "noopener,noreferrer")
      }
      className={`group relative rounded-2xl overflow-hidden bg-zinc-900/20 border border-white/[0.03] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-700 cursor-pointer will-change-transform ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Projects Images */}
      <div className="absolute inset-0">
        <Image
          fill
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 group-hover:via-black/90 transition-all duration-500" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay`}
        />
      </div>
      {/* Skills */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <div className="flex flex-wrap gap-2 mb-4 md:opacity-0 md:-translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase bg-white/10 backdrop-blur-md rounded-full text-white/90 border border-white/20 hover:bg-white/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
          {project.title}
        </h3>

        {/* Description & Action Icon */}
        <div className="flex items-start justify-between gap-4">
          <p className="text-zinc-400 text-sm leading-relaxed md:opacity-0 md:max-h-0 md:group-hover:max-h-24 md:group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            {project.description}
          </p>

          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center 
              md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 
              transition-all duration-500 shadow-lg shadow-blue-500/40`}
          >
            <ArrowIcon />
          </div>
        </div>
      </div>

      {/* Subtle Border Glow Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";
