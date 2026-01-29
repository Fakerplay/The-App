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
              Every notification extracts value. <br/>
              We have optimized for engagement <br/>
              at the cost of sanity.
            </p>
         </div>
      </div>

      {/* Right: The Signal */}
      <div className="h-full flex flex-col justify-center p-8 md:p-24 bg-white/5">
        <div className="max-w-xl">
           <TechnicalMono className="mb-8">02 / THE SIGNAL</TechnicalMono>
           
           <div className="mb-8 relative">
             {/* Ambient Aura Background */}
             <motion.div 
                className="absolute -inset-12 bg-gradient-to-r from-blue-50/0 via-indigo-50/40 to-blue-50/0 blur-3xl rounded-full mix-blend-multiply"
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
             />

             <motion.div
               animate={{ 
                 opacity: [0.7, 1, 0.7],
                 filter: ["blur(1px)", "blur(0px)", "blur(1px)"],
                 scale: [0.98, 1.02, 0.98],
                 y: [0, -4, 0],
               }}
               transition={{ 
                 duration: 6, 
                 repeat: Infinity, 
                 ease: "easeInOut" 
               }}
               className="relative z-10"
             >
               <DisplaySerif>
                 Ambient Resonance
               </DisplaySerif>
             </motion.div>
           </div>

           <BodyText className="mb-12">
             Most AI asks. <span className="font-medium">SOLACE observes.</span>
           </BodyText>
           <BodyText>
             We are moving from "Command-Line" mental health to a presence that understands without interrogation.
           </BodyText>

           <div className="mt-24 flex items-center space-x-4">
             <div className={`w-3 h-3 rounded-full ${colors.accent === 'text-yellow-700' ? 'bg-yellow-700' : colors.accent === 'text-blue-900' ? 'bg-blue-900' : 'bg-violet-400'} animate-pulse`} />
             <TechnicalMono>System Online</TechnicalMono>
           </div>
        </div>
      </div>

    </div>
  );
};