"use client";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectDisplay";
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      description:
        "A modern e-commerce platform with authentication, product browsing, pagination, wishlist, and cart system. Focused on smooth UX and optimized state management.",
      image: "/ecommerce.png",
      skills: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "TanStack Query",
        "TailwindCSS",
      ],
      featured: true,
      gradient: "from-blue-600/20 to-cyan-600/20",
      urlToNavigate:"https://nextjs-fakeapi-ecommerce-uhl2.vercel.app/dashboard",
    },
    {
      id: 2,
      title: "GenUI – AI SaaS UI Generator",
      description:
        "A SaaS platform that generates UI from user prompts and deploys it instantly with shareable live URLs. Integrated AI APIs and Supabase for backend.",
      image: "/genui.png",
      skills: ["Next.js", "JavaScript", "Supabase", "TailwindCSS"],

      gradient: "from-violet-600/20 to-purple-600/20",
      urlToNavigate: "https://gen-p7b3slpk8-faizans-projects-89f12db9.vercel.app/",
    },
    {
      id: 3,
      title: "Interactive Website Clone (K72)",
      description:
        "A high-end interactive website clone focused on smooth animations and modern UI/UX using GSAP.",
      image: "/k72.png",
      skills: ["React", "GSAP", "Vite", "TailwindCSS"],
      gradient: "from-purple-600/20 to-pink-600/20",
      urlToNavigate: "https://effulgent-donut-7d78fe.netlify.app/",
    },
    {
      id: 4,
      title: "GitHub Wrapped",
      description:
        "A GitHub insights web app that visualizes user activity and repositories with a clean and responsive interface.",
      image: "/git.png",
      skills: ["React", "TailwindCSS"],
      featured: true,
      gradient: "from-emerald-600/20 to-teal-600/20",
      urlToNavigate: "https://githubwrapped-lyart.vercel.app/",
    },
    {
      id: 5,
      title: "PixelMind AI",
      description:
        "An AI-powered web application for object detection, emotion detection, and image analysis using integrated models.",
      image: "/pixelmidndai.png",
      skills: ["Next.js", "TailwindCSS"],
      gradient: "from-violet-600/20 to-purple-600/20",
      urlToNavigate: "https://pixel-mind-ai-two.vercel.app/",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="relative py-32 bg-[#050505]" id="projects">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center  mb-4">
              <span className="text-[#3b82f6] font-mono text-[19px] uppercase">
                Selected Works
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-tight -mt-2">
              Featured{" "}
              <span className="font-medium bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="group hidden md:flex items-center gap-2 text-zinc-500 hover:text-[#3b82f6] cursor-pointer transition-all duration-300 text-sm font-medium tracking-wide"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[420px]">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-white border-b border-white/20 pb-1"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
