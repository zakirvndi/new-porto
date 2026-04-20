"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap, Database, Layers, Maximize, Brain, Sparkles } from "lucide-react";
import { profile, education } from "@/features/portfolio/data";

interface Strength {
  title: string;
  icon: React.ReactNode;
}

const strengths: Strength[] = [
  { title: "CQRS Architecture & Clean Backend Design", icon: <Database size={16} /> },
  { title: "Full Stack Development (Frontend & Backend)", icon: <Layers size={16} /> },
  { title: "Scalable System Design Mindset", icon: <Maximize size={16} /> },
  { title: "Problem Solving & Analytical Thinking", icon: <Brain size={16} /> },
  { title: "Leveraging AI for Code Quality & Development Efficiency", icon: <Sparkles size={16} /> },
];

function StrengthItem({ title, icon }: Strength) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-[#eceae4]/50 last:border-0 group transition-colors">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-charcoal/5 group-hover:bg-charcoal group-hover:text-off-white transition-all duration-300">
        {icon}
      </div>
      <span className="font-display text-sm text-muted group-hover:text-charcoal transition-colors">
        {title}
      </span>
    </div>
  );
}

export default function AboutSection() {
  const paragraphs = profile.summary.split("\n\n");

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
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="py-28 px-6 bg-[#f7f4ed]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-xs font-display text-muted uppercase tracking-widest mb-4"
            >
              Professional Profile
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="font-display text-charcoal mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-1.2px",
              }}
            >
              Building systems that<br />solve complex problems.
            </motion.h2>

            <div className="space-y-6">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="font-display text-muted leading-relaxed max-w-xl"
                  style={{ fontSize: "17px", lineHeight: "1.8" }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Education card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(28,28,28,0.2)" }}
              className="p-8 rounded-[24px] border border-[#eceae4] transition-all duration-300 bg-white/40 shadow-sm shadow-charcoal/[0.02]"
            >
              <div className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-charcoal text-off-white shadow-lg shadow-charcoal/10"
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-display text-muted uppercase tracking-[0.2em] mb-2 font-bold">Academic Background</p>
                  <h3
                    className="font-display text-charcoal mb-1"
                    style={{ fontSize: "19px", fontWeight: 600 }}
                  >
                    {education.school}
                  </h3>
                  <p className="text-base font-display text-muted leading-tight">{education.degree}</p>
                  <p className="text-sm font-display text-muted/70 mt-1">{education.faculty}</p>
                  <div className="mt-4 inline-block px-3 py-1 rounded-full bg-charcoal/5 border border-charcoal/10 text-[11px] font-display text-muted uppercase tracking-wider">
                    {education.period}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Strengths Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(28,28,28,0.2)" }}
              className="p-8 rounded-[24px] border border-[#eceae4] transition-all duration-300 bg-white/40 shadow-sm shadow-charcoal/[0.02]"
            >
              <p className="text-[10px] font-display text-muted uppercase tracking-[0.2em] mb-6 font-bold">Core Strengths</p>
              <div className="space-y-1">
                {strengths.map((s) => (
                  <StrengthItem key={s.title} {...s} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
