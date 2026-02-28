"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        // Set initial theme
        document.documentElement.setAttribute("data-theme", "dark");

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top < 200) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = useCallback(() => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
    }, [theme]);

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setIsMobileOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="glass"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "var(--nav-height)",
                    zIndex: 1000,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: `1px solid ${isScrolled ? "var(--bg-glass-border)" : "transparent"}`,
                    background: isScrolled ? "var(--bg-glass)" : "transparent",
                    backdropFilter: isScrolled ? "blur(20px)" : "none",
                    transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
                }}
            >
                <div
                    style={{
                        maxWidth: 1280,
                        width: "100%",
                        padding: "0 1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollTo("#hero");
                        }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            fontFamily: "Syne, sans-serif",
                            fontWeight: 800,
                            fontSize: "1.4rem",
                            letterSpacing: "-0.03em",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                        }}
                    >
                        <span style={{ color: "var(--accent-cyan)" }}>&lt;</span>
                        <span>lord_insane</span>
                        <span style={{ color: "var(--accent-violet)" }}>/&gt;</span>
                    </motion.a>

                    {/* Desktop Links */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                        }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(link.href);
                                }}
                                whileHover={{ y: -2 }}
                                style={{
                                    padding: "0.5rem 0.9rem",
                                    borderRadius: 8,
                                    fontSize: "0.85rem",
                                    fontWeight: 500,
                                    color:
                                        activeSection === link.href.replace("#", "")
                                            ? "var(--accent-cyan)"
                                            : "var(--text-secondary)",
                                    background:
                                        activeSection === link.href.replace("#", "")
                                            ? "var(--accent-cyan-glow)"
                                            : "transparent",
                                    transition: "all 0.3s ease",
                                    letterSpacing: "0.01em",
                                }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        {/* Theme Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            style={{
                                width: 64,
                                height: 32,
                                borderRadius: 16,
                                border: "1px solid var(--border-color)",
                                background: theme === "dark"
                                    ? "linear-gradient(135deg, #0f1629, #151d35)"
                                    : "linear-gradient(135deg, #e0f2fe, #f5f3ff)",
                                display: "flex",
                                alignItems: "center",
                                padding: "0 4px",
                                cursor: "pointer",
                                position: "relative",
                                transition: "all 0.4s ease",
                                boxShadow: theme === "dark"
                                    ? "0 0 12px rgba(0, 212, 255, 0.15)"
                                    : "0 0 12px rgba(124, 58, 237, 0.15)",
                            }}
                            aria-label="Toggle theme"
                        >
                            <motion.div
                                animate={{ x: theme === "dark" ? 0 : 32 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    background: theme === "dark"
                                        ? "var(--gradient-accent)"
                                        : "linear-gradient(135deg, #fbbf24, #f59e0b)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: theme === "dark"
                                        ? "0 0 10px rgba(0, 212, 255, 0.5)"
                                        : "0 0 10px rgba(251, 191, 36, 0.5)",
                                }}
                            >
                                {theme === "dark" ? (
                                    <Moon size={13} color="#fff" />
                                ) : (
                                    <Sun size={13} color="#fff" />
                                )}
                            </motion.div>
                        </motion.button>

                        {/* Resume Button */}
                        <motion.a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary desktop-nav"
                            style={{ fontSize: "0.82rem", padding: "0.6rem 1.2rem" }}
                        >
                            <Download size={15} /> Resume
                        </motion.a>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="mobile-menu-btn"
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                border: "1px solid var(--border-color)",
                                background: "transparent",
                                color: "var(--text-primary)",
                                display: "none",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="glass"
                        style={{
                            position: "fixed",
                            top: "var(--nav-height)",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 999,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "1.5rem",
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(link.href);
                                }}
                                style={{
                                    fontSize: "1.5rem",
                                    fontFamily: "Syne, sans-serif",
                                    fontWeight: 700,
                                    color:
                                        activeSection === link.href.replace("#", "")
                                            ? "var(--accent-cyan)"
                                            : "var(--text-primary)",
                                }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.08 }}
                            className="btn-primary"
                            style={{ marginTop: "1rem" }}
                        >
                            <Download size={18} /> Download Resume
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
        </>
    );
}
