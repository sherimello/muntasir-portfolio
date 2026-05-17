import { motion } from "motion/react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";
import { scrollTo } from "../lib/lenis";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-8",
        isScrolled
          ? "bg-[#F9F7F2]/90 dark:bg-[#121212]/90 backdrop-blur-md shadow-none py-6 border-b border-current/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-baseline justify-between">
        <div className="flex items-center gap-6">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-heading font-black tracking-tighter"
          >
            MUNTASIR <span className="font-normal italic">RAHMAN</span>
          </motion.a>
          <span className="hidden md:block text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mt-1">ACCA Part Qualified</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-[10px] uppercase tracking-[0.2em] font-bold hover:opacity-60 transition-opacity"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-1 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 opacity-60">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#F9F7F2] dark:bg-[#121212] border-t border-current/10 p-8 flex flex-col space-y-6 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollTo(link.href);
              }}
              className="text-lg font-heading italic"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
