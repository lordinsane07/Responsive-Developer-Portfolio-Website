"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, GitBranch, GraduationCap, Calendar, ExternalLink, type LucideIcon } from "lucide-react";
import { certifications, achievements, education } from "@/data/portfolio";

const achievementIcons: Record<string, LucideIcon> = {
    trophy: Award,
    shield: Shield,
    gitBranch: GitBranch,
};

export default function Certifications() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="section-padding grain"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <div className="section-container">
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
                        05
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
                        Achievements <span className="text-gradient">&amp; Education</span>
                    </h2>
                </motion.div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.25rem",
                        marginBottom: "3rem",
                    }}
                    className="achievements-grid"
                >
                    {achievements.map((ach, i) => {
                        const Icon = achievementIcons[ach.icon] || Award;
                        return (
                            <motion.div
                                key={ach.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                whileHover={{
                                    y: -6,
                                    boxShadow:
                                        "0 20px 40px rgba(0,0,0,0.15), 0 0 30px var(--accent-cyan-glow)",
                                }}
                                className="card"
                                style={{
                                    padding: "1.75rem",
                                    textAlign: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Glow background */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: -30,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: 100,
                                        height: 100,
                                        borderRadius: "50%",
                                        background:
                                            "radial-gradient(circle, var(--accent-cyan-glow), transparent)",
                                        opacity: 0.5,
                                        pointerEvents: "none",
                                    }}
                                />

                                <div
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 16,
                                        background: "var(--accent-cyan-glow)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 1rem",
                                        color: "var(--accent-cyan)",
                                    }}
                                >
                                    <Icon size={28} />
                                </div>

                                <h3
                                    style={{
                                        fontSize: "1rem",
                                        fontFamily: "Syne, sans-serif",
                                        fontWeight: 700,
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {ach.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.85rem",
                                        color: "var(--text-tertiary)",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {ach.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="card"
                    style={{
                        padding: "2rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                        marginBottom: "3rem",
                    }}

                >
                    <div
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: 16,
                            background: "var(--accent-violet-glow)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--accent-violet)",
                            flexShrink: 0,
                        }}
                    >
                        <GraduationCap size={32} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3
                            style={{
                                fontSize: "1.2rem",
                                fontFamily: "Syne, sans-serif",
                                fontWeight: 700,
                                marginBottom: "0.25rem",
                            }}
                        >
                            {education.degree}
                        </h3>
                        <p
                            style={{
                                color: "var(--accent-cyan)",
                                fontWeight: 600,
                                fontSize: "0.95rem",
                            }}
                        >
                            {education.university} — {education.location}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                gap: "1.5rem",
                                marginTop: "0.5rem",
                                flexWrap: "wrap",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "0.85rem",
                                    color: "var(--text-tertiary)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.3rem",
                                }}
                            >
                                <Calendar size={14} />
                                {education.duration}
                            </span>
                            <span
                                style={{
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                }}
                                className="text-gradient"
                            >
                                CGPA: {education.cgpa}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Certifications */}
                <h3
                    style={{
                        fontSize: "1.3rem",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                        marginBottom: "1.5rem",
                    }}
                >
                    Certifications
                </h3>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "1rem",
                        alignItems: "stretch",
                    }}
                    className="certifications-grid"
                >
                {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 + i * 0.08 }}
                            whileHover={{
                                y: -4,
                                borderColor: "var(--border-glow)",
                            }}
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border-color)",
                                borderRadius: 14,
                                padding: 0,
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {/* Certificate Image */}
                            <div
                                style={{
                                    width: "100%",
                                    height: 140,
                                    overflow: "hidden",
                                    position: "relative",
                                    background: "rgba(255,255,255,0.03)",
                                }}
                            >
                                <img
                                    src={cert.image}
                                    alt={`${cert.title} certificate`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "top center",
                                        opacity: 0.85,
                                        transition: "opacity 0.3s ease, transform 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = "1";
                                        e.currentTarget.style.transform = "scale(1.05)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = "0.85";
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />
                                {/* Gradient overlay */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: 40,
                                        background: "linear-gradient(transparent, var(--bg-card))",
                                        pointerEvents: "none",
                                    }}
                                />
                            </div>

                            {/* Card Content */}
                            <div style={{ padding: "1rem 1.25rem 1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                    <div
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: 9,
                                            background: "var(--accent-violet-glow)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--accent-violet)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Award size={18} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4
                                            style={{
                                                fontSize: "0.88rem",
                                                fontWeight: 700,
                                                marginBottom: "0.15rem",
                                                lineHeight: 1.3,
                                                minHeight: "2.6em",
                                                display: "flex",
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            {cert.title}
                                        </h4>
                                        <p
                                            style={{
                                                fontSize: "0.75rem",
                                                color: "var(--text-tertiary)",
                                                minHeight: "1.5em",
                                            }}
                                        >
                                            {cert.issuer} • {cert.date}
                                        </p>
                                    </div>
                                </div>

                                {/* View Button */}
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-view-btn"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "0.4rem",
                                        marginTop: "auto",
                                        padding: "0.5rem 1rem",
                                        borderRadius: 8,
                                        fontSize: "0.78rem",
                                        fontWeight: 600,
                                        color: "var(--accent-cyan)",
                                        border: "1px solid var(--accent-cyan)",
                                        background: "transparent",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer",
                                        letterSpacing: "0.02em",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "var(--accent-cyan)";
                                        e.currentTarget.style.color = "#0a0f1c";
                                        e.currentTarget.style.boxShadow = "0 0 20px var(--accent-cyan-glow)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "var(--accent-cyan)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <ExternalLink size={14} />
                                    View Certificate
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1024px) {
          .certifications-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .certifications-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
