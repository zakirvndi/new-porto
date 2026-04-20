"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/features/portfolio/data";

export default function ExperienceSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-display text-muted uppercase tracking-widest mb-4">
            Journey
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
            Work Experience
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-px before:bg-[#eceae4]"
        >
          {experiences.map((exp) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              variants={itemVariants}
              className="relative pl-12 group"
            >
              {/* Timeline Dot */}
              <div 
                className="absolute left-0 top-1.5 w-9 h-9 rounded-full border border-[#eceae4] bg-[#f7f4ed] flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-[#1c1c1c] group-hover:text-[#fcfbf8] group-hover:scale-110"
              >
                <Briefcase size={16} />
              </div>

              <div className="p-6 rounded-[16px] border border-[#eceae4] transition-all duration-300 bg-[#f7f4ed] hover:shadow-lg hover:shadow-charcoal/[0.02] hover:border-[rgba(28,28,28,0.2)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="font-display text-charcoal"
                      style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.3px" }}
                    >
                      {exp.title}
                    </h3>
                    <p className="font-display text-charcoal/70">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-display text-muted">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted font-display leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-charcoal/30 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
