import React, { useState, useEffect } from 'react';

// --- UI Components ---
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Dev.IO
      </span>
      <div className="space-x-8 text-slate-300 text-sm font-medium">
        <a href="#home" className="hover:text-cyan-400 transition">Home</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition">
          Resume
        </button>
      </div>
    </div>
  </nav>
);

const ProjectCard = ({ title, desc, tech }) => (
  <div className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
    <div className="h-2 w-12 bg-cyan-500 rounded mb-4 group-hover:w-full transition-all duration-500"></div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-slate-900 text-cyan-400 rounded border border-slate-700">
          {t}
        </span>
      ))}
    </div>
  </div>
);

// --- Main Application ---
export default function App() {
  const projects = [
    { title: "Neural Dashboard", desc: "Real-time AI monitoring system with predictive analytics.", tech: ["React", "TensorFlow", "Tailwind"] },
    { title: "Echo Commerce", desc: "Full-stack marketplace with stripe integration and headless CMS.", tech: ["Next.js", "Prisma", "PostgreSQL"] },
    { title: "Skyline API", desc: "High-throughput weather data aggregator built for scale.", tech: ["Node.js", "Redis", "AWS"] },
  ];

  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-cyan-500/30">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section id="home" className="py-20">
          <div className="max-w-3xl">
            <h2 className="text-cyan-400 font-mono mb-4">{"<h1>"} Hello World {"</h1>"}</h2>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight">
              Building the <span className="text-slate-500 italic">digital</span> future.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              I'm a Full-stack Engineer specializing in building (and occasionally designing) 
              exceptional digital experiences that are fast, accessible, and visually stunning.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-cyan-400 transition-colors">
                View My Work
              </a>
              <button className="px-8 py-4 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition">
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <div className="h-[1px] flex-1 bg-slate-800"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Built with React & Tailwind. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
