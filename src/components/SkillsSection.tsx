"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Monitor, Server, Database, Hammer, FileCheck, Rocket } from "lucide-react";
import { skillCategories, certifications } from "@/features/portfolio/data";

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 size={18} />,
  "Frontend Development": <Monitor size={18} />,
  "Backend Development": <Server size={18} />,
  Database: <Database size={18} />,
  Tools: <Hammer size={18} />,
  "Currently Learning": <Rocket size={18} />,
};

export default function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section id="skills" className="py-28 px-6 bg-[#f7f4ed]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs font-display text-muted uppercase tracking-widest mb-4">
            Skills & Expertise
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
            What I work with
          </h2>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(28,28,28,0.2)" }}
              className="p-6 rounded-[16px] border border-[#eceae4] group transition-all duration-300 bg-[#f7f4ed] shadow-sm shadow-charcoal/[0.01]"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal bg-[rgba(28,28,28,0.06)] transition-colors duration-300"
                >
                  {categoryIcons[cat.category]}
                </div>
                <h3
                  className="font-display text-charcoal font-medium"
                  style={{ fontSize: "16px" }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ backgroundColor: "rgba(28,28,28,0.12)" }}
                    className="px-3 py-1.5 rounded-full text-xs font-display text-charcoal border border-[#eceae4] transition-all duration-200 bg-[rgba(28,28,28,0.04)] cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-8 bg-[#eceae4]" />
            <h3
              className="font-display text-muted text-sm font-semibold uppercase tracking-widest"
            >
              Certifications
            </h3>
            <div className="h-px w-8 bg-[#eceae4]" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ y: -2, borderColor: "rgba(28,28,28,0.2)" }}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-[#eceae4] bg-[#fcfbf8] shadow-sm shadow-charcoal/[0.01] transition-all duration-300"
              >
                <FileCheck size={16} className="text-charcoal/60" />
                <span className="text-sm font-display text-charcoal font-medium">{cert.name}</span>
                <span
                  className="text-xs font-display opacity-40"
                >
                  {cert.issuer}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
