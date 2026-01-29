import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { SettingsPanel } from './ui/SettingsPanel';

const SolaceLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <motion.g 
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="origin-center"
    >
      <path d="M12 12L12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12Z" fill="currentColor" />
      <path d="M12 12L18.9282 16C20.0328 14.0871 19.1373 11.634 17.2244 10.5295C15.3115 9.42496 12.8584 10.3204 11.7538 12.2333L12 12Z" fill="currentColor" transform="rotate(120 12 12)" />
      <path d="M12 12L5.0718 16C3.96726 17.9129 4.8627 20.366 6.7756 21.4705C8.6885 22.575 11.1416 21.6796 12.2462 19.7667L12 12Z" fill="currentColor" transform="rotate(240 12 12)" />
    </motion.g>
    <circle cx="12" cy="12" r="2" fill="currentColor" className="text-white mix-blend-difference"/>
  </svg>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colors, isDimmed, timeOfDay } = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className={`w-full min-h-screen transition-colors duration-1000 ease-in-out ${colors.background} overflow-hidden relative`}>
      {/* Dimming Overlay */}
      <motion.div 
        className="fixed inset-0 bg-black pointer-events-none z-50 mix-blend-multiply"
        animate={{ opacity: isDimmed ? 0.3 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* Navbar - Fixed & Aligned */}
      <nav className="fixed top-0 left-0 w-full z-[60] px-8 py-6 md:px-12 md:py-8 flex justify-between items-start text-current pointer-events-none"> 
          {/* Logo Section */}
          <div className={`pointer-events-auto flex flex-col items-start gap-1 ${colors.textPrimary}`}>
             <div className="flex items-center gap-3">
               <div className="relative z-10">
                 <SolaceLogo />
               </div>
               <h1 className="font-sans font-bold text-lg tracking-tight leading-none translate-y-[1px]">SOLACE</h1>
             </div>
             <p className={`font-mono text-[9px] opacity-60 tracking-[0.2em] ml-9 ${colors.textSecondary}`}>VER. 1.0.4 // BETA</p>
          </div>
          
          <div className="pointer-events-auto flex gap-6 items-center">
              {/* Settings Trigger */}
              <button 
                onClick={() => setIsSettingsOpen(true)}
                className={`flex items-center gap-2 group ${colors.textSecondary} hover:${colors.textPrimary} transition-colors`}
              >
                 <span className="hidden md:block font-mono text-[10px] tracking-widest uppercase opacity-60 group-hover:opacity-100">Config</span>
                 <Settings size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>

              {/* Status Section - Aligned Right */}
              <div className="hidden md:flex flex-col items-end gap-1">
                 <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className={`font-mono text-[10px] tracking-widest uppercase ${colors.textPrimary}`}>System Active</span>
                 </div>
                 <span className={`font-mono text-[9px] opacity-40 tracking-wider ${colors.textSecondary}`}>ALL SYSTEMS NORMAL</span>
              </div>
          </div>
      </nav>

      {/* Grid Lines - subtle structural guide */}
      <div className="fixed inset-0 pointer-events-none z-0 px-8 md:px-12 flex justify-between">
         <div className="w-[1px] h-full bg-black/5" />
         <div className="w-[1px] h-full bg-black/5" />
      </div>
      
      <main className="relative z-10 w-full h-full">
        {children}
      </main>
    </div>
  );
};