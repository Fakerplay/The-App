import React from 'react';
import { motion } from 'framer-motion';
import { DisplaySerif, TechnicalMono, BodyText } from '../ui/Typography';
import { useTheme } from '../../context/ThemeContext';
import { TimeOfDay } from '../../types';

const CapabilityCard: React.FC<{ 
  id: string; 
  title: string; 
  description: string;
  label: string;
  children: React.ReactNode 
}> = ({ id, title, description, label, children }) => {
  const { colors, timeOfDay } = useTheme();
  const isNight = timeOfDay === TimeOfDay.NIGHT;
  
  return (
    <motion.div 
      className="flex flex-col h-full group cursor-pointer"
      initial="idle"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {/* Visual Container */}
      <motion.div 
        variants={{ 
          idle: { y: 0, scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }, 
          hover: { y: -8, scale: 1.02, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)" } 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`w-full aspect-square border-[0.5px] ${colors.border} ${isNight ? 'bg-white/5' : 'bg-[#FAFAFA]'} relative overflow-hidden flex items-center justify-center transition-all duration-500 mb-6`}
      >
        
        {/* Background Technical Grid */}
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(${isNight ? '#FFFFFF' : '#000000'} 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px', opacity: 0.03 }} />

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
          <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-solace-cyan/10" />
          <div className="absolute top-0 left-1/2 h-full w-[0.5px] bg-solace-cyan/10" />
        </motion.div>

        {/* Corner Markers */}
        <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-current opacity-20 group-hover:border-solace-cyan/40 group-hover:opacity-100 transition-all" />
        <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-current opacity-20 group-hover:border-solace-cyan/40 group-hover:opacity-100 transition-all" />
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-current opacity-20 group-hover:border-solace-cyan/40 group-hover:opacity-100 transition-all" />
        <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-current opacity-20 group-hover:border-solace-cyan/40 group-hover:opacity-100 transition-all" />
        
        {/* Scanning Line Effect */}
        <motion.div
          className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-solace-cyan/30 to-transparent z-0"
          variants={{
            idle: { left: "-10%", opacity: 0 },
            hover: { 
              left: ["0%", "100%"],
              opacity: 1,
              transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
            }
          }}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div 
        className="flex flex-col gap-3 px-1 text-left"
        variants={{
            idle: { x: 0 },
            hover: { x: 4 }
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={`flex justify-between items-baseline border-t ${colors.border} pt-4 group-hover:border-solace-cyan/20 transition-colors`}>
          <TechnicalMono className={`${colors.textSecondary} opacity-60 group-hover:text-solace-cyan transition-colors duration-300`}>
            {id} // {label}
          </TechnicalMono>
        </div>
        <h3 className={`font-sans text-2xl ${colors.textPrimary} leading-tight font-light tracking-tight`}>{title}</h3>
        <p className={`font-sans text-sm ${colors.textPrimary} opacity-60 leading-relaxed max-w-[95%] group-hover:opacity-80 transition-colors duration-300`}>
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const ArchitectureSection: React.FC = () => {
  const { colors, spacing, timeOfDay } = useTheme();
  const isNight = timeOfDay === TimeOfDay.NIGHT;
  const visualBg = isNight ? 'bg-white' : 'bg-black';

  return (
    <section className={`w-full min-h-screen ${spacing.sectionPy} ${spacing.sectionPx} ${colors.background} flex flex-col justify-center border-b ${colors.border} relative transition-colors duration-500`}>
      
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Section Header */}
        <div className={`flex flex-col items-center text-center mb-24 pb-8 border-b ${colors.border} w-full`}>
           <div className="flex flex-col gap-4 items-center">
             <TechnicalMono className="opacity-40">02 // SYSTEM CAPABILITIES</TechnicalMono>
             <DisplaySerif>The Architecture<br /> of Silence</DisplaySerif>
           </div>
           <div className="mt-8 flex gap-8">
             <TechnicalMono className="opacity-40 block mb-1">BLUEPRINT V.2.0</TechnicalMono>
             <TechnicalMono className="text-solace-cyan opacity-80">STATUS: DEPLOYED</TechnicalMono>
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
                <div className="absolute inset-0 overflow-hidden opacity-20">
                   {Array.from({length: 15}).map((_, i) => (
                      <div key={i} className={`absolute w-[2px] h-[2px] ${visualBg} rounded-full`} 
                        style={{
                           top: Math.random() * 100 + '%',
                           left: Math.random() * 100 + '%'
                        }} 
                      />
                   ))}
                </div>

                <div className={`relative w-24 h-24 border ${colors.border} ${colors.background} z-10 flex items-center justify-center shadow-lg group-hover:border-solace-cyan/50 transition-colors`}>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-current text-solace-cyan/50" />
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-current text-solace-cyan/50" />
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-current text-solace-cyan/50" />
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-current text-solace-cyan/50" />
                    
                    <div className="grid grid-cols-3 gap-1.5">
                        {Array.from({length: 9}).map((_, i) => (
                            <motion.div 
                                key={i}
                                className={`w-1 h-1 ${visualBg}`}
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                            />
                        ))}
                    </div>
                </div>

                 <motion.div 
                   className={`absolute w-36 h-36 border border-dashed ${isNight ? 'border-white/20' : 'border-black/20'} rounded-full`}
                   animate={{ rotate: 360 }}
                   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                 <motion.div 
                   className={`absolute w-44 h-44 border-[0.5px] ${isNight ? 'border-white/5' : 'border-black/5'} rounded-full`}
                   animate={{ rotate: -360 }}
                   transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                />
                
                {[0, 90, 180, 270].map((deg, i) => (
                    <div
                        key={i}
                        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                        style={{ rotate: `${deg + 45}deg` }}
                    >
                         <motion.div 
                             className="w-1 h-1 bg-solace-cyan rounded-full absolute"
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
                <div className={`w-3 h-3 bg-solace-cyan rounded-full z-10 shadow-[0_0_15px_rgba(0,209,255,0.4)]`} />
                
                {[0, 1, 2].map((i) => (
                  <motion.div
                     key={i}
                     className={`absolute border ${isNight ? 'border-white/40' : 'border-black/40'} rounded-full`}
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
                {Array.from({ length: 8 }).map((_, i) => (
                   <motion.div 
                     key={i}
                     className={`w-2 ${isNight ? 'bg-white/20' : 'bg-black/20'}`}
                     animate={{ height: [20, 60, 20], opacity: [0.3, 0.7, 0.3] }}
                     transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: i * 0.1 }}
                   />
                ))}
                 <motion.div 
                  className="absolute w-full h-[1px] bg-solace-cyan/50"
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