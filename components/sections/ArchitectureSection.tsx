import React from 'react';
import { motion } from 'framer-motion';
import { DisplaySerif, TechnicalMono, BodyText } from '../ui/Typography';
import { useTheme } from '../../context/ThemeContext';

const CapabilityCard: React.FC<{ 
  id: string; 
  title: string; 
  description: string;
  label: string;
  children: React.ReactNode 
}> = ({ id, title, description, label, children }) => {
  const { colors } = useTheme();
  return (
    <motion.div 
      className="flex flex-col h-full group cursor-default"
      initial="idle"
      whileHover="hover"
    >
      {/* Visual Container */}
      <div className={`w-full aspect-square border-[0.5px] border-black/10 ${colors.background === 'bg-[#0A0A0A]' ? 'bg-white/5' : 'bg-[#FAFAFA]'} relative overflow-hidden flex items-center justify-center transition-colors duration-500 group-hover:bg-white/10 group-hover:border-black/30 mb-6`}>
        
        {/* Background Technical Grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: 0.03 }} />

        {/* Content */}
        <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
          {children}
        </div>
        
        {/* Dynamic Crosshair Overlay on Hover */}
        <motion.div 
          variants={{ hover: { opacity: 1 }, idle: { opacity: 0 } }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-red-500/10" />
          <div className="absolute top-0 left-1/2 h-full w-[0.5px] bg-red-500/10" />
        </motion.div>

        {/* Corner Markers */}
        <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-black/20" />
        <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-black/20" />
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-black/20" />
        <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-black/20" />
        
        {/* Scanning Line Effect */}
        <motion.div
          className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/5 to-transparent z-0"
          variants={{
            idle: { left: "-10%", opacity: 0 },
            hover: { 
              left: ["0%", "100%"],
              opacity: 1,
              transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
            }
          }}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-3 px-1">
        <div className="flex justify-between items-baseline border-t border-black/10 pt-4">
          <TechnicalMono className={`${colors.textSecondary} opacity-60 group-hover:text-red-600/80 transition-colors duration-300`}>
            {id} // {label}
          </TechnicalMono>
        </div>
        <h3 className={`font-sans text-2xl ${colors.textPrimary} leading-tight font-light tracking-tight group-hover:translate-x-1 transition-transform duration-300`}>{title}</h3>
        <p className={`font-sans text-sm ${colors.textPrimary} opacity-60 leading-relaxed max-w-[95%] group-hover:opacity-80 transition-colors duration-300`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const ArchitectureSection: React.FC = () => {
  const { colors, spacing } = useTheme();

  return (
    <section className={`w-full min-h-screen ${spacing.sectionPy} ${spacing.sectionPx} ${colors.background} flex flex-col justify-center border-t border-black/5 relative transition-colors duration-500`}>
      
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 pb-8 border-b border-black/10">
           <div className="flex flex-col gap-4">
             <TechnicalMono className="opacity-40">02 // SYSTEM CAPABILITIES</TechnicalMono>
             <DisplaySerif>The Architecture<br /> of Silence</DisplaySerif>
           </div>
           <div className="mt-8 md:mt-0 text-right">
             <TechnicalMono className="opacity-40 block mb-1">BLUEPRINT V.2.0</TechnicalMono>
             <TechnicalMono className="opacity-30">STATUS: DEPLOYED</TechnicalMono>
           </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          
          <CapabilityCard 
            id="01" 
            label="ISOLATION" 
            title="Zero-Cloud Processing" 
            description="Emotional resonance analysis happens entirely on-device. Data never leaves the physical boundary."
          >
             <div className="relative w-full h-full flex items-center justify-center bg-transparent">
                {/* The "Cloud" Noise */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                   {Array.from({length: 15}).map((_, i) => (
                      <div key={i} className={`absolute w-[2px] h-[2px] ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} rounded-full`} 
                        style={{
                           top: Math.random() * 100 + '%',
                           left: Math.random() * 100 + '%'
                        }} 
                      />
                   ))}
                </div>

                {/* The "Device" / Shielded Core */}
                <div className={`relative w-24 h-24 border ${colors.border} ${colors.background} z-10 flex items-center justify-center shadow-lg`}>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-current" />
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-current" />
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-current" />
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-current" />
                    
                    {/* Inner Activity */}
                    <div className="grid grid-cols-3 gap-1.5">
                        {Array.from({length: 9}).map((_, i) => (
                            <motion.div 
                                key={i}
                                className={`w-1 h-1 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'}`}
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                            />
                        ))}
                    </div>
                </div>

                {/* The "Air Gap" / Shield Ring */}
                 <motion.div 
                   className="absolute w-36 h-36 border border-dashed border-black/20 rounded-full"
                   animate={{ rotate: 360 }}
                   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                 <motion.div 
                   className="absolute w-44 h-44 border-[0.5px] border-black/5 rounded-full"
                   animate={{ rotate: -360 }}
                   transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                />
                
                {/* "Blocked" signals */}
                {[0, 90, 180, 270].map((deg, i) => (
                    <div
                        key={i}
                        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                        style={{ rotate: `${deg + 45}deg` }}
                    >
                         <motion.div 
                             className="w-1 h-1 bg-red-500 rounded-full absolute"
                             style={{ left: '10%' }}
                             animate={{ x: [0, 20], opacity: [0, 0.6, 0] }} 
                             transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity, ease: "easeOut" }}
                         />
                    </div>
                ))}
             </div>
          </CapabilityCard>

          <CapabilityCard 
            id="02" 
            label="TACTILE" 
            title="Haptic Language" 
            description="Communication via vibration patterns. 400 unique signals for urgency, emotion, and presence."
          >
             <div className="relative w-full h-full flex items-center justify-center">
                <div className={`w-3 h-3 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} rounded-full z-10 shadow-lg`} />
                
                {[0, 1, 2].map((i) => (
                  <motion.div
                     key={i}
                     className="absolute border border-black/40 rounded-full"
                     initial={{ width: 10, height: 10, opacity: 0.8 }}
                     animate={{ width: 180, height: 180, opacity: 0 }}
                     transition={{ duration: 3, delay: i * 0.8, repeat: Infinity, ease: "easeOut" }}
                  />
                ))}
             </div>
          </CapabilityCard>

          <CapabilityCard 
            id="03" 
            label="FILTER" 
            title="Adaptive Thresholds" 
            description="Filters noise based on biometric stress. The system tightens its walls when you need peace."
          >
             <div className="relative w-full h-full flex items-center justify-center gap-2">
                {/* Equalizer Bars */}
                {Array.from({ length: 8 }).map((_, i) => (
                   <motion.div 
                     key={i}
                     className="w-2 bg-black/20"
                     animate={{ height: [20, 60, 20], opacity: [0.3, 0.7, 0.3] }}
                     transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: i * 0.1 }}
                   />
                ))}
                {/* Horizontal Scan Line */}
                 <motion.div 
                  className="absolute w-full h-[1px] bg-red-500/50"
                  animate={{ top: ['20%', '80%', '20%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
             </div>
          </CapabilityCard>

        </div>
      </div>
    </section>
  );
};