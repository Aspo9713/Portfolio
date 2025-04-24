// components/SmokeBackground.tsx
'use client';
import { motion } from 'framer-motion';

export function SmokeBackground() {
  return (
    <motion.div
      className="absolute inset-0 bg-[url('/imgs/smoke.png')] bg-cover opacity-30 pointer-events-none"
      animate={{ y: [-100, 0], opacity: [0, 0.3, 0] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    />
  );
}
