"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";
import {
    SiLeetcode,
    SiCodeforces,
    SiGeeksforgeeks,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { Code } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
    ssr: false,
});

const heroSocials = [
    { icon: FaGithub, url: socialLinks.find((s) => s.name === "GitHub")?.url, label: "GitHub" },
    { icon: FaLinkedin, url: socialLinks.find((s) => s.name === "LinkedIn")?.url, label: "LinkedIn" },
    { icon: SiLeetcode, url: socialLinks.find((s) => s.name === "LeetCode")?.url, label: "LeetCode" },
    { icon: SiCodeforces, url: socialLinks.find((s) => s.name === "Codeforces")?.url, label: "Codeforces" },
    { icon: SiGeeksforgeeks, url: socialLinks.find((s) => s.name === "GeeksforGeeks")?.url, label: "GFG" },
    { icon: Code, url: socialLinks.find((s) => s.name === "TakeUforward")?.url, label: "TakeUforward" },
    { icon: FaInstagram, url: socialLinks.find((s) => s.name === "Instagram")?.url, label: "Instagram" },
    { icon: FaXTwitter, url: socialLinks.find((s) => s.name === "Twitter")?.url, label: "Twitter" },
    { icon: HiOutlineMail, url: socialLinks.find((s) => s.name === "Email")?.url, label: "Email" },
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typeSpeed = useRef(80);

    // Typewriter effect
    useEffect(() => {
        const currentRole = personalInfo.roles[roleIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setDisplayedText(currentRole.substring(0, displayedText.length + 1));
                    if (displayedText.length + 1 === currentRole.length) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    setDisplayedText(currentRole.substring(0, displayedText.length - 1));
                    if (displayedText.length === 0) {
                        setIsDeleting(false);
                        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
                    }
                }
            },
            isDeleting ? 40 : typeSpeed.current
        );

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, roleIndex]);

    const nameChars = personalInfo.name.split("");

    return (
        <section
            id="hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <ThreeBackground />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center",
                    padding: "0 1.5rem",
                    maxWidth: 900,
                }}
            >
                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        fontSize: "clamp(0.85rem, 2vw, 1rem)",
                        color: "var(--text-tertiary)",
                        marginBottom: "1rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                    }}
                >
                    <MapPin
                        size={14}
                        style={{
                            display: "inline",
                            marginRight: 6,
                            color: "var(--accent-cyan)",
                        }}
                    />
                    {personalInfo.location}
                </motion.p>

                {/* Name - character by character */}
                <h1
                    style={{
                        fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 800,
                        lineHeight: 1,
                        marginBottom: "1.5rem",
                        letterSpacing: "-0.04em",
                    }}
                >
                    {nameChars.map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 50, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5 + i * 0.04,
                                ease: [0.23, 1, 0.32, 1],
                            }}
                            style={{
                                display: "inline-block",
                                ...(char === " " ? { width: "0.3em" } : {}),
                            }}
                            className={i < personalInfo.firstName.length ? "text-gradient" : ""}
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>

                {/* Typewriter Role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{
                        fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
                        color: "var(--text-secondary)",
                        marginBottom: "2rem",
                        minHeight: "2.5rem",
                        fontWeight: 500,
                    }}
                >
                    <span style={{ color: "var(--accent-cyan)", marginRight: 8 }}>
                        {"//"}
                    </span>
                    {displayedText}
                    <span className="typewriter-cursor" />
                </motion.div>

                {/* Bio Preview */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    style={{
                        fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                        color: "var(--text-tertiary)",
                        maxWidth: 600,
                        margin: "0 auto 2.5rem",
                        lineHeight: 1.7,
                    }}
                >
                    Building end-to-end products — from pixel-perfect apps to intelligent ML systems.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "0.75rem",
                        marginBottom: "3rem",
                        flexWrap: "wrap",
                    }}
                >
                    {heroSocials.map(({ icon: Icon, url, label }, i) => (
                        <motion.a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={label}
                            whileHover={{
                                scale: 1.2,
                                y: -4,
                                boxShadow: "0 0 25px var(--accent-cyan-glow)",
                            }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: 12,
                                border: "1px solid var(--border-color)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--text-secondary)",
                                transition: "color 0.3s, border-color 0.3s",
                                background: "var(--bg-card)",
                            }}
                        >
                            <Icon size={18} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href="#projects"
                        className="btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="btn-outline"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Let&apos;s Connect
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                style={{
                    position: "absolute",
                    bottom: 40,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--text-muted)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                }}
            >
                <span>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={18} />
                </motion.div>
            </motion.div>
        </section>
    );
}
