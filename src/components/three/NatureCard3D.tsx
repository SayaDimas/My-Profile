import { useState, useCallback, useRef, type ReactNode, type MouseEvent } from 'react';

interface NatureCard3DProps {
  children: ReactNode;
  className?: string;
}

export default function NatureCard3D({ children, className = '' }: NatureCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    '--glow-x': '50%',
    '--glow-y': '50%',
    '--glow-opacity': '0',
  } as React.CSSProperties & Record<string, string>);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      '--glow-x': `${glowX}%`,
      '--glow-y': `${glowY}%`,
      '--glow-opacity': '1',
    } as React.CSSProperties & Record<string, string>);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      '--glow-x': '50%',
      '--glow-y': '50%',
      '--glow-opacity': '0',
    } as React.CSSProperties & Record<string, string>);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`nature-card-3d ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nature-card-glow" />
      {children}
    </div>
  );
}
