"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function AuroraParticles({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
    const meshRef = useRef<THREE.Points>(null);
    const lineRef = useRef<THREE.LineSegments>(null);
    const count = 600;
    const connectionDistance = 2.8;

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const cyan = new THREE.Color("#00d4ff");
        const violet = new THREE.Color("#7c3aed");

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

            velocities[i * 3] = (Math.random() - 0.5) * 0.005;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;

            const t = Math.random();
            const color = cyan.clone().lerp(violet, t);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            sizes[i] = Math.random() * 3 + 1;
        }

        return { positions, colors, velocities, sizes };
    }, []);

    const lineGeometry = useMemo(() => {
        const maxLines = count * 10;
        const positions = new Float32Array(maxLines * 6);
        const colors = new Float32Array(maxLines * 6);
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setDrawRange(0, 0);
        return geometry;
    }, []);

    const particleGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(particles.positions, 3)
        );
        geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(particles.colors, 3)
        );
        geometry.setAttribute(
            "size",
            new THREE.BufferAttribute(particles.sizes, 1)
        );
        return geometry;
    }, [particles]);

    const timeRef = useRef(0);

    useFrame((state, delta) => {
        if (!meshRef.current) return;
        timeRef.current += delta;
        const geo = meshRef.current.geometry;
        const posArr = geo.attributes.position.array as Float32Array;
        const time = timeRef.current;

        const mx = mouse.current ? mouse.current.x * 3 : 0;
        const my = mouse.current ? mouse.current.y * 3 : 0;

        for (let i = 0; i < count; i++) {
            posArr[i * 3] += particles.velocities[i * 3] + Math.sin(time * 0.3 + i) * 0.001;
            posArr[i * 3 + 1] += particles.velocities[i * 3 + 1] + Math.cos(time * 0.2 + i) * 0.001;
            posArr[i * 3 + 2] += particles.velocities[i * 3 + 2];

            // Mouse influence
            const dx = posArr[i * 3] - mx;
            const dy = posArr[i * 3 + 1] - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 4) {
                const force = (4 - dist) * 0.0008;
                posArr[i * 3] += dx * force;
                posArr[i * 3 + 1] += dy * force;
            }

            // Boundaries
            if (Math.abs(posArr[i * 3]) > 10) particles.velocities[i * 3] *= -1;
            if (Math.abs(posArr[i * 3 + 1]) > 7) particles.velocities[i * 3 + 1] *= -1;
            if (Math.abs(posArr[i * 3 + 2]) > 5) particles.velocities[i * 3 + 2] *= -1;
        }
        geo.attributes.position.needsUpdate = true;

        // Update connections
        if (lineRef.current) {
            const linePosArr = lineGeometry.attributes.position.array as Float32Array;
            const lineColArr = lineGeometry.attributes.color.array as Float32Array;
            let lineIdx = 0;

            for (let i = 0; i < count; i++) {
                for (let j = i + 1; j < count; j++) {
                    const ddx = posArr[i * 3] - posArr[j * 3];
                    const ddy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
                    const ddz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
                    const d = Math.sqrt(ddx * ddx + ddy * ddy + ddz * ddz);

                    if (d < connectionDistance && lineIdx < linePosArr.length / 6) {
                        const alpha = 1 - d / connectionDistance;
                        linePosArr[lineIdx * 6] = posArr[i * 3];
                        linePosArr[lineIdx * 6 + 1] = posArr[i * 3 + 1];
                        linePosArr[lineIdx * 6 + 2] = posArr[i * 3 + 2];
                        linePosArr[lineIdx * 6 + 3] = posArr[j * 3];
                        linePosArr[lineIdx * 6 + 4] = posArr[j * 3 + 1];
                        linePosArr[lineIdx * 6 + 5] = posArr[j * 3 + 2];

                        const rr = alpha * (124 / 255);
                        const gg = (212 + alpha * (58 - 212)) / 255;
                        const bb = (255 + alpha * (237 - 255)) / 255;

                        lineColArr[lineIdx * 6] = rr;
                        lineColArr[lineIdx * 6 + 1] = gg;
                        lineColArr[lineIdx * 6 + 2] = bb;
                        lineColArr[lineIdx * 6 + 3] = rr;
                        lineColArr[lineIdx * 6 + 4] = gg;
                        lineColArr[lineIdx * 6 + 5] = bb;

                        lineIdx++;
                    }
                }
            }

            lineGeometry.setDrawRange(0, lineIdx * 2);
            lineGeometry.attributes.position.needsUpdate = true;
            lineGeometry.attributes.color.needsUpdate = true;
        }
    });

    return (
        <>
            <points ref={meshRef} geometry={particleGeometry}>
                <pointsMaterial
                    size={0.06}
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </points>
            <lineSegments ref={lineRef} geometry={lineGeometry}>
                <lineBasicMaterial
                    vertexColors
                    transparent
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </lineSegments>
        </>
    );
}

function CameraController({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
    const { camera } = useThree();

    useFrame(() => {
        if (!mouse.current) return;
        const targetX = mouse.current.x * 0.5;
        const targetY = mouse.current.y * 0.5;
        camera.position.x += (targetX - camera.position.x) * 0.02;
        camera.position.y += (targetY - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);
    });

    return null;
}

export default function ThreeBackground() {
    const mouse = useRef({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.3} />
                <AuroraParticles mouse={mouse} />
                <CameraController mouse={mouse} />
            </Canvas>
        </div>
    );
}
