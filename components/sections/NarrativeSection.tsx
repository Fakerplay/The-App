import React, { useEffect, useRef, useMemo, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { DisplaySerif, TechnicalMono } from '../ui/Typography';
import { useTheme } from '../../context/ThemeContext';

const NoiseTexture = () => {
  const words = [
    "URGENT", "NOTIFICATION", "UPDATE", "ALERT", "PING", "MESSAGE", 
    "REMINDER", "TASK", "DEADLINE", "COMMENT", "LIKE", "SHARE", 
    "SUBSCRIBE", "BUY", "NOW", "LATER", "WAIT", "ERROR", "RETRY",
    "BATTERY LOW", "SIGNAL LOST", "CONNECTING", "SYNCING",
    "404", "CRITICAL", "FAILURE", "WARNING", "ATTENTION",
    "CLICK HERE", "OPEN", "VIEW", "RESPOND", "MISSED CALL",
    "PAYMENT DUE", "CONFIRM", "VERIFY", "PASSWORD", "LOGIN"
  ];

  // Generate stable random values for chaotic distribution
  const elements = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      word: words[i % words.length],
      left: Math.random() * 100,
      top: Math.random() * 100,
      fontSize: Math.random() > 0.95 ? 'text-5xl md:text-7xl opacity-10' : Math.random() > 0.8 ? 'text-2xl md:text-4xl opacity-20' : 'text-[8px] md:text-xs opacity-40',
      rotation: Math.random() * 180 - 90,
      duration: Math.random() * 2 + 0.5,
      delay: Math.random() * 2
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none z-0">
      {elements.map((el, i) => (
        <motion.span 
          key={i} 
          className={`absolute font-sans font-bold leading-none mix-blend-multiply text-[#1A1A1A] ${el.fontSize} whitespace-nowrap`}
          style={{ 
            left: `${el.left}%`,
            top: `${el.top}%`,
            transform: `rotate(${el.rotation}deg)`,
          }}
          animate={{
            opacity: [null, 0.1, 0.4, 0.1],
            filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
            x: [0, Math.random() * 10 - 5, 0]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
            repeatType: "reverse"
          }}
        >
          {el.word}
        </motion.span>
      ))}
      
      {/* Vignette Overlay to contain the chaos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F0F0F0_100%)] mix-blend-normal" />
    </div>
  );
};

const SystemStatus: React.FC = () => {
  const [index, setIndex] = useState(0);
  const states = [
    "SYSTEM: LISTENING",
    "STATUS: OBSERVING",
    "INPUT: SILENCE",
    "MODE: RESONANCE"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-16 flex items-center gap-3 justify-center">
      <div className="relative flex h-2 w-2">
        <motion.div
          animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inline-flex h-full w-full rounded-full bg-emerald-500"
        />
        <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
      </div>
      <div className="w-32 text-left h-4 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={states[index]}
            initial={{ y: 5, opacity: 0, filter: "blur(2px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -5, opacity: 0, filter: "blur(2px)" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <TechnicalMono className="text-[10px] !text-emerald-900/70 tracking-widest">{states[index]}</TechnicalMono>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const NarrativeSection: React.FC = () => {
  const { setDimmed, colors, spacing } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { scrollYProgress } = useScroll({ target: ref });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    if (isInView) setDimmed(false); 
  }, [isInView, setDimmed]);

  return (
    <section ref={ref} className={`w-full min-h-[100vh] flex flex-col md:flex-row relative ${colors.background} overflow-hidden transition-colors duration-500`}>
      
      {/* Left Side: The Noise */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:h-auto bg-[#F0F0F0] relative overflow-hidden border-r border-black/5">
        <NoiseTexture />
        
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F0F0F0]/30 to-[#F0F0F0]" />
        
        {/* Central visual for Noise - Abstract blurred core */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
              className="w-48 h-48 md:w-64 md:h-64 bg-red-500/5 rounded-full blur-[80px]" 
            />
        </div>

        <div className="absolute bottom-12 left-12 z-10">
           <TechnicalMono className="text-black/60 bg-[#F0F0F0]/80 backdrop-blur-sm px-3 py-1.5 border border-black/5 rounded-full">FIG A. THE NOISE</TechnicalMono>
        </div>
      </div>

      {/* Right Side: The Silence */}
      <div className={`w-full md:w-1/2 min-h-[50vh] md:h-auto ${colors.background} flex flex-col items-center justify-center ${spacing.sectionPx} py-12 text-center relative z-10 transition-colors duration-500`}>
        <motion.div
           style={{ y }}
           className="max-w-xl relative flex flex-col items-center"
        >
           {/* Decorative Quotes */}
           <span className="absolute -top-16 -left-8 font-serif text-9xl text-black/5 select-none leading-none">“</span>
           
           <div className="relative z-10">
               <TechnicalMono className="mb-6 opacity-40">THE PHILOSOPHY</TechnicalMono>
               <DisplaySerif className="leading-tight mb-8">
                 We prefer to listen to <br className="hidden md:block" /> what you don't say.
               </DisplaySerif>
               <p className={`font-sans text-lg max-w-sm mx-auto leading-relaxed ${colors.textPrimary} opacity-60`}>
                 In an age of constant extraction, Solace offers a sanctuary of privacy and presence.
               </p>
           </div>

           <SystemStatus />
        </motion.div>

        <div className="absolute bottom-12 right-12 text-right">
           <TechnicalMono className="text-black/40 px-3 py-1.5 border border-black/5 rounded-full">FIG B. THE SIGNAL</TechnicalMono>
        </div>
      </div>

    </section>
  );
};