"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronRight, Calendar, Tag } from "lucide-react";
import type { Project } from "@/types";
import { useEffect } from "react";

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#f7f4ed] rounded-[24px] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col border border-[#eceae4] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-[#eceae4] bg-white/30 backdrop-blur-md sticky top-0 z-20">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-charcoal tracking-tight" style={{ letterSpacing: "-1px" }}>
                      {project.title}
                    </h3>
                    {project.tags && (
                      <div className="flex gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-[#1c1c1c] text-[#fcfbf8] text-[10px] font-display uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted font-display">
                    {project.period && (
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="opacity-50" />
                        {project.period}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-charcoal/5 transition-colors cursor-pointer text-muted hover:text-charcoal"
                  aria-label="Close modal"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar bg-[#f7f4ed]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {/* Left: Screenshots Column (7/12) */}
                  <div className="lg:col-span-7 space-y-8">
                    <h4 className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-muted mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-[#eceae4]" />
                      Project Gallery
                    </h4>
                    
                    <div className="space-y-10">
                      {(project.screenshots || [project.image]).map((src, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="group relative rounded-2xl overflow-hidden border border-[#eceae4] bg-white p-2 shadow-sm shadow-charcoal/[0.02] hover:shadow-xl hover:shadow-charcoal/[0.04] transition-all duration-500"
                        >
                           <img
                            src={src}
                            alt={`${project.title} gallery item ${i + 1}`}
                            className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Info Column (5/12) */}
                  <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-0 h-fit">
                    {/* Description */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-muted flex items-center gap-2">
                        <span className="w-8 h-px bg-[#eceae4]" />
                        Description
                      </h4>
                      <div className="font-display text-muted leading-relaxed text-lg" style={{ lineHeight: "1.7" }}>
                        {project.description.split('\n\n').map((para, i) => (
                          <p key={i} className={i > 0 ? "mt-4 py-4 px-5 rounded-2xl bg-charcoal/5 border border-charcoal/10 border-dashed text-base italic" : ""}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    {project.highlights && (
                      <div className="space-y-4">
                        <h4 className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-muted flex items-center gap-2">
                          <span className="w-8 h-px bg-[#eceae4]" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-4">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-4 text-muted group">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-charcoal/20 group-hover:bg-charcoal group-hover:scale-125 transition-all flex-shrink-0" />
                              <span className="font-display leading-relaxed text-[17px]">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-muted flex items-center gap-2">
                        <span className="w-8 h-px bg-[#eceae4]" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-4 py-2 rounded-xl border border-[#eceae4] text-sm font-display text-charcoal/80 bg-white shadow-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-8 border-t border-[#eceae4] flex flex-wrap gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base cursor-pointer shadow-xl shadow-charcoal/5 group"
                        >
                          <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] group-hover:scale-110 flex items-center gap-2">
                            <GithubIcon size={20} />
                            <span>Source Code</span>
                          </div>
                        </a>
                      )}
                      <button
                        onClick={onClose}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[#eceae4] text-charcoal font-display text-base hover:bg-charcoal/5 transition-all cursor-pointer bg-white/50"
                      >
                        Close Modal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
