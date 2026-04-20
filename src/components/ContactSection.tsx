"use client";

import { motion, Variants } from "framer-motion";
import { Mail } from "lucide-react";
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

export default function ContactSection() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#f7f4ed]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block text-xs font-display text-muted uppercase tracking-widest mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-display text-charcoal mb-8"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            Let's build something<br />exceptional together.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-display text-muted max-w-xl mx-auto mb-12 text-lg leading-relaxed"
          >
            I'm currently looking for new opportunities as a Software Engineer.
            Whether you have a question or just want to say hi, my inbox is always open!
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center gap-6"
          >
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-display text-lg font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xl shadow-charcoal/10"
            >
              <Mail size={20} />
              {profile.email}
            </a>

            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, borderColor: "rgba(28,28,28,0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-[#eceae4] text-muted hover:text-charcoal hover:border-[rgba(28,28,28,0.4)] transition-all duration-300 cursor-pointer bg-white/10"
                >
                  {icons[link.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
