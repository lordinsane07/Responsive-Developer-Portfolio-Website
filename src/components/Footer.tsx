"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";
import { personalInfo, socialLinks, navLinks } from "@/data/portfolio";

const footerSocials = [
    { icon: FaGithub, url: socialLinks.find((s) => s.name === "GitHub")?.url },
    { icon: FaLinkedin, url: socialLinks.find((s) => s.name === "LinkedIn")?.url },
    { icon: FaInstagram, url: socialLinks.find((s) => s.name === "Instagram")?.url },
    { icon: FaXTwitter, url: socialLinks.find((s) => s.name === "Twitter")?.url },
];

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--border-color)",
                padding: "3rem 0 2rem",
            }}
        >
            <div className="section-container">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "2rem",
                        marginBottom: "2rem",
                    }}
                >
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        style={{
                            fontFamily: "Syne, sans-serif",
                            fontWeight: 800,
                            fontSize: "1.3rem",
                        }}
                    >
                        <span style={{ color: "var(--accent-cyan)" }}>&lt;</span>
                        lord_insane
                        <span style={{ color: "var(--accent-violet)" }}>/&gt;</span>
                    </a>

                    {/* Nav Links */}
                    <div
                        style={{
                            display: "flex",
                            gap: "1.5rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector(link.href)
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                style={{
                                    fontSize: "0.85rem",
                                    color: "var(--text-tertiary)",
                                    fontWeight: 500,
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--accent-cyan)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "var(--text-tertiary)")
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        {footerSocials.map(({ icon: Icon, url }, i) => (
                            <motion.a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -2 }}
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 10,
                                    border: "1px solid var(--border-color)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--text-tertiary)",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <Icon size={16} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div
                    style={{
                        borderTop: "1px solid var(--border-color)",
                        paddingTop: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.4rem",
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                    }}
                >
                    <span>Built with</span>
                    <Heart
                        size={14}
                        fill="var(--accent-cyan)"
                        color="var(--accent-cyan)"
                    />
                    <span>
                        by{" "}
                        <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                            {personalInfo.name}
                        </span>
                    </span>
                    <span style={{ margin: "0 0.5rem" }}>•</span>
                    <span>© {new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
}
