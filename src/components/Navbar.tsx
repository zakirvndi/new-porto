"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#f7f4ed]/80 backdrop-blur-md border border-[#eceae4] shadow-sm"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="font-display font-semibold transition-colors cursor-pointer"
            style={{ fontSize: "18px", letterSpacing: "-0.5px" }}
          >
            <span className="text-charcoal hover:opacity-80">ZR.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative group text-sm font-display text-muted hover:text-charcoal transition-colors cursor-pointer"
              >
                {link.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-charcoal rounded-full transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="btn-primary px-5 py-2 rounded-full text-xs cursor-pointer"
            >
              Let's talk
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-1 text-muted hover:text-charcoal cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-6 overflow-hidden rounded-2xl border border-[#eceae4] bg-[#f7f4ed] shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-display text-muted hover:text-charcoal transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="w-full py-3 rounded-xl btn-primary text-center font-display cursor-pointer"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
