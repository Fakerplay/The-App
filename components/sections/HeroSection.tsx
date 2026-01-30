import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DisplaySerif, TechnicalMono } from '../ui/Typography';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const HeroSection: React.FC = () => {
  const { colors } = useTheme();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className={`relative w-full h-screen flex items-center justify-center overflow-hidden bg-black border-b ${colors.border} transition-colors duration-500`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50 grayscale"
        >
          <source src="https://cdn.coverr.co/videos/coverr-foggy-forest-4478/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center px-6 max-w-4xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center mb-8"
        >
           <TechnicalMono className="text-solace-cyan tracking-[0.2em] text-center border border-solace-cyan/30 px-3 py-1 rounded-full bg-solace-cyan/5 backdrop-blur-sm">
             PROJECT SILENCE_01
           </TechnicalMono>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <DisplaySerif className="text-white text-7xl md:text-9xl tracking-tighter">
            Solace.
          </DisplaySerif>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full flex justify-center"
        >
          <div className="max-w-md w-full text-center">
            <p className="font-sans text-white text-lg md:text-xl leading-relaxed">
              The architecture of rest. <br/>
              Intelligence that respects your silence.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <TechnicalMono className="text-white/40">SCROLL TO EXPLORE</TechnicalMono>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-solace-cyan" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};