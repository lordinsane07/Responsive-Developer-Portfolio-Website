"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
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
import { Code } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

const contactSocials = [
    { icon: FaGithub, name: "GitHub", url: socialLinks.find((s) => s.name === "GitHub")?.url },
    { icon: FaLinkedin, name: "LinkedIn", url: socialLinks.find((s) => s.name === "LinkedIn")?.url },
    { icon: SiLeetcode, name: "LeetCode", url: socialLinks.find((s) => s.name === "LeetCode")?.url },
    { icon: SiCodeforces, name: "Codeforces", url: socialLinks.find((s) => s.name === "Codeforces")?.url },
    { icon: SiGeeksforgeeks, name: "GFG", url: socialLinks.find((s) => s.name === "GeeksforGeeks")?.url },
    { icon: Code, name: "TakeUforward", url: socialLinks.find((s) => s.name === "TakeUforward")?.url },
    { icon: FaInstagram, name: "Instagram", url: socialLinks.find((s) => s.name === "Instagram")?.url },
    { icon: FaXTwitter, name: "Twitter/X", url: socialLinks.find((s) => s.name === "Twitter")?.url },
];

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="section-padding"
            style={{ position: "relative", overflow: "hidden" }}
        >
            {/* Background gradient */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 20% 80%, var(--accent-cyan-glow), transparent 50%), radial-gradient(circle at 80% 20%, var(--accent-violet-glow), transparent 50%)",
                    pointerEvents: "none",
                    opacity: 0.4,
                }}
            />

            <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1rem",
                    }}
                >
                    <span
                        style={{
                            color: "var(--accent-cyan)",
                            fontFamily: "Syne, sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                        }}
                    >
                        06
                    </span>
                    <div
                        style={{
                            width: 60,
                            height: 1,
                            background:
                                "linear-gradient(90deg, var(--accent-cyan), transparent)",
                        }}
                    />
                    <h2 className="section-heading">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 800,
                        marginBottom: "3rem",
                        maxWidth: 600,
                        lineHeight: 1.2,
                    }}
                >
                    Let&apos;s build something{" "}
                    <span className="text-gradient">amazing</span> together.
                </motion.p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                    }}
                    className="contact-grid"
                >
                    {/* Left: Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.25rem",
                        }}
                    >
                        {[
                            { name: "name", label: "Your Name", type: "text" },
                            { name: "email", label: "Your Email", type: "email" },
                        ].map((field) => (
                            <div key={field.name} style={{ position: "relative" }}>
                                <label
                                    style={{
                                        position: "absolute",
                                        top: focusedField === field.name || formData[field.name as keyof typeof formData] ? 8 : 18,
                                        left: 16,
                                        fontSize: focusedField === field.name || formData[field.name as keyof typeof formData] ? "0.7rem" : "0.9rem",
                                        color:
                                            focusedField === field.name
                                                ? "var(--accent-cyan)"
                                                : "var(--text-muted)",
                                        transition: "all 0.3s ease",
                                        pointerEvents: "none",
                                        fontWeight: 500,
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    required
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={(e) =>
                                        setFormData({ ...formData, [field.name]: e.target.value })
                                    }
                                    onFocus={() => setFocusedField(field.name)}
                                    onBlur={() => setFocusedField(null)}
                                    style={{
                                        width: "100%",
                                        padding: "1.5rem 1rem 0.75rem",
                                        background: "var(--bg-card)",
                                        border: `1px solid ${focusedField === field.name ? "var(--accent-cyan)" : "var(--border-color)"}`,
                                        borderRadius: 12,
                                        color: "var(--text-primary)",
                                        fontSize: "0.95rem",
                                        fontFamily: "Plus Jakarta Sans, sans-serif",
                                        outline: "none",
                                        transition: "all 0.3s ease",
                                        boxShadow:
                                            focusedField === field.name
                                                ? "0 0 20px var(--accent-cyan-glow)"
                                                : "none",
                                    }}
                                />
                            </div>
                        ))}

                        <div style={{ position: "relative" }}>
                            <label
                                style={{
                                    position: "absolute",
                                    top: focusedField === "message" || formData.message ? 8 : 18,
                                    left: 16,
                                    fontSize: focusedField === "message" || formData.message ? "0.7rem" : "0.9rem",
                                    color:
                                        focusedField === "message"
                                            ? "var(--accent-cyan)"
                                            : "var(--text-muted)",
                                    transition: "all 0.3s ease",
                                    pointerEvents: "none",
                                    fontWeight: 500,
                                }}
                            >
                                Your Message
                            </label>
                            <textarea
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                onFocus={() => setFocusedField("message")}
                                onBlur={() => setFocusedField(null)}
                                style={{
                                    width: "100%",
                                    padding: "1.5rem 1rem 0.75rem",
                                    background: "var(--bg-card)",
                                    border: `1px solid ${focusedField === "message" ? "var(--accent-cyan)" : "var(--border-color)"}`,
                                    borderRadius: 12,
                                    color: "var(--text-primary)",
                                    fontSize: "0.95rem",
                                    fontFamily: "Plus Jakarta Sans, sans-serif",
                                    outline: "none",
                                    resize: "vertical",
                                    transition: "all 0.3s ease",
                                    boxShadow:
                                        focusedField === "message"
                                            ? "0 0 20px var(--accent-cyan-glow)"
                                            : "none",
                                }}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary"
                            style={{ padding: "1rem 2rem", fontSize: "1rem", width: "100%" }}
                        >
                            <Send size={18} /> Send Message
                        </motion.button>
                    </motion.form>

                    {/* Right: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                        }}
                    >
                        {/* Email card */}
                        <motion.a
                            href={`mailto:${personalInfo.email}`}
                            whileHover={{ y: -4 }}
                            className="card"
                            style={{
                                padding: "1.5rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 14,
                                    background: "var(--accent-cyan-glow)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--accent-cyan)",
                                    flexShrink: 0,
                                }}
                            >
                                <Mail size={22} />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontSize: "0.78rem",
                                        color: "var(--text-muted)",
                                        marginBottom: "0.15rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                        fontWeight: 600,
                                    }}
                                >
                                    Email
                                </p>
                                <p
                                    style={{
                                        color: "var(--text-primary)",
                                        fontWeight: 600,
                                    }}
                                >
                                    {personalInfo.email}
                                </p>
                            </div>
                        </motion.a>

                        {/* Location card */}
                        <div
                            className="card"
                            style={{
                                padding: "1.5rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 14,
                                    background: "var(--accent-violet-glow)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--accent-violet)",
                                    flexShrink: 0,
                                }}
                            >
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontSize: "0.78rem",
                                        color: "var(--text-muted)",
                                        marginBottom: "0.15rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                        fontWeight: 600,
                                    }}
                                >
                                    Location
                                </p>
                                <p style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                                    {personalInfo.location}
                                </p>
                            </div>
                        </div>

                        {/* Social links */}
                        <div>
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    color: "var(--text-muted)",
                                    marginBottom: "1rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    fontWeight: 600,
                                }}
                            >
                                Find me on
                            </p>
                            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                                {contactSocials.map(({ icon: Icon, name, url }) => (
                                    <motion.a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            scale: 1.1,
                                            y: -4,
                                            boxShadow: "0 8px 25px var(--accent-cyan-glow)",
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 14,
                                            border: "1px solid var(--border-color)",
                                            background: "var(--bg-card)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--text-secondary)",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Resume CTA */}
                        <motion.a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            className="btn-outline"
                            style={{
                                padding: "1rem",
                                justifyContent: "center",
                                fontSize: "0.95rem",
                            }}
                        >
                            Download Resume <ArrowUpRight size={18} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
        </section>
    );
}
