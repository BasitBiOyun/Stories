import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const ParchmentEffect = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const shadowX = useSpring(mouseX, springConfig);
  const shadowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dust particles
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Subtle Shadow Play */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: useMemo(() => {
            return `radial-gradient(600px circle at var(--x) var(--y), transparent 0%, black 100%)`;
          }, []),
          // We'll use CSS variables for the gradient position to keep it smooth
          // but since we're in React/Framer, we can just use the spring values
          // directly in a style object if we use a custom property.
          // For simplicity and performance, let's use a simpler approach:
        }}
      />
      
      {/* Dynamic Shadow Layer */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          background: `radial-gradient(800px circle at ${shadowX}px ${shadowY}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)`,
        }}
      />

      {/* Dust Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-gold/20 rounded-full blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -30, 10, 0],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
