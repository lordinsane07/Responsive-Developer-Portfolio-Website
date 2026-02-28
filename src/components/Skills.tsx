"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="section-padding"
            style={{ position: "relative" }}
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
                        02
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
                        Tech <span className="text-gradient">Stack</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="section-subheading"
                    style={{ marginBottom: "3rem" }}
                >
                    Technologies I work with to build full-stack products and ML systems.
                </motion.p>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "2.5rem",
                    }}
                >
                    {skillCategories.map((cat, i) => (
                        <motion.button
                            key={cat.category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(i)}
                            style={{
                                padding: "0.6rem 1.25rem",
                                borderRadius: 10,
                                border: `1px solid ${activeCategory === i ? "var(--accent-cyan)" : "var(--border-color)"}`,
                                background:
                                    activeCategory === i
                                        ? "var(--accent-cyan-glow)"
                                        : "transparent",
                                color:
                                    activeCategory === i
                                        ? "var(--accent-cyan)"
                                        : "var(--text-secondary)",
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {cat.category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                    }}
                >
                    {skillCategories[activeCategory].skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                            whileHover={{
                                scale: 1.1,
                                y: -4,
                                boxShadow: "0 8px 30px var(--accent-cyan-glow)",
                            }}
                            className="magnetic-hover"
                            style={{
                                padding: "0.8rem 1.5rem",
                                borderRadius: 12,
                                border: "1px solid var(--border-color)",
                                background: "var(--bg-card)",
                                color: "var(--text-primary)",
                                fontSize: "0.92rem",
                                fontWeight: 600,
                                cursor: "default",
                                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            {skill.name}
                        </motion.div>
                    ))}
                </motion.div>

                {/* All Skills Preview (show all categories below as smaller pills) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    style={{ marginTop: "3rem" }}
                >
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
                        Full Toolkit
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.4rem",
                        }}
                    >
                        {skillCategories.flatMap((cat) =>
                            cat.skills.map((skill) => (
                                <span
                                    key={`all-${skill.name}`}
                                    style={{
                                        padding: "0.35rem 0.8rem",
                                        borderRadius: 8,
                                        border: "1px solid var(--border-color)",
                                        fontSize: "0.72rem",
                                        color: "var(--text-tertiary)",
                                        fontWeight: 500,
                                        opacity: 0.7,
                                    }}
                                >
                                    {skill.name}
                                </span>
                            ))
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
