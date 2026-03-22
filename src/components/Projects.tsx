"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Download } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const featured = projects.filter((p) => p.featured);
    const regular = projects.filter((p) => !p.featured);

    return (
        <section
            id="projects"
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
                        04
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
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="section-subheading"
                    style={{ marginBottom: "3rem" }}
                >
                    A selection of projects that showcase my range — from production web
                    platforms to intelligent ML systems.
                </motion.p>

                {/* Bento Grid - Featured */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "1.25rem",
                        marginBottom: "1.25rem",
                    }}
                    className="projects-bento"
                >
                    {featured.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3 },
                            }}
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border-color)",
                                borderRadius: 20,
                                padding: "2rem",
                                position: "relative",
                                overflow: "hidden",
                                cursor: "pointer",
                                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                gridColumn: i === 0 ? "span 2" : "span 1",
                            }}
                            className="project-card"
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "var(--border-glow)";
                                el.style.boxShadow =
                                    "0 20px 60px rgba(0,0,0,0.2), 0 0 40px var(--accent-cyan-glow)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "var(--border-color)";
                                el.style.boxShadow = "none";
                            }}
                        >
                            {/* Featured badge */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 16,
                                    right: 16,
                                    padding: "0.25rem 0.75rem",
                                    borderRadius: 20,
                                    background: "rgba(0, 0, 0, 0.7)",
                                    backdropFilter: "blur(8px)",
                                    border: "1px solid var(--accent-cyan)",
                                    fontSize: "0.7rem",
                                    color: "var(--accent-cyan)",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    zIndex: 10,
                                }}
                            >
                                Featured
                            </div>

                            {/* Background decoration */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: -50,
                                    right: -50,
                                    width: 200,
                                    height: 200,
                                    borderRadius: "50%",
                                    background:
                                        i % 2 === 0
                                            ? "radial-gradient(circle, var(--accent-cyan-glow), transparent)"
                                            : "radial-gradient(circle, var(--accent-violet-glow), transparent)",
                                    opacity: 0.5,
                                    pointerEvents: "none",
                                }}
                            />

                            {/* Project Image */}
                            {project.image && (
                                <div
                                    style={{
                                        marginBottom: "1.25rem",
                                        borderRadius: 12,
                                        overflow: "hidden",
                                        border: "1px solid var(--border-color)",
                                        maxHeight: 320,
                                    }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: "100%",
                                            height: 320,
                                            objectFit: "cover",
                                            objectPosition: "top",
                                            display: "block",
                                            transition: "transform 0.4s ease",
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                                    />
                                </div>
                            )}

                            <h3
                                style={{
                                    fontSize: "1.4rem",
                                    fontFamily: "Syne, sans-serif",
                                    fontWeight: 700,
                                    marginBottom: "0.75rem",
                                    paddingRight: "5rem",
                                }}
                            >
                                {project.title}
                            </h3>

                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "0.92rem",
                                    lineHeight: 1.7,
                                    marginBottom: "1.25rem",
                                    maxWidth: 600,
                                }}
                            >
                                {project.description}
                            </p>

                            {/* Tech Stack Pills */}
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.4rem",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        style={{
                                            padding: "0.3rem 0.7rem",
                                            borderRadius: 8,
                                            border: "1px solid var(--border-color)",
                                            fontSize: "0.72rem",
                                            color: "var(--text-tertiary)",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: "flex", gap: "0.75rem" }}>
                                {project.githubUrl && (
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-outline"
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ fontSize: "0.82rem", padding: "0.55rem 1rem" }}
                                    >
                                        <Github size={15} /> GitHub
                                    </motion.a>
                                )}
                                {project.liveUrl && (
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary"
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ fontSize: "0.82rem", padding: "0.55rem 1rem" }}
                                    >
                                        <ExternalLink size={15} /> Live Demo
                                    </motion.a>
                                )}
                                {project.downloadUrl && (
                                    <motion.a
                                        href={project.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary"
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ fontSize: "0.82rem", padding: "0.55rem 1rem" }}
                                    >
                                        <Download size={15} /> Download APK
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Regular Projects */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(6, 1fr)",
                        gap: "1.25rem",
                    }}
                    className="projects-regular"
                >
                    {regular.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.5 + (featured.length + i) * 0.1,
                            }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3 },
                            }}
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border-color)",
                                borderRadius: 16,
                                padding: "1.5rem",
                                position: "relative",
                                overflow: "hidden",
                                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                gridColumn: i < 2 ? "span 3" : "span 2",
                                display: "flex",
                                flexDirection: "column" as const,
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "var(--border-glow)";
                                el.style.boxShadow =
                                    "0 16px 40px rgba(0,0,0,0.15), 0 0 25px var(--accent-cyan-glow)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "var(--border-color)";
                                el.style.boxShadow = "none";
                            }}
                        >
                            {/* Project Image */}
                            {project.image && (
                                <div
                                    style={{
                                        marginBottom: "0.75rem",
                                        borderRadius: 10,
                                        overflow: "hidden",
                                        border: "1px solid var(--border-color)",
                                        maxHeight: i < 2 ? 320 : 160,
                                    }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: "100%",
                                            height: i < 2 ? 320 : 160,
                                            objectFit: "cover",
                                            objectPosition: i < 2 ? "center" : "top",
                                            display: "block",
                                            transition: "transform 0.4s ease",
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                                    />
                                </div>
                            )}

                            <h3
                                style={{
                                    fontSize: "1.15rem",
                                    fontFamily: "Syne, sans-serif",
                                    fontWeight: 700,
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {project.title}
                            </h3>

                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "0.85rem",
                                    lineHeight: 1.6,
                                    marginBottom: "1rem",
                                }}
                            >
                                {project.description}
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.3rem",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        style={{
                                            padding: "0.25rem 0.6rem",
                                            borderRadius: 6,
                                            border: "1px solid var(--border-color)",
                                            fontSize: "0.68rem",
                                            color: "var(--text-tertiary)",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto" }}>
                                {project.githubUrl && (
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-outline"
                                        style={{ fontSize: "0.78rem", padding: "0.45rem 0.85rem" }}
                                    >
                                        <Github size={14} /> GitHub
                                    </motion.a>
                                )}
                                {project.liveUrl && (
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary"
                                        style={{ fontSize: "0.78rem", padding: "0.45rem 0.85rem" }}
                                    >
                                        <ExternalLink size={14} /> Live Demo
                                    </motion.a>
                                )}
                                {project.downloadUrl && (
                                    <motion.a
                                        href={project.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary"
                                        style={{ fontSize: "0.78rem", padding: "0.45rem 0.85rem" }}
                                    >
                                        <Download size={14} /> APK
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* See All Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2.5rem",
                    }}
                >
                    <motion.a
                        href="https://github.com/lordinsane07"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px var(--accent-cyan-glow), 0 0 60px rgba(0,0,0,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            fontSize: "1rem",
                            padding: "0.85rem 2.5rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            borderRadius: 12,
                            border: "1px solid var(--accent-cyan)",
                            background: "linear-gradient(135deg, var(--accent-cyan-glow), rgba(139, 92, 246, 0.1))",
                            color: "var(--accent-cyan)",
                            fontWeight: 700,
                            fontFamily: "Syne, sans-serif",
                            letterSpacing: "0.03em",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                        }}
                    >
                        <Github size={20} /> See All Projects
                    </motion.a>
                </motion.div>
            </div>

            <style jsx global>{`
        @media (max-width: 1024px) {
          .projects-bento {
            grid-template-columns: 1fr !important;
          }
          .projects-bento > * {
            grid-column: span 1 !important;
          }
          .projects-regular {
            grid-template-columns: 1fr 1fr !important;
          }
          .projects-regular > * {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 640px) {
          .projects-regular {
            grid-template-columns: 1fr !important;
          }
          .projects-regular > * {
            grid-column: span 1 !important;
          }
        }
      `}</style>
        </section>
    );
}
