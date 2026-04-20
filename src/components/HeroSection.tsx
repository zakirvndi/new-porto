"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, ChevronDown } from "lucide-react";
import { profile, socialLinks } from "@/features/portfolio/data";

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

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const icons: Record<string, React.ReactNode> = {
  github: <GithubIcon size={20} />,
  linkedin: <LinkedinIcon size={20} />,
  mail: <Mail size={20} />,
};

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden bg-[#f7f4ed]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: "linear-gradient(135deg, #f7ce68 0%, #fbab7e 100%)" }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: "linear-gradient(135deg, #85ffbd 0%, #fffb7d 100%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#eceae4] bg-white/50 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-charcoal animate-pulse" />
            <span className="text-xs font-display font-medium text-charcoal/80">Available for new projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-charcoal mb-8"
            style={{ 
              fontSize: "clamp(3.5rem, 8vw, 5rem)", 
              fontWeight: 600, 
              lineHeight: 1.05,
              letterSpacing: "-1.5px" 
            }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-display text-muted max-w-xl mb-12 text-lg md:text-xl leading-relaxed"
          >
            I'm {profile.role}. I create high-performance, accessible, and beautifully designed web experiences that help businesses grow.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="group btn-primary px-8 py-4 rounded-[6px] text-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer w-full sm:w-auto"
            >
              View My Work
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn-ghost px-8 py-4 rounded-[6px] text-lg font-medium hover:bg-charcoal/5 transition-all cursor-pointer w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-5"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -5, opacity: 1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-[#eceae4] text-muted hover:text-charcoal hover:border-[rgba(28,28,28,0.2)] transition-all duration-300 cursor-pointer bg-white/20"
              >
                {icons[link.icon]}
              </motion.a>
            ))}
            <div className="h-px w-12 bg-[#eceae4]" />
            <div className="flex items-center gap-2 text-xs font-display text-muted/60 uppercase tracking-widest font-semibold">
              <MapPin size={14} />
              {profile.location}
            </div>
          </motion.div>
        </motion.div>
      </div>

       {/* Scroll indicator */}
       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-display uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
