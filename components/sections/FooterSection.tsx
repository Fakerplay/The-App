import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DisplaySerif, TechnicalMono } from '../ui/Typography';
import { ArrowRight, Lock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { TimeOfDay } from '../../types';

const PatternBlock: React.FC = () => {
  const { colors } = useTheme();
  return (
    <div className={`flex gap-2 md:gap-3 h-32 items-end mb-24 opacity-50 ${colors.textPrimary}`}>
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div 
          key={i} 
          className="flex flex-col justify-end gap-[3px] w-[2px] relative overflow-hidden rounded-full"
          animate={{ 
            height: [
              `${20 + (i * 5) % 30}%`, 
              `${60 + (i * 9) % 40}%`, 
              `${15 + (i * 2) % 20}%`,
              `${85 + (i * 4) % 15}%`,
              `${40 + (i * 7) % 30}%`
            ]
          }}
          transition={{ 
            duration: 3 + (i % 3) * 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            delay: i * 0.1
          }}
        >
          {/* Outer Glow/Blur for the edges */}
          <div className="absolute inset-0 bg-current blur-[3px] opacity-40 z-0" />
          
          {/* Inner sharp dots */}
          <div className="relative z-10 flex flex-col justify-end gap-[3px] w-full h-full">
            {Array.from({ length: 40 }).map((_, j) => (
              <div key={j} className="w-[2px] h-[2px] min-h-[2px] bg-current rounded-full shrink-0 opacity-90" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const FooterSection: React.FC = () => {
  const { colors, spacing, timeOfDay } = useTheme();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const isValid = email.includes('@') && email.includes('.');
  const isNight = timeOfDay === TimeOfDay.NIGHT;

  // Helper to extract hex color
  const getHexColor = (bgClass: string) => {
    const match = bgClass.match(/#([0-9a-fA-F]{6})/);
    return match ? `#${match[1]}` : 'transparent';
  };
  const bgHex = getHexColor(colors.background);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <footer className={`w-full ${spacing.sectionPy} px-6 ${colors.background} flex flex-col items-center justify-center text-center relative overflow-hidden transition-colors duration-500`}>
      
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: `linear-gradient(to top, ${bgHex}, transparent)` }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full mb-12">
        {/* The Pattern Block */}
        <PatternBlock />

        <DisplaySerif className="mb-8 tracking-tight">
          Join the Waitlist
        </DisplaySerif>
        
        <TechnicalMono className="mb-16 opacity-40 tracking-widest">
          LIMITED TO 1,000 FOUNDING MEMBERS
        </TechnicalMono>

        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4">
          <div className="relative group">
            <input 
              type="email" 
              placeholder="email@address.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'success'}
              className={`w-full ${isNight ? 'bg-white/10 placeholder-white/30' : 'bg-black/5 placeholder-black/30'} border ${colors.border} py-4 px-6 font-mono text-sm ${colors.textPrimary} focus:outline-none focus:border-solace-cyan/40 focus:bg-white focus:text-black transition-all duration-300 rounded-sm text-center`}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">
              <Lock size={14} className={colors.textPrimary} />
            </div>
          </div>

          <motion.button
            disabled={!isValid || status !== 'idle'}
            whileHover={isValid && status === 'idle' ? { scale: 1.02 } : {}}
            whileTap={isValid && status === 'idle' ? { scale: 0.98 } : {}}
            className={`w-full py-4 px-8 font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 rounded-sm ${
              status === 'success' 
                ? 'bg-green-600 text-white border-transparent' 
                : isValid 
                  ? 'bg-solace-cyan text-black hover:opacity-90 shadow-[0_0_15px_rgba(0,209,255,0.3)] border-transparent' 
                  : 'bg-transparent text-black/30 border border-black/10 cursor-not-allowed'
            }`}
          >
            {status === 'loading' ? (
              <span className="animate-pulse">PROCESSING...</span>
            ) : status === 'success' ? (
              <span>ACCESS REQUESTED</span>
            ) : (
              <>
                REQUEST ACCESS <ArrowRight size={14} />
              </>
            )}
          </motion.button>
        </form>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
        <div className={`mt-12 flex flex-col md:flex-row gap-6 md:gap-12 border-t ${colors.border} pt-8 opacity-60 text-center md:text-left`}>
          <TechnicalMono className="opacity-50 hover:text-solace-cyan cursor-pointer transition-colors">PRIVATE BY DESIGN</TechnicalMono>
          <TechnicalMono className="opacity-50 hover:text-solace-cyan cursor-pointer transition-colors">QUIET BY CHOICE</TechnicalMono>
          <TechnicalMono className="opacity-50 hover:text-solace-cyan cursor-pointer transition-colors">© 2026 SOLACE by Shubham Shinde</TechnicalMono>
        </div>
      </div>

    </footer>
  );
};