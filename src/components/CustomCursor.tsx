"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const pos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Hide on touch devices
        if ("ontouchstart" in window) return;

        const handleMouseMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const checkHoverables = () => {
            const hoverables = document.querySelectorAll(
                'a, button, [role="button"], input, textarea, select, .hoverable'
            );
            hoverables.forEach((el) => {
                el.addEventListener("mouseenter", () => setIsHovering(true));
                el.addEventListener("mouseleave", () => setIsHovering(false));
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("mouseleave", handleMouseLeave);

        checkHoverables();
        const observer = new MutationObserver(checkHoverables);
        observer.observe(document.body, { childList: true, subtree: true });

        // Animation loop
        let raf: number;
        const animate = () => {
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
            }
            if (ringRef.current) {
                ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
                ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
                ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${isHovering ? 1.8 : 1})`;
            }
            raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("mouseleave", handleMouseLeave);
            observer.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [isVisible, isHovering]);

    if (!isVisible) return null;

    return (
        <>
            <div
                ref={dotRef}
                style={{
                    position: "fixed",
                    top: -4,
                    left: -4,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--accent-cyan)",
                    pointerEvents: "none",
                    zIndex: 99999,
                    mixBlendMode: "difference",
                    transition: isHovering ? "width 0.3s, height 0.3s" : "none",
                    willChange: "transform",
                }}
            />
            <div
                ref={ringRef}
                style={{
                    position: "fixed",
                    top: -20,
                    left: -20,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: `1.5px solid ${isHovering ? "var(--accent-violet)" : "var(--accent-cyan)"}`,
                    pointerEvents: "none",
                    zIndex: 99998,
                    opacity: 0.5,
                    transition: "border-color 0.3s, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    willChange: "transform",
                }}
            />
            <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
        </>
    );
}
