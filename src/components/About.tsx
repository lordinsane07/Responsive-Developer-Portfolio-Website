"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio";

function CountUp({
    target,
    decimals = 0,
    prefix = "",
    suffix = "",
}: {
    target: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            start = eased * target;
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [inView, target]);

    return (
        <span ref={ref}>
            {prefix}
            {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
            {suffix}
        </span>
    );
}

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section-padding grain"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <div className="section-container">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "3rem",
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
                        01
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
                        About <span className="text-gradient">Me</span>
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        alignItems: "center",
                    }}
                    className="about-grid"
                >
                    {/* Left: Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                width: 280,
                                height: 280,
                            }}
                        >
                            {/* Glowing ring */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: -8,
                                    borderRadius: "50%",
                                    background:
                                        "conic-gradient(from 0deg, var(--accent-cyan), var(--accent-violet), var(--accent-cyan))",
                                    animation: "spin 6s linear infinite",
                                    opacity: 0.6,
                                    filter: "blur(4px)",
                                }}
                            />
                            {/* Avatar container */}
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    background: "var(--bg-secondary)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "3px solid var(--bg-primary)",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Stylized Initials */}
                                <div
                                    style={{
                                        fontSize: "5rem",
                                        fontFamily: "Syne, sans-serif",
                                        fontWeight: 800,
                                        lineHeight: 1,
                                    }}
                                    className="text-gradient"
                                >
                                    MD
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: "absolute",
                                    top: -20,
                                    right: -20,
                                    width: 50,
                                    height: 50,
                                    borderRadius: 12,
                                    border: "2px solid var(--accent-cyan)",
                                    opacity: 0.3,
                                }}
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: "absolute",
                                    bottom: -10,
                                    left: -15,
                                    width: 35,
                                    height: 35,
                                    borderRadius: "50%",
                                    border: "2px solid var(--accent-violet)",
                                    opacity: 0.3,
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p
                            style={{
                                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                                color: "var(--text-secondary)",
                                lineHeight: 1.85,
                                marginBottom: "2rem",
                            }}
                        >
                            {personalInfo.bio}
                        </p>

                        {/* Stat Cards */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "1rem",
                            }}
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                    className="card"
                                    style={{
                                        textAlign: "center",
                                        padding: "1.25rem 1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "1.8rem",
                                            fontFamily: "Syne, sans-serif",
                                            fontWeight: 800,
                                            marginBottom: "0.25rem",
                                        }}
                                        className="text-gradient"
                                    >
                                        <CountUp
                                            target={stat.value}
                                            decimals={stat.decimals || 0}
                                            prefix={stat.prefix || ""}
                                            suffix={stat.suffix || ""}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "var(--text-tertiary)",
                                            fontWeight: 500,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
        </section>
    );
}
