
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Environment, RoundedBox } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Loader";

const Robot = ({ isMobile }: { isMobile: boolean }) => {
    const headRef = useRef<THREE.Group>(null);
    const bodyRef = useRef<THREE.Group>(null);
    const groupRef = useRef<THREE.Group>(null);

    const [blink, setBlink] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const [expression, setExpression] = useState<'neutral' | 'happy' | 'sad' | 'surprised' | 'angry'>('neutral');

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink(true);
            setTimeout(() => setBlink(false), 150);
        }, 3000 + Math.random() * 2000);
        return () => clearInterval(blinkInterval);
    }, []);

    useEffect(() => {
        if (active) {
            const timeout = setTimeout(() => setActive(false), 1000);
            return () => clearTimeout(timeout);
        }
    }, [active]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (headRef.current && bodyRef.current && groupRef.current) {
            // Happy Spin Animation
            if (active) {
                groupRef.current.position.y = Math.sin(t * 10) * 0.2 + (isMobile ? -1.5 : -2);
                groupRef.current.rotation.y += 0.1;
            } else {
                // Idle Animation
                headRef.current.position.y = Math.sin(t) * 0.08 + 0.55;
                bodyRef.current.position.y = Math.sin(t) * 0.05 - 0.45;

                // Return to base rotation (Face the camera)
                // Desktop (5, -2, -2) -> Camera (20, 3, 5): approx 1.1 rad
                // Mobile (0, -1.5, 0) -> Camera (20, 3, 5): approx 1.3 rad
                const targetRotation = isMobile ? 1.3 : 1.1;
                groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation, 0.1);
                groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, isMobile ? -1.5 : -2, 0.1);

                const mouseX = state.pointer.x;
                const mouseY = state.pointer.y;

                // Look At Logic - Fixed Mapping: Pos X = Turn Right, Neg Y = Look Up
                headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX * 1.5, 0.1);
                headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouseY * 1.0, 0.1);
                bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, mouseX * 0.5, 0.05);
            }
        }
    });

    // Theme Colors
    const colors = {
        primary: hovered ? "#ffffff" : "#D0D0D0", // Titanium White
        secondary: "#2A2A2A", // Gunmetal Grey / Carbon
        accent: active ? "#00ff00" : "#00BFFF", // Deep Sky Blue / Success Green
        detail: "#FF8C00", // Dark Orange
        glass: "#111111" // Black Glass
    };

    return (
        <group
            ref={groupRef}
            scale={isMobile ? 1.8 : 2.5}
            position={isMobile ? [0, -1.5, 0] : [5, -2, -2]}
            onPointerOver={() => {
                document.body.style.cursor = 'pointer';
                setHovered(true);
                setExpression('happy');
            }}
            onPointerOut={() => {
                document.body.style.cursor = 'auto';
                setHovered(false);
                setExpression('sad');
                setTimeout(() => setExpression('neutral'), 2000); // Back to neutral after 2s
            }}
            onClick={() => {
                setActive(true);
                setExpression('surprised');
                setTimeout(() => setExpression('happy'), 1000); // Happy after spin
            }}
        >
            {/* --- ROBOT HEAD --- */}
            < group ref={headRef} position={[0, 0.5, 0]} >
                {/* Main Cranium - Layer 1 */}
                < RoundedBox args={[0.85, 0.8, 0.85]} radius={0.15} smoothness={4} >
                    <meshStandardMaterial color={colors.primary} roughness={0.2} metalness={0.6} />
                </RoundedBox >

                {/* Top Plate / Hat - Layer 2 */}
                < RoundedBox position={[0, 0.42, 0]} args={[0.6, 0.1, 0.6]} radius={0.05} smoothness={4} >
                    <meshStandardMaterial color={colors.secondary} metalness={0.8} />
                </RoundedBox >

                {/* Face Visor - Layer 2 */}
                < RoundedBox position={[0, 0, 0.38]} args={[0.7, 0.55, 0.15]} radius={0.05} smoothness={4} >
                    <meshStandardMaterial color={colors.glass} roughness={0.0} metalness={0.9} />
                </RoundedBox >

                {/* Eyes - Layer 3 - Dynamic Expressions */}
                <group>
                    {/* Left Eye */}
                    <mesh
                        position={[-0.2, 0.05, 0.46]}
                        rotation={[0, 0, expression === 'angry' ? -0.2 : expression === 'sad' ? 0.2 : 0]}
                    >
                        <planeGeometry args={[0.2, blink ? 0.02 : (expression === 'surprised' ? 0.3 : 0.22)]} />
                        <meshBasicMaterial color={hovered ? "#ff00dd" : (expression === 'angry' ? "#ff0000" : colors.accent)} />
                        <pointLight distance={0.5} intensity={blink ? 0 : 2} color={colors.accent} />
                    </mesh>
                    {/* Right Eye */}
                    <mesh
                        position={[0.2, 0.05, 0.46]}
                        rotation={[0, 0, expression === 'angry' ? 0.2 : expression === 'sad' ? -0.2 : 0]}
                    >
                        <planeGeometry args={[0.2, blink ? 0.02 : (expression === 'surprised' ? 0.3 : 0.22)]} />
                        <meshBasicMaterial color={hovered ? "#ff00dd" : (expression === 'angry' ? "#ff0000" : colors.accent)} />
                        <pointLight distance={0.5} intensity={blink ? 0 : 2} color={colors.accent} />
                    </mesh>

                    {/* Mouth - Dynamic Expressions */}
                    {
                        expression !== 'neutral' && !blink && (
                            <mesh position={[0, -0.12, 0.46]} rotation={[0, 0, expression === 'happy' ? 0 : expression === 'sad' ? Math.PI : 0]}>
                                {/* Mouth Shape Logic */}
                                {(expression === 'happy' || expression === 'sad') && (
                                    <torusGeometry args={[0.08, 0.02, 16, 32, Math.PI]} />
                                )}
                                {expression === 'surprised' && (
                                    <torusGeometry args={[0.06, 0.02, 16, 32, Math.PI * 2]} />
                                )}
                                {expression === 'angry' && (
                                    <boxGeometry args={[0.2, 0.04, 0.02]} />
                                )}
                                <meshBasicMaterial color={colors.accent} />
                            </mesh>
                        )
                    }
                </group >

                {/* Side Ear-Vents - Complex */}
                < group position={[0.5, 0, 0]} >
                    <RoundedBox args={[0.15, 0.4, 0.3]} radius={0.05} smoothness={2}>
                        <meshStandardMaterial color={colors.secondary} />
                    </RoundedBox>
                    <mesh position={[0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
                        <meshBasicMaterial color={colors.accent} />
                    </mesh>
                </group >
                <group position={[-0.5, 0, 0]}>
                    <RoundedBox args={[0.15, 0.4, 0.3]} radius={0.05} smoothness={2}>
                        <meshStandardMaterial color={colors.secondary} />
                    </RoundedBox>
                    <mesh position={[-0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
                        <meshBasicMaterial color={colors.accent} />
                    </mesh>
                </group>

                {/* Antenna Array - Back of head */}
                <mesh position={[0, 0.3, -0.4]}>
                    <boxGeometry args={[0.4, 0.4, 0.1]} />
                    <meshStandardMaterial color={colors.detail} />
                </mesh>
                <mesh position={[0.3, 0.5, -0.3]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.4]} />
                    <meshStandardMaterial color={colors.secondary} />
                </mesh>
            </group >

            {/* --- ROBOT BODY --- */}
            < group ref={bodyRef} position={[0, -0.3, 0]} >
                {/* Core Torso */}
                < RoundedBox args={[0.6, 0.55, 0.45]} radius={0.1} smoothness={4} position={[0, -0.05, 0]} >
                    <meshStandardMaterial color={colors.primary} roughness={0.3} metalness={0.4} />
                </RoundedBox >

                {/* Chest Armor Plate - Layer 2 */}
                < RoundedBox position={[0, 0.05, 0.24]} args={[0.45, 0.35, 0.05]} radius={0.02} smoothness={2} >
                    <meshStandardMaterial color={colors.secondary} metalness={0.7} />
                </RoundedBox >

                {/* Arc Reactor Core - Layer 3 */}
                < mesh position={[0, 0.08, 0.27]} >
                    <circleGeometry args={[0.08, 32]} />
                    <meshBasicMaterial color={colors.accent} />
                    <pointLight distance={0.8} intensity={2} color={colors.accent} />
                </mesh >

                {/* Backpack / Jetpack Unit - Added "Stuff" */}
                < group position={[0, 0.1, -0.3]} >
                    <RoundedBox args={[0.5, 0.5, 0.2]} radius={0.05} smoothness={2}>
                        <meshStandardMaterial color={colors.secondary} />
                    </RoundedBox>
                    {/* Thrusters */}
                    <mesh position={[-0.15, -0.25, 0]} rotation={[Math.PI, 0, 0]}>
                        <coneGeometry args={[0.08, 0.2, 16]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                    <mesh position={[0.15, -0.25, 0]} rotation={[Math.PI, 0, 0]}>
                        <coneGeometry args={[0.08, 0.2, 16]} />
                        <meshStandardMaterial color="#333" />
                    </mesh>
                    {/* Thruster Glow */}
                    <mesh position={[-0.15, -0.35, 0]}>
                        <sphereGeometry args={[0.04]} />
                        <meshBasicMaterial color="#ff4400" />
                    </mesh>
                    <mesh position={[0.15, -0.35, 0]}>
                        <sphereGeometry args={[0.04]} />
                        <meshBasicMaterial color="#ff4400" />
                    </mesh>
                </group >

                {/* Shoulder Pads - Layer 2 */}
                < RoundedBox position={[-0.42, 0.18, 0]} args={[0.25, 0.2, 0.25]} radius={0.05} >
                    <meshStandardMaterial color={colors.detail} metalness={0.5} />
                </RoundedBox >
                <RoundedBox position={[0.42, 0.18, 0]} args={[0.25, 0.2, 0.25]} radius={0.05}>
                    <meshStandardMaterial color={colors.detail} metalness={0.5} />
                </RoundedBox>

                {/* Arms - Floating segments */}
                <RoundedBox position={[-0.45, -0.1, 0.1]} args={[0.15, 0.3, 0.15]} radius={0.04}>
                    <meshStandardMaterial color={colors.primary} />
                </RoundedBox>
                <RoundedBox position={[0.45, -0.1, 0.1]} args={[0.15, 0.3, 0.15]} radius={0.04}>
                    <meshStandardMaterial color={colors.primary} />
                </RoundedBox>

                {/* Legs/Feet - Heavy Duty */}
                <group position={[-0.2, -0.45, 0]}>
                    <RoundedBox args={[0.2, 0.25, 0.3]} radius={0.05}>
                        <meshStandardMaterial color={colors.secondary} />
                    </RoundedBox>
                    {/* Toe Detail */}
                    <mesh position={[0, -0.1, 0.15]}>
                        <boxGeometry args={[0.15, 0.05, 0.05]} />
                        <meshStandardMaterial color={colors.detail} />
                    </mesh>
                </group>
                <group position={[0.2, -0.45, 0]}>
                    <RoundedBox args={[0.2, 0.25, 0.3]} radius={0.05}>
                        <meshStandardMaterial color={colors.secondary} />
                    </RoundedBox>
                    {/* Toe Detail */}
                    <mesh position={[0, -0.1, 0.15]}>
                        <boxGeometry args={[0.15, 0.05, 0.05]} />
                        <meshStandardMaterial color={colors.detail} />
                    </mesh>
                </group>
            </group >

            {/* --- ENVIRONMENT BASE --- */}
            < group position={[0, -1.3, 0]} >
                <mesh receiveShadow>
                    <cylinderGeometry args={[1.6, 1.8, 0.15, 64]} />
                    <meshStandardMaterial color="#111" metalness={0.8} />
                </mesh>
                <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[1.2, 1.3, 64]} />
                    <meshBasicMaterial color={colors.accent} opacity={0.3} transparent />
                </mesh>
                {/* Tech Detail on Base */}
                <mesh position={[0.8, 0.1, 0.8]}>
                    <boxGeometry args={[0.2, 0.2, 0.2]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[-0.8, 0.1, -0.5]}>
                    <boxGeometry args={[0.15, 0.3, 0.15]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
            </group >
        </group >
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // defined as less than 1024px (covers tablets and phones)
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        setIsMobile(mediaQuery.matches);
        const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <Canvas
            frameloop='always'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* Environment adds global illumination */}
                <Environment preset="city" />

                <OrbitControls
                    enableZoom={false}
                    enableRotate={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                {!isMobile && <Robot isMobile={isMobile} />}
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
