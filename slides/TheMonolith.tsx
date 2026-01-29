import React from 'react';
import { motion } from 'framer-motion';

export const TheMonolith: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black relative text-white">
      {/* 1px White Line - Breathing */}
      <motion.div 
        className="w-[200px] h-[1px] bg-white mb-16"
        animate={{
          scaleX: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="text-center z-10">
        <h1 className="font-sans text-5xl md:text-8xl font-bold tracking-tighter mb-4">
          SOLACE
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase opacity-60">
          The Architecture of Rest
        </p>
      </div>

      <div className="absolute bottom-12 font-mono text-[10px] opacity-30">
        PROJECT SILENCE_01
      </div>
    </div>
  );
};