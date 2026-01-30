import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, Page } from '../context/NavigationContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings } from 'lucide-react';
import { SettingsPanel } from './ui/SettingsPanel';
import { TimeOfDay } from '../types';

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

const AmbientBackground = () => {
  const { scrollY } = useScroll();
  const { timeOfDay } = useTheme();
  
  const y1 = useTransform(scrollY, [0, 2000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -200]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 45]);
  
  // Adjust visibility based on theme
  const isNight = timeOfDay === TimeOfDay.NIGHT;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
           style={{ y: y1, rotate }}
           className={`absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[120px] transition-all duration-1000 ease-in-out ${isNight ? 'bg-solace-cyan/5 opacity-20' : 'bg-stone-300/30 opacity-40 mix-blend-multiply'}`}
        />
        <motion.div 
           style={{ y: y2 }}
           className={`absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] transition-all duration-1000 ease-in-out ${isNight ? 'bg-purple-900/10 opacity-20' : 'bg-solace-brand/10 opacity-30 mix-blend-multiply'}`}
        />
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colors, isDimmed } = useTheme();
  const { currentPage, navigateTo } = useNavigation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'landing', label: 'Product' },
    { id: 'branding', label: 'Vision' },
    { id: 'design', label: 'Design' },
  ];

  return (
    <div className={`w-full min-h-screen transition-colors duration-1000 ease-in-out ${colors.background} overflow-x-hidden relative`}>
      {/* Ambient Background */}
      <AmbientBackground />

      {/* Dimming Overlay */}
      <motion.div 
        className="fixed inset-0 bg-black pointer-events-none z-50 mix-blend-multiply"
        animate={{ opacity: isDimmed ? 0.3 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* Navbar - Absolute positioning to scroll away */}
      <nav className="absolute top-0 left-0 w-full z-[60] px-6 py-6 md:px-12 md:py-8 flex justify-between items-start text-white mix-blend-difference pointer-events-none max-w-[1440px] left-1/2 -translate-x-1/2"> 
          <div className="pointer-events-auto flex flex-col items-start gap-1 cursor-pointer" onClick={() => navigateTo('landing')}>
             <div className="flex items-center gap-3">
               <div className="relative z-10 text-white">
                 <SolaceLogo />
               </div>
               <h1 className="font-sans font-bold text-lg tracking-tight leading-none translate-y-[1px]">SOLACE</h1>
             </div>
             <p className="font-mono text-[9px] opacity-60 tracking-[0.2em] ml-9">VER. 1.0.4 // BETA</p>
          </div>
          
          <div className="pointer-events-auto flex gap-6 items-center">
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center gap-6 mr-4 border-r border-white/20 pr-6">
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`font-mono text-[10px] tracking-widest uppercase transition-opacity ${currentPage === item.id ? 'opacity-100 border-b border-white' : 'opacity-50 hover:opacity-80'}`}
                  >
                     {item.label}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setIsSettingsOpen(true)}
                className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
              >
                 <span className="hidden md:block font-mono text-[10px] tracking-widest uppercase opacity-60 group-hover:opacity-100">Config</span>
                 <Settings size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>

              <div className="hidden md:flex flex-col items-end gap-1">
                 <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solace-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-solace-cyan"></span>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest uppercase">System Active</span>
                 </div>
                 <span className="font-mono text-[9px] opacity-40 tracking-wider">ALL SYSTEMS NORMAL</span>
              </div>
          </div>
      </nav>

      {/* Fixed Grid Layout - 3 Column Structure */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center px-4 md:px-8">
         <div className={`w-full max-w-[1440px] h-full border-l border-r ${colors.border} relative transition-colors duration-500`}>
            {/* Center Line */}
            <div className={`absolute left-1/2 top-0 bottom-0 w-[1px] ${colors.border} -translate-x-1/2 opacity-30 transition-colors duration-500`} />
            
            {/* Thirds Lines (Subtle) */}
            <div className={`absolute left-[33.33%] top-0 bottom-0 w-[1px] ${colors.border} opacity-10 transition-colors duration-500 hidden md:block`} />
            <div className={`absolute right-[33.33%] top-0 bottom-0 w-[1px] ${colors.border} opacity-10 transition-colors duration-500 hidden md:block`} />
         </div>
      </div>
      
      <main className="relative z-10 w-full h-full">
        {children}
      </main>
    </div>
  );
};