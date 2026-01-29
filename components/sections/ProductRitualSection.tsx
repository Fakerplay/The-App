import React from 'react';
import { motion } from 'framer-motion';
import { TechnicalMono } from '../ui/Typography';
import { useTheme } from '../../context/ThemeContext';

const RitualCell: React.FC<{ word: string; delay: number }> = ({ word, delay }) => {
  const { colors } = useTheme();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
      className={`aspect-square border-r-[0.5px] border-b-[0.5px] border-black/10 flex items-center justify-center relative ${colors.background} group overflow-hidden transition-colors duration-500`}
    >
      {/* Background Hover Effect */}
      <div className={`absolute inset-0 ${colors.background === 'bg-[#0A0A0A]' ? 'bg-white/10' : 'bg-stone-50'} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out`} />
      
      {/* Text Reveal */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
        <span className={`font-sans text-xl md:text-3xl ${colors.textPrimary} tracking-widest italic font-light`}>
          {word}
        </span>
      </div>

      {/* Default State: Tiny Dot */}
      <div className="w-[2px] h-[2px] bg-black/20 rounded-full group-hover:opacity-0 transition-opacity duration-500" />
    </motion.div>
  );
};

export const ProductRitualSection: React.FC = () => {
  const { colors, spacing } = useTheme();
  const words = [
    "Breathe", "Pause", "Still",
    "Listen", "Observe", "Wait",
    "Drift", "Exist", "Silence"
  ];

  return (
    <section className={`w-full ${spacing.sectionPy} ${colors.background} flex flex-col items-center justify-center transition-colors duration-500`}>
      <div className="mb-24 text-center">
        <TechnicalMono className="mb-4 opacity-40">SECTION 04: THE RITUAL</TechnicalMono>
        <p className={`font-sans ${colors.textPrimary} opacity-60 italic text-lg`}>Hover to reveal presence</p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-3 w-full max-w-2xl px-6 border-t-[0.5px] border-l-[0.5px] border-black/10">
        {words.map((word, i) => (
          <RitualCell key={i} word={word} delay={i * 0.1} />
        ))}
      </div>
      
      {/* Decorative Line */}
      <div className="w-[1px] h-32 bg-gradient-to-b from-black/10 to-transparent mt-24" />
    </section>
  );
};