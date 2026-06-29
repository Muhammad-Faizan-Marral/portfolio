"use client";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectDisplay";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Volox – Real-Time Chat Infrastructure",
      description:
        "A production-grade instant messaging architecture featuring bidirectional WebSocket channels. Engineerd global and persistent private rooms, instantaneous media handshakes via Cloudinary, and low-latency dynamic user-typing streams.",
      image: "/voloz.png",
      skills: [
        "React",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Cloudinary",
        "TailwindCSS",
      ],
      featured: true,
      urlToNavigate: "https://bvolox.vercel.app/",
    },
    {
      id: 2,
      title: "Flow Finance AI – Financial Analytics SaaS",
      description:
        "An AI-powered capital tracking dashboard connected to a PostgreSQL database via Prisma ORM. Features granular CRUD transaction ledgers, deep data visualization widgets using Recharts, and a secure server-side LLM chat integration for predictive budget insights.",
      image: "/expense.png",
      skills: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM",
        "Recharts",
        "OpenRoute API",
      ],
      featured: true,
      urlToNavigate: "https://expense-tracker-gamma-lyart-12.vercel.app/",
    },
    {
      id: 3,
      title: "SoundWave – Advanced Audio Streaming Protocol",
      description:
        "A dual-portal music streaming application balancing distinct workflows for Listeners and verified Artists. Engineered a custom algorithmic background script that precisely registers and updates streaming metrics only upon 1/3rd of verified track playback.",
      image: "/wavenet.png",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Cloudinary",
        "React Router",
        "TailwindCSS",
      ],
      featured: true,
      urlToNavigate: "https://wavenet-peach.vercel.app/",
    },
    {
      id: 4,
      title: "Enterprise E-Commerce Architecture",
      description:
        "A high-performance online digital storefront optimized through server-side rendering pipelines. Built complex global client state patterns, secure product browsing pagination, and asynchronous cart sync mechanics utilizing Redux Toolkit and TanStack Query.",
      image: "/ecommerce.png",
      skills: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "TanStack Query",
        "TailwindCSS",
      ],
      featured: true,
      urlToNavigate:
        "https://nextjs-fakeapi-ecommerce-uhl2.vercel.app/dashboard",
    },
    {
      id: 5,
      title: "PixelMind AI – Deep Vision Application",
      description:
        "An interactive computer vision platform streaming responses from localized neural models. Architected custom client-side integration endpoints for frame-by-frame object classification, real-time facial emotion recognition, and structural image metadata analytics.",
      image: "/pp.png",
      skills: [
        "Next.js",
        "TailwindCSS",
        "Computer Vision Models",
        "Client Architecture",
      ],
      featured: false,
      urlToNavigate: "https://pixel-mind-ai-two.vercel.app/",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="relative py-28 bg-[#050505]" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
          <div>
            <span className="font-mono text-xs tracking-[3px] text-zinc-500">
              PORTFOLIO
            </span>
            <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter mt-2">
              Selected Works
            </h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
          >
            {showAll ? "Show Less" : "View All"}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[480px]">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
