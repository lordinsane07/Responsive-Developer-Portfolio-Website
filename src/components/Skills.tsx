"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

// React Icons Imports
import {
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiDart,
    SiC,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiSocketdotio,
    SiFlutter,
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiPandas,
    SiNumpy,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiFirebase,
    SiDocker,
    SiGit,
    SiPostman,
    SiJupyter,
    SiCloudinary,
} from "react-icons/si";
import { TbBrain, TbChartBar } from "react-icons/tb";

// Map skill names to icons
const skillIconMap: Record<string, React.ReactNode> = {
    "C++": <SiCplusplus size={20} />,
    "JavaScript": <SiJavascript size={20} />,
    "TypeScript": <SiTypescript size={20} />,
    "Python": <SiPython size={20} />,
    "Dart": <SiDart size={20} />,
    "C": <SiC size={20} />,
    "React.js": <SiReact size={20} />,
    "Next.js": <SiNextdotjs size={20} />,
    "Tailwind CSS": <SiTailwindcss size={20} />,
    "Node.js": <SiNodedotjs size={20} />,
    "Express.js": <SiExpress size={20} />,
    "Socket.io": <SiSocketdotio size={20} />,
    "Flutter": <SiFlutter size={20} />,
    "TensorFlow": <SiTensorflow size={20} />,
    "PyTorch": <SiPytorch size={20} />,
    "Scikit-Learn": <SiScikitlearn size={20} />,
    "Pandas": <SiPandas size={20} />,
    "NumPy": <SiNumpy size={20} />,
    "MongoDB": <SiMongodb size={20} />,
    "PostgreSQL": <SiPostgresql size={20} />,
    "MySQL": <SiMysql size={20} />,
    "Firebase": <SiFirebase size={20} />,
    "Docker": <SiDocker size={20} />,
    "Git": <SiGit size={20} />,
    "Postman": <SiPostman size={20} />,
    "Jupyter Notebook": <SiJupyter size={20} />,
    "Cloudinary": <SiCloudinary size={20} />,
    "XGBoost": <TbBrain size={20} />,
    "SHAP": <TbBrain size={20} />,
    "SMOTE": <TbBrain size={20} />,
    "Power BI": <TbChartBar size={20} />,
};

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Collect all skills for the marquee
    const allSkills = skillCategories.flatMap((cat) => cat.skills);
    // Duplicate the array to create a seamless infinite marquee effect
    const duplicatedSkills = [...allSkills, ...allSkills];

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="section-padding overflow-hidden"
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

                {/* Active Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                        marginBottom: "4rem",
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
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                padding: "0.8rem 1.5rem",
                                borderRadius: 12,
                                border: "1px solid var(--border-color)",
                                background: "var(--bg-card)",
                                color: "var(--text-primary)",
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                cursor: "default",
                                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <span style={{ color: "var(--accent-cyan)" }}>
                                {skillIconMap[skill.name]}
                            </span>
                            {skill.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Premium Full Toolkit Marquee Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "2rem",
                }}
            >
                <p
                    style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        marginBottom: "2rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        fontWeight: 600,
                        textAlign: "center",
                    }}
                >
                    <span style={{ opacity: 0.5 }}>///</span> Full Toolkit <span style={{ opacity: 0.5 }}>///</span>
                </p>

                {/* Marquee Container */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        // Fading out edges for a sleek look
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 35, // slow and smooth
                                ease: "linear",
                            },
                        }}
                        style={{
                            display: "flex",
                            gap: "1.5rem",
                            paddingLeft: "1.5rem",
                            width: "max-content",
                        }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <div
                                key={`${skill.name}-${index}`}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    padding: "0.6rem 1.25rem",
                                    borderRadius: "100px", // pill shape
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    background: "rgba(255, 255, 255, 0.02)",
                                    whiteSpace: "nowrap",
                                    transition: "background 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                                    e.currentTarget.style.borderColor = "var(--accent-cyan)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                                }}
                            >
                                <span style={{ color: "var(--text-secondary)", opacity: 0.8, display: "flex", alignItems: "center" }}>
                                    {skillIconMap[skill.name]}
                                </span>
                                <span
                                    style={{
                                        fontSize: "0.85rem",
                                        color: "var(--text-secondary)",
                                        fontWeight: 500,
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
