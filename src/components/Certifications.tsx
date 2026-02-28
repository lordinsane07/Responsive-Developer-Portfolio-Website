"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, GitBranch, GraduationCap, Calendar, type LucideIcon } from "lucide-react";
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
                                padding: "1.25rem 1.5rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                transition: "all 0.3s ease",
                            }}
                        >
                            <div
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    background: "var(--accent-violet-glow)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--accent-violet)",
                                    flexShrink: 0,
                                }}
                            >
                                <Award size={20} />
                            </div>
                            <div>
                                <h4
                                    style={{
                                        fontSize: "0.92rem",
                                        fontWeight: 700,
                                        marginBottom: "0.15rem",
                                    }}
                                >
                                    {cert.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: "0.78rem",
                                        color: "var(--text-tertiary)",
                                    }}
                                >
                                    {cert.issuer} • {cert.date}
                                </p>
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
