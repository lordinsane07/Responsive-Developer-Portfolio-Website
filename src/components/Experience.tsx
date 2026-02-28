"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="experience"
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
                        03
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
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="section-subheading"
                    style={{ marginBottom: "3rem" }}
                >
                    My professional journey and contributions so far.
                </motion.p>

                {/* Timeline */}
                <div className="experience-timeline-container" style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
                    {/* Timeline line */}
                    <div
                        className="experience-timeline-line"
                        style={{
                            position: "absolute",
                            left: 24,
                            top: 0,
                            bottom: 0,
                            width: 2,
                            background:
                                "linear-gradient(180deg, var(--accent-cyan), var(--accent-violet), transparent)",
                        }}
                    />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                            className="experience-item"
                            style={{
                                position: "relative",
                                paddingLeft: 64,
                                marginBottom: i < experiences.length - 1 ? "3rem" : 0,
                            }}
                        >
                            {/* Timeline dot */}
                            <div
                                className="experience-timeline-dot"
                                style={{
                                    position: "absolute",
                                    left: 14,
                                    top: 8,
                                    width: 22,
                                    height: 22,
                                    borderRadius: "50%",
                                    background: "var(--bg-primary)",
                                    border: "2px solid var(--accent-cyan)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 2,
                                }}
                            >
                                {exp.isActive ? (
                                    <span className="active-dot" style={{ width: 8, height: 8 }} />
                                ) : (
                                    <div
                                        style={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            background: "var(--accent-violet)",
                                        }}
                                    />
                                )}
                            </div>

                            {/* Card */}
                            <motion.div
                                whileHover={{
                                    y: -4,
                                    boxShadow:
                                        "0 20px 40px rgba(0,0,0,0.15), 0 0 30px var(--accent-cyan-glow)",
                                }}
                                className="card"
                                style={{ padding: "1.75rem" }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        gap: "0.5rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <div>
                                        <h3
                                            style={{
                                                fontSize: "1.25rem",
                                                fontFamily: "Syne, sans-serif",
                                                fontWeight: 700,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                            }}
                                        >
                                            {exp.company}
                                            {exp.isActive && (
                                                <span
                                                    style={{
                                                        fontSize: "0.7rem",
                                                        padding: "0.2rem 0.6rem",
                                                        borderRadius: 20,
                                                        background: "rgba(34, 197, 94, 0.15)",
                                                        color: "#22c55e",
                                                        fontWeight: 600,
                                                        fontFamily: "Plus Jakarta Sans, sans-serif",
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: "0.3rem",
                                                    }}
                                                >
                                                    <span className="active-dot" style={{ width: 6, height: 6 }} />
                                                    Active
                                                </span>
                                            )}
                                        </h3>
                                        <p
                                            style={{
                                                color: "var(--accent-cyan)",
                                                fontWeight: 600,
                                                fontSize: "0.9rem",
                                                marginTop: "0.25rem",
                                            }}
                                        >
                                            {exp.role}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.4rem",
                                            color: "var(--text-tertiary)",
                                            fontSize: "0.85rem",
                                            fontWeight: 500,
                                        }}
                                    >
                                        <Briefcase size={14} />
                                        {exp.duration}
                                    </div>
                                </div>

                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.6rem",
                                    }}
                                >
                                    {exp.bullets.map((bullet, j) => (
                                        <li
                                            key={j}
                                            style={{
                                                fontSize: "0.9rem",
                                                color: "var(--text-secondary)",
                                                lineHeight: 1.6,
                                                paddingLeft: "1.25rem",
                                                position: "relative",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: "0.55em",
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: "50%",
                                                    background:
                                                        "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))",
                                                }}
                                            />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx global>{`
        @media (max-width: 768px) {
          .experience-timeline-line {
            left: 10px !important;
          }
          .experience-timeline-dot {
            left: 0px !important;
            width: 18px !important;
            height: 18px !important;
            top: 6px !important;
          }
          .experience-item {
            padding-left: 36px !important;
          }
          .experience-item .card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
        </section>
    );
}
