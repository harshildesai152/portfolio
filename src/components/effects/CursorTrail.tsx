
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const PARTICLE_LIFESPAN_MS = 1500; // 1.5 seconds for the trail to fade
const MAX_PARTICLES = 40; // Limit to avoid performance issues
const PARTICLE_GENERATION_INTERVAL_MS = 30; // Generate a particle more frequently for smoother trail

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);
  const lastParticleTimeRef = useRef(0);

  useEffect(() => {
    // This effect runs only on the client after initial mount
    setIsClient(true);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const now = Date.now();
    if (now - lastParticleTimeRef.current < PARTICLE_GENERATION_INTERVAL_MS) {
      return;
    }
    lastParticleTimeRef.current = now;

    setParticles((prevParticles) => {
      const newParticle: Particle = {
        id: now + Math.random(), // Add random to ensure uniqueness even if timestamp is same
        x: event.clientX,
        y: event.clientY,
        timestamp: now,
      };
      const updatedParticles = [...prevParticles, newParticle];
      return updatedParticles.slice(-MAX_PARTICLES);
    });
  }, []);

  useEffect(() => {
    if (!isClient) return;

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, isClient]);

  useEffect(() => {
    if (!isClient) return;

    const intervalId = setInterval(() => {
      const now = Date.now();
      setParticles((prevParticles) =>
        prevParticles.filter(
          (particle) => now - particle.timestamp < PARTICLE_LIFESPAN_MS
        )
      );
    }, 100); // Cleanup check interval

    return () => clearInterval(intervalId);
  }, [isClient]);

  if (!isClient) {
    return null; // Render nothing on the server or before client-side hydration
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-cursor-trail bg-primary rounded-sm" // Changed from rounded-full
          style={{
            left: particle.x,
            top: particle.y,
            width: '15px', // Made wider for a line effect
            height: '3px', // Made shorter for a line effect
            // Adjust position to center the particle on the cursor
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
