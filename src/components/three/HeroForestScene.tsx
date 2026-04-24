import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ───────── Glowing Leaf Ring ───────── */
function LeafRing() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 12;

  const leafShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.4);
    shape.bezierCurveTo(0.25, 0.3, 0.3, 0.05, 0, -0.4);
    shape.bezierCurveTo(-0.3, 0.05, -0.25, 0.3, 0, 0.4);
    return shape;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  const leaves = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.2;
      return {
        position: [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] as [number, number, number],
        rotation: [0, 0, angle + Math.PI / 2] as [number, number, number],
        scale: 0.35 + Math.sin(i * 0.8) * 0.1,
      };
    });
  }, [count]);

  return (
    <group ref={groupRef}>
      {leaves.map((leaf, i) => (
        <mesh key={i} position={leaf.position} rotation={leaf.rotation} scale={leaf.scale}>
          <shapeGeometry args={[leafShape]} />
          <meshBasicMaterial
            color="#4ade80"
            transparent
            opacity={0.4 + Math.sin(i * 0.5) * 0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ───────── Orbiting Particles ───────── */
function OrbitParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 50;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 0.8;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = Math.sin(angle) * radius;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#86efac"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ───────── Pulsing Core Glow ───────── */
function CoreGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    ref.current.scale.setScalar(scale);
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.08 + Math.sin(state.clock.elapsedTime * 2) * 0.04;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshBasicMaterial
        color="#4ade80"
        transparent
        opacity={0.1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ───────── Floating Vine Strands ───────── */
function VineStrands() {
  const ref = useRef<THREE.Group>(null);

  const curves = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => {
      const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const points = [];
      for (let t = 0; t <= 1; t += 0.1) {
        const r = 2.8 + t * 1.2;
        points.push(new THREE.Vector3(
          Math.cos(angle + t * 0.5) * r,
          Math.sin(angle + t * 0.5) * r,
          Math.sin(t * Math.PI) * 0.3
        ));
      }
      return new THREE.CatmullRomCurve3(points);
    });
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <group ref={ref}>
      {curves.map((curve, i) => (
        <mesh key={i}>
          <tubeGeometry args={[curve, 20, 0.015, 4, false]} />
          <meshBasicMaterial
            color="#4ade80"
            transparent
            opacity={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ───────── Main Hero Scene ───────── */
export default function HeroForestScene() {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      height: '400px',
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <LeafRing />
        <OrbitParticles />
        <CoreGlow />
        <VineStrands />
      </Canvas>
    </div>
  );
}
