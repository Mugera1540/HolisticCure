import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";

// Suppress THREE.Clock deprecation warning which is triggered by internal R3F defaults
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock: This module has been deprecated")) return;
    originalWarn(...args);
  };
}

function Droplet({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const timer = useRef(new (THREE as any).Timer());

  useFrame((_state, delta) => {
    if (!ref.current) return;
    timer.current.update();
    const elapsedTime = timer.current.getElapsed();
    
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, _state.pointer.x * 0.6, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -_state.pointer.y * 0.4, 0.05);
    ref.current.position.y = Math.sin(elapsedTime * 0.6) * 0.15;
  });

  const segments = isMobile ? 64 : 128;

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} scale={isMobile ? 1.3 : 1.6}>
        <sphereGeometry args={[1, segments, segments]} />
        <MeshDistortMaterial
          color="#3db89f"
          roughness={0.05}
          metalness={0.2}
          transmission={0.95}
          thickness={1.4}
          ior={1.4}
          distort={isMobile ? 0.25 : 0.35}
          speed={1.2}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <Canvas
      dpr={isMobile ? [1, 1.2] : [1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: !isMobile, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 2]} intensity={1.6} color="#3db89f" />
        <directionalLight position={[-3, -2, 1]} intensity={0.8} color="#c9a96e" />
        <pointLight position={[0, 0, 3]} intensity={0.6} color="#ffffff" />
        <Droplet isMobile={isMobile} />
        <Environment preset="forest" />
      </Suspense>
    </Canvas>
  );
}
