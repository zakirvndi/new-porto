"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 px-6 bg-[#f7f4ed] border-t border-[#eceae4]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-display text-muted order-2 md:order-1"
        >
          © {new Date().getFullYear()} Muhammad Zaki Revandi.
          <span className="block md:inline md:ml-2 opacity-50">All rights reserved.</span>
        </motion.p>

        {/* Back to top */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, backgroundColor: "rgba(28,28,28,0.05)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="order-1 md:order-2 flex items-center gap-2 px-5 py-3 rounded-full border border-[#eceae4] text-charcoal font-display text-sm hover:border-charcoal/20 transition-all cursor-pointer group"
        >
          Back to top
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </footer>
  );
}
