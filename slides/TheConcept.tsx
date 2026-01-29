import React from 'react';
import { motion } from 'framer-motion';
import { DisplaySerif, TechnicalMono, BodyText } from '../components/ui/Typography';
import { useTheme } from '../context/ThemeContext';

export const TheConcept: React.FC = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden p-8 md:p-24">
      
      {/* Visual: Glass Buffer Animation */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div 
          className="w-[300px] h-[400px] md:w-[500px] md:h-[600px] bg-white/10 backdrop-blur-3xl rounded-[100px] border border-white/20 shadow-2xl"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={`absolute w-[200px] h-[200px] rounded-full blur-[80px] opacity-40 ${colors.accent === 'text-violet-300' ? 'bg-violet-500' : 'bg-stone-500'}`}
          animate={{
            x: [-100, 100, -100],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-[1400px]">
        <div className="col-span-1 md:col-span-5 md:col-start-8 text-right md:text-left">
          <TechnicalMono className="mb-6">03 / THE CONCEPT</TechnicalMono>
          <DisplaySerif className="mb-8">
            The Glass Buffer
          </DisplaySerif>
          <BodyText className="mb-8">
            Not a tracker. A Presence.
          </BodyText>
          <div className={`pl-6 border-l-2 ${colors.border}`}>
            <p className={`font-serif text-2xl md:text-3xl italic ${colors.textPrimary}`}>
              "AI trained in the art of saying nothing."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};