import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechnicalMono } from '../components/ui/Typography';
import { Fingerprint } from 'lucide-react';

export const BlackoutExpression: React.FC = () => {
  const [isHolding, setIsHolding] = useState(false);
  const [breathState, setBreathState] = useState<'inhale' | 'hold' | 'exhale' | 'wait'>('wait');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isHolding) {
      // Simple 4-4-4 box breathing simulation for UI feedback
      const cycle = async () => {
        setBreathState('inhale');
        await new Promise(r => setTimeout(r, 4000));
        if(!isHolding) return;
        setBreathState('hold');
        await new Promise(r => setTimeout(r, 4000));
        if(!isHolding) return;
        setBreathState('exhale');
        await new Promise(r => setTimeout(r, 4000));
      };
      cycle();
      interval = setInterval(cycle, 12000);
    } else {
      setBreathState('wait');
    }
    return () => clearInterval(interval);
  }, [isHolding]);

  return (
    <div className="w-full h-screen bg-black text-stone-300 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-1000">
      
      <div className="absolute top-12 w-full text-center">
         <TechnicalMono className="opacity-40">EXPRESSION A: THE BLACKOUT</TechnicalMono>
      </div>

      <AnimatePresence>
        {!isHolding && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/4 text-center max-w-lg px-6"
          >
             <h2 className="font-serif text-3xl mb-4 text-white">Solace is silent.</h2>
             <p className="font-sans text-stone-500">
               Today, we are practicing what we preach. <br/>
               Hold the button below to synchronize.
             </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breathing Interaction */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.button
          className="w-24 h-24 rounded-full border border-stone-800 bg-stone-950 flex items-center justify-center relative outline-none"
          onMouseDown={() => setIsHolding(true)}
          onMouseUp={() => setIsHolding(false)}
          onTouchStart={() => setIsHolding(true)}
          onTouchEnd={() => setIsHolding(false)}
          whileTap={{ scale: 0.95 }}
        >
          <Fingerprint className={`w-8 h-8 ${isHolding ? 'text-white' : 'text-stone-700'} transition-colors duration-500`} />
          
          {/* Ripple Effect */}
          {isHolding && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border border-white/20"
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
              />
               <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ scale: [1, 3], opacity: [0.3, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeOut" }}
              />
            </>
          )}
        </motion.button>
        
        <div className="mt-12 h-8 font-mono text-xs tracking-widest text-stone-500 uppercase">
          {isHolding ? (
             <motion.span
                key={breathState}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
             >
               {breathState === 'inhale' ? 'Inhale...' : 
                breathState === 'hold' ? 'Hold...' : 
                breathState === 'exhale' ? 'Exhale...' : '...'}
             </motion.span>
          ) : (
            <span className="opacity-30">Press and Hold</span>
          )}
        </div>
      </div>
      
      {/* Background Ambience Shift */}
      <motion.div 
        className="absolute inset-0 bg-stone-900 pointer-events-none"
        animate={{ opacity: isHolding ? 0.8 : 0 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};