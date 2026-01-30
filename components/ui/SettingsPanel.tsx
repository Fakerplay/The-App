import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon, Cloud, Type, LayoutTemplate } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { TimeOfDay, FontSize, LayoutDensity } from '../../types';
import { TechnicalMono } from './Typography';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const { 
    timeOfDay, setTimeOfDay,
    fontSize, setFontSize,
    layoutDensity, setLayoutDensity,
    colors
  } = useTheme();

  const isNight = timeOfDay === TimeOfDay.NIGHT;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed right-0 top-0 h-full w-full md:w-[400px] ${isNight ? 'bg-[#111] border-l border-white/10' : 'bg-white border-l border-black/5'} z-[100] p-8 shadow-2xl overflow-y-auto transition-colors duration-500`}
          >
            <div className="flex justify-between items-center mb-12">
              <TechnicalMono className="!text-sm">SYSTEM CONFIGURATION</TechnicalMono>
              <button onClick={onClose} className={`p-2 rounded-full hover:bg-black/5 transition-colors ${colors.textPrimary}`}>
                <X size={20} />
              </button>
            </div>

            <div className="space-y-12">
              {/* Theme Section */}
              <section>
                <div className="flex items-center gap-2 mb-6 opacity-60">
                   <Sun size={14} className={colors.textPrimary} />
                   <TechnicalMono>ENVIRONMENT</TechnicalMono>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: TimeOfDay.MORNING, label: 'MIST', icon: Cloud },
                    { id: TimeOfDay.DAY, label: 'CONCRETE', icon: Sun },
                    { id: TimeOfDay.NIGHT, label: 'OBSIDIAN', icon: Moon },
                  ].map((theme) => {
                    const isActive = timeOfDay === theme.id;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => setTimeOfDay(theme.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-sm border transition-all duration-300 ${
                          isActive 
                            ? `border-black/40 ${isNight ? 'bg-white/10 border-white/40' : 'bg-black/5'}` 
                            : `border-transparent hover:bg-black/5 ${isNight ? 'hover:bg-white/5' : ''}`
                        }`}
                      >
                        <theme.icon size={20} className={`mb-2 ${colors.textPrimary} ${!isActive && 'opacity-40'}`} />
                        <span className={`text-[10px] font-mono tracking-wider ${colors.textPrimary} ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                          {theme.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Typography Section */}
              <section>
                <div className="flex items-center gap-2 mb-6 opacity-60">
                   <Type size={14} className={colors.textPrimary} />
                   <TechnicalMono>TYPOGRAPHY SCALE</TechnicalMono>
                </div>
                <div className="flex bg-black/5 rounded-sm p-1 relative">
                  {(['small', 'medium', 'large'] as FontSize[]).map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`flex-1 py-2 text-[10px] font-mono uppercase tracking-wider transition-all duration-300 rounded-sm z-10 ${
                         fontSize === size 
                           ? `${isNight ? 'bg-white/20 text-white' : 'bg-white text-black shadow-sm'}` 
                           : `${colors.textSecondary} opacity-60 hover:opacity-100`
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </section>

              {/* Density Section */}
              <section>
                <div className="flex items-center gap-2 mb-6 opacity-60">
                   <LayoutTemplate size={14} className={colors.textPrimary} />
                   <TechnicalMono>LAYOUT DENSITY</TechnicalMono>
                </div>
                <div className="flex flex-col gap-2">
                   {(['comfortable', 'compact'] as LayoutDensity[]).map((density) => (
                      <button
                        key={density}
                        onClick={() => setLayoutDensity(density)}
                        className={`flex items-center justify-between p-4 border rounded-sm transition-all duration-300 ${
                           layoutDensity === density
                             ? `${colors.border} ${isNight ? 'bg-white/5' : 'bg-black/5'}`
                             : 'border-transparent hover:border-black/5'
                        }`}
                      >
                         <span className={`font-sans text-sm ${colors.textPrimary}`}>{density.charAt(0).toUpperCase() + density.slice(1)}</span>
                         <div className={`w-3 h-3 rounded-full border border-current ${colors.textPrimary} flex items-center justify-center`}>
                            {layoutDensity === density && <div className="w-1.5 h-1.5 bg-current rounded-full" />}
                         </div>
                      </button>
                   ))}
                </div>
              </section>
              
              <div className={`pt-12 mt-12 border-t ${colors.border}`}>
                 <TechnicalMono className="opacity-40 text-center">SESSION ID: SILENCE_01_RC2</TechnicalMono>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};