"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/features/portfolio/data";
import type { Project } from "@/types";
import ProjectModal from "./ProjectModal";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ backgroundColor: "rgba(28,28,28,0.02)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs font-display text-muted uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2
            className="font-display text-charcoal"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-1.2px",
            }}
          >
            Selected Projects
          </h2>
        </motion.div>

        {/* Featured project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => setSelectedProject(featured)}
            className="group mb-8 rounded-[16px] border border-[#eceae4] overflow-hidden hover:border-[rgba(28,28,28,0.3)] hover:shadow-xl hover:shadow-charcoal/[0.03] transition-all duration-500 cursor-pointer bg-[#f7f4ed]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRight: "1px solid #eceae4",
                  height: "320px",
                  minHeight: "280px",
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={featured.image}
                  alt={featured.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Featured badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 text-xs font-display rounded-full flex items-center gap-1.5"
                    style={{
                      backgroundColor: "#1c1c1c",
                      color: "#fcfbf8",
                      boxShadow:
                        "rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between relative">
                {/* GitHub Redirect */}
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-6 right-6 p-2 rounded-full border border-[#eceae4] text-muted hover:text-white hover:bg-charcoal transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:border-transparent group"
                  >
                    <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] group-hover:scale-110">
                      <GithubIcon size={18} />
                    </div>
                  </a>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3
                      className="font-display text-charcoal"
                      style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-1px" }}
                    >
                      {featured.title}
                    </h3>
                    <ArrowUpRight size={20} className="text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  
                  {featured.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-charcoal/5 border border-charcoal/10 text-[10px] font-display font-medium text-muted uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <p
                    className="font-display text-muted mb-6"
                    style={{ fontSize: "15px", lineHeight: "1.7" }}
                  >
                    {featured.description}
                  </p>

                  {/* Highlights */}
                  {featured.highlights && (
                    <ul className="space-y-2 mb-6">
                      {featured.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="flex-shrink-0"
                            style={{ color: "rgba(28,28,28,0.5)" }}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-sm font-display text-muted">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-display rounded-full border border-[#eceae4]"
                      style={{ color: "rgba(28,28,28,0.7)", backgroundColor: "rgba(28,28,28,0.04)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other projects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {rest.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group rounded-[12px] border border-[#eceae4] overflow-hidden hover:border-[rgba(28,28,28,0.2)] hover:shadow-lg hover:shadow-charcoal/[0.02] transition-all duration-300 flex flex-col cursor-pointer bg-[#f7f4ed]"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{
                  height: "192px",
                  borderBottom: "1px solid #eceae4",
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                
                {/* GitHub Overlay */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-[#f7f4ed]/80 backdrop-blur-sm border border-[#eceae4] text-muted hover:text-white hover:bg-charcoal transition-all duration-300 cursor-pointer group"
                  >
                    <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] group-hover:scale-110">
                      <GithubIcon size={16} />
                    </div>
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-charcoal/5 border border-charcoal/10 text-[9px] font-display font-medium text-muted uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="font-display text-charcoal group-hover:text-black transition-colors flex items-center gap-1"
                    style={{ fontSize: "17px", fontWeight: 500, letterSpacing: "-0.3px" }}
                  >
                    {project.title}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </h3>
                  {project.period && (
                    <span
                      className="flex-shrink-0 text-xs font-display"
                      style={{ color: "rgba(28,28,28,0.35)" }}
                    >
                      {project.period}
                    </span>
                  )}
                </div>

                <p
                  className="font-display text-muted mb-4 flex-1"
                  style={{ fontSize: "14px", lineHeight: "1.65" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[10px] font-display uppercase tracking-wider rounded-full border border-[#eceae4]"
                      style={{ color: "rgba(28,28,28,0.6)", backgroundColor: "rgba(28,28,28,0.03)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
