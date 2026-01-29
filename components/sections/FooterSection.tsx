import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DisplaySerif, TechnicalMono } from '../ui/Typography';
import { ArrowRight, Lock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const PatternBlock: React.FC = () => {
  const { colors } = useTheme();
  return (
    <div className={`flex gap-2 md:gap-3 h-32 items-end mb-24 opacity-50 mix-blend-multiply ${colors.textPrimary}`}>
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
  const { colors, spacing } = useTheme();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const isValid = email.includes('@') && email.includes('.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <footer className={`w-full ${spacing.sectionPy} px-6 ${colors.background} flex flex-col items-center justify-center text-center border-t border-black/5 relative overflow-hidden transition-colors duration-500`}>
      
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${colors.background.replace('bg-', 'from-')} to-transparent pointer-events-none opacity-50`} />

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
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
              className={`w-full bg-black/5 border border-black/5 py-4 px-6 font-mono text-sm ${colors.textPrimary} placeholder-black/30 focus:outline-none focus:border-black/20 focus:bg-white transition-all duration-300 rounded-sm`}
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
                  ? `${colors.background === 'bg-[#0A0A0A]' ? 'bg-white text-black hover:bg-white/90' : 'bg-[#1A1A1A] text-white hover:bg-black'}` 
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

        <div className="mt-40 flex gap-12 border-t border-black/5 pt-8 opacity-60">
          <TechnicalMono className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">PRIVATE BY DESIGN</TechnicalMono>
          <TechnicalMono className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">QUIET BY CHOICE</TechnicalMono>
          <TechnicalMono className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">© 2024 SOLACE</TechnicalMono>
        </div>
      </div>

    </footer>
  );
};
