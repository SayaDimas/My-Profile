import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ───────── Fireflies ───────── */
function Fireflies({ count = 80 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const { positions, scales, speeds, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      scales[i] = Math.random() * 0.8 + 0.2;
      speeds[i] = Math.random() * 0.5 + 0.2;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return { positions, scales, speeds, phases };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    const posArray = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3] += Math.sin(time * speeds[i] + phases[i]) * 0.003;
      posArray[i3 + 1] += Math.cos(time * speeds[i] * 0.7 + phases[i]) * 0.002;
      posArray[i3 + 2] += Math.sin(time * speeds[i] * 0.5) * 0.001;

      // Wrap around boundaries
      if (posArray[i3] > 15) posArray[i3] = -15;
      if (posArray[i3] < -15) posArray[i3] = 15;
      if (posArray[i3 + 1] > 10) posArray[i3 + 1] = -10;
      if (posArray[i3 + 1] < -10) posArray[i3 + 1] = 10;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;

    // Pulse opacity
    const mat = mesh.current.material as THREE.PointsMaterial;
    mat.opacity = 0.4 + Math.sin(time * 0.8) * 0.2;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-scale"
          args={[scales, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#fbbf24"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ───────── Floating Leaves ───────── */
function FallingLeaves({ count = 25 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const leafData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 30,
      y: Math.random() * 15 + 5,
      z: (Math.random() - 0.5) * 10,
      rotSpeed: (Math.random() - 0.5) * 2,
      fallSpeed: Math.random() * 0.3 + 0.1,
      swaySpeed: Math.random() * 1.5 + 0.5,
      swayAmount: Math.random() * 1.5 + 0.5,
      phase: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.15 + 0.08,
    }));
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;

    leafData.forEach((leaf, i) => {
      leaf.y -= leaf.fallSpeed * 0.016;
      if (leaf.y < -10) {
        leaf.y = 12 + Math.random() * 5;
        leaf.x = (Math.random() - 0.5) * 30;
      }

      const swayX = Math.sin(time * leaf.swaySpeed + leaf.phase) * leaf.swayAmount;

      dummy.position.set(leaf.x + swayX, leaf.y, leaf.z);
      dummy.rotation.set(
        time * leaf.rotSpeed * 0.3,
        time * leaf.rotSpeed * 0.5,
        Math.sin(time * leaf.swaySpeed) * 0.5
      );
      dummy.scale.setScalar(leaf.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  const leafShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.5);
    shape.bezierCurveTo(0.3, 0.4, 0.4, 0.1, 0, -0.5);
    shape.bezierCurveTo(-0.4, 0.1, -0.3, 0.4, 0, 0.5);
    return shape;
  }, []);

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <shapeGeometry args={[leafShape]} />
      <meshBasicMaterial
        color="#4ade80"
        transparent
        opacity={0.35}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </instancedMesh>
  );
}

/* ───────── Pollen / Dust Particles ───────── */
function PollenParticles({ count = 120 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 25;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    const posArray = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3] += Math.sin(time * 0.1 + i * 0.1) * 0.002;
      posArray[i3 + 1] += 0.002 + Math.sin(time * 0.3 + i) * 0.001;

      if (posArray[i3 + 1] > 12) {
        posArray[i3 + 1] = -12;
        posArray[i3] = (Math.random() - 0.5) * 40;
      }
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#a3e635"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ───────── Mouse Parallax Camera Rig ───────── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
  }, []);

  useMemo(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.current.y * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ───────── Main Forest Background ───────── */
export default function ForestBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at 50% 50%, #0d1a0d 0%, #060e06 50%, #030803 100%)',
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ pointerEvents: 'auto' }}
      >
        <fog attach="fog" args={['#0a120a', 5, 25]} />
        <ambientLight intensity={0.15} color="#4ade80" />

        <CameraRig />
        <Fireflies count={60} />
        <FallingLeaves count={20} />
        <PollenParticles count={80} />
      </Canvas>
    </div>
  );
}
