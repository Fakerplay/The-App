import React from 'react';
import { DisplaySerif, TechnicalMono, BodyText } from '../components/ui/Typography';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export const TheIntelligenceGap: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 pt-24 md:pt-0">
      
      {/* Left: The Noise */}
      <div className="relative h-full flex flex-col justify-center p-8 md:p-24 border-r border-stone-800/10 overflow-hidden">
         {/* Background Visual: Chaotic Notification Blur */}
         <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-red-500 blur-xl"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5 
                }}
                animate={{
                  x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                  y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  width: Math.random() * 100 + 50 + "px",
                  height: Math.random() * 100 + 50 + "px",
                }}
              />
            ))}
         </div>

         <div className="relative z-10">
            <TechnicalMono className="mb-8 text-red-700/60">01 / THE NOISE</TechnicalMono>
            <h2 className={`font-serif text-4xl mb-6 ${colors.textPrimary} opacity-50 blur-[0.5px]`}>
              The Extractive Era
            </h2>
            <p className={`font-mono text-sm leading-7 ${colors.textPrimary} opacity-60 max-w-md`}>
              Every app demands attention. <br/>
