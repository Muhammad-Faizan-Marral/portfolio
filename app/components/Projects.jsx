"use client";
import React, { useState } from "react";
import SVGComponent from "./assets/SVGComponent";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "FinTech Analytics Dashboard",
      description:
        "A comprehensive financial data visualization platform with real-time analytics, interactive charts, and advanced reporting features for enterprise clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      skills: ["React", "TypeScript", "D3.js", "Tailwind"],
      featured: true,
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      id: 2,
      title: "Connect Social App",
      description:
        "Modern social networking platform with real-time chat, stories, and seamless user experience across devices.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      skills: ["React Native", "Node.js", "MongoDB"],
      gradient: "from-purple-600/20 to-pink-600/20",
    },
    {
      id: 3,
      title: "Luxe Commerce",
      description:
        "High-end fashion e-commerce platform with elegant design, smooth checkout flow, and integrated payment processing.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      skills: ["Next.js", "Stripe", "Tailwind"],
      gradient: "from-amber-600/20 to-orange-600/20",
    },
    {
      id: 4,
      title: "Immersive 3D Portfolio",
      description:
        "Award-winning interactive 3D experience featuring smooth animations, particle effects, and immersive storytelling for a creative agency.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
      skills: ["Three.js", "GSAP", "WebGL", "React"],
      featured: true,
      gradient: "from-emerald-600/20 to-teal-600/20",
    },
    {
      id: 5,
      title: "AI Content Studio",
      description:
        "Intelligent content creation platform with AI-powered writing assistance and real-time collaboration features.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      skills: ["Next.js", "OpenAI", "Redux", "Tailwind"],
      gradient: "from-violet-600/20 to-purple-600/20",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description:
        "Comprehensive fitness companion with workout plans, nutrition tracking, and progress analytics.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      skills: ["React", "Firebase", "Chart.js"],
      gradient: "from-red-600/20 to-pink-600/20",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="relative py-32  overflow-hidden" id="projects">
   
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[420px] ">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden bg-zinc-900/20 border border-white/[0.03] backdrop-blur-sm hover:border-blue-500/30 transition-all duration-700 cursor-pointer ${
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/90 transition-all duration-500`}
                />
                {/* Color Accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay`}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4 sm:opacity-100 md:opacity-0 -translate-y-4 md:group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-[10px] font-medium tracking-wider uppercase bg-white/10 backdrop-blur-md rounded-full text-white/90 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                      style={{
                        transitionDelay: `${i * 50}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <div className="flex items-start justify-between sm:gap-0  md:gap-4">
                  <p className="text-zinc-400 text-sm leading-relaxed   sm:opacity-100  md:opacity-0  md:group-hover:max-h-24 md:group-hover:opacity-100 transition-all duration-500 md:overflow-hidden">
                    {project.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-blue-500/20 flex items-center justify-center sm:opacity-100 md:opacity-0 translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 bg-blue-500 md:group-hover:bg-blue-500 transition-all duration-500">
                    <span className="material-symbols-outlined text-white text-xl">
                      <SVGComponent />
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle Border Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className=" cursor-pointer inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-emerald-500 transition-colors duration-300"
          >
            {showAll ? "Show Less" : "View All Projects"}
          
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
    </section>
  );
};

export default Projects;
