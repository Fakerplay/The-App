import React from 'react';
import { motion } from 'framer-motion';
import { TechnicalMono, DisplaySerif } from '../ui/Typography';
import { useTheme } from '../../context/ThemeContext';

const LogicCard: React.FC<{ 
  id: string; 
  label: string; 
  title: string; 
  description: string;
  children: React.ReactNode 
}> = ({ id, label, title, description, children }) => {
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

export const DeepDiveSection: React.FC = () => {
  const { colors, spacing } = useTheme();

  return (
    <section className={`w-full min-h-screen ${spacing.sectionPy} ${spacing.sectionPx} ${colors.background} flex flex-col justify-center border-t border-black/5 relative transition-colors duration-500`}>
      
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 pb-8 border-b border-black/10">
           <div className="flex flex-col gap-4">
             <TechnicalMono className="opacity-40">SECTION 03</TechnicalMono>
             <DisplaySerif>The Logic</DisplaySerif>
           </div>
           <div className="mt-8 md:mt-0 text-right">
             <TechnicalMono className="opacity-40 block mb-1">TECHNICAL SPECIFICATIONS V.1.0</TechnicalMono>
             <TechnicalMono className="opacity-30">STATUS: VERIFIED</TechnicalMono>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          
          {/* Card 1: Circadian Logic */}
          <LogicCard 
            id="01" 
            label="RHYTHM" 
            title="Circadian Logic" 
            description="Processing patterns adapt to biological time. Notification density mimics natural light cycles."
          >
             <div className="relative w-full h-full flex flex-col items-center justify-end overflow-hidden pb-4">
                
                {/* Data Bars (The Noise) */}
                <div className="absolute inset-x-8 bottom-8 h-32 flex items-end justify-between gap-[2px] z-0 opacity-40">
                    {Array.from({length: 16}).map((_, i) => (
                       <motion.div 
                         key={i}
                         className={`w-full ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'}`}
                         animate={{ height: [10, 30 + Math.random() * 40, 10] }}
                         transition={{ duration: 2 + Math.random(), repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                       />
                    ))}
                </div>

                {/* The Circadian Mask (The Tide) */}
                <motion.div 
                   className={`absolute inset-x-0 top-0 bg-gradient-to-b from-transparent to-transparent z-10 backdrop-blur-[1px]`}
                   animate={{ 
                       height: ["90%", "30%", "90%"], 
                   }}
                   transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className={`absolute inset-0 bg-gradient-to-b ${colors.background.replace('bg-', 'from-')} via-${colors.background.replace('bg-', '')} to-transparent opacity-90`} />
                   {/* The Horizon Line */}
                   <div className="absolute bottom-0 w-full h-[1px] bg-red-500/20" />
                </motion.div>

                {/* Celestial Indicator */}
                <motion.div 
                   className="absolute z-20 w-3 h-3 bg-red-500 rounded-full"
                   animate={{ 
                       bottom: ["10%", "70%", "10%"],
                       opacity: [0.3, 1, 0.3]
                   }}
                   transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Time Markers */}
                <div className="absolute bottom-2 inset-x-8 flex justify-between text-[8px] font-mono opacity-30 z-20">
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                </div>
             </div>
          </LogicCard>

          {/* Card 2: Semantic Gating */}
          <LogicCard 
            id="02" 
            label="FILTER" 
            title="Semantic Gating" 
            description="LLM-driven analysis determines urgency. Only high-entropy signals penetrate the filter."
          >
             <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
                {/* The Gate */}
                <div className="w-full h-[1px] bg-black/20 relative">
                   <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 border border-black/20 rounded-full flex items-center justify-center ${colors.background} z-10`}>
                      <div className={`w-1 h-1 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} rounded-full`} />
                   </div>
                </div>

                {/* Incoming Data Streams */}
                <div className="absolute inset-0 flex flex-col justify-between py-12 px-8 pointer-events-none">
                    {/* Stream 1 */}
                    <div className="w-full h-[1px] relative overflow-hidden opacity-30">
                       <motion.div 
                         className={`w-2 h-2 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} rounded-full absolute top-1/2 -translate-y-1/2`}
                         animate={{ left: ['0%', '45%'], opacity: [0, 1, 0] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                       />
                    </div>
                    
                    {/* Stream 2: Passing */}
                    <div className="w-full h-[1px] relative overflow-hidden">
                       <motion.div 
                         className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 -translate-y-1/2"
                         animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                         transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
                       />
                    </div>

                    {/* Stream 3 */}
                    <div className="w-full h-[1px] relative overflow-hidden opacity-30">
                       <motion.div 
                         className={`w-2 h-2 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} rounded-full absolute top-1/2 -translate-y-1/2`}
                         animate={{ left: ['0%', '45%'], opacity: [0, 1, 0] }}
                         transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
                       />
                    </div>
                </div>
             </div>
          </LogicCard>

          {/* Card 3: Privacy */}
          <LogicCard 
            id="03" 
            label="PRIVACY" 
            title="On-Device Core" 
            description="No cloud handshake. All inference occurs on the local neural engine. Your data is a closed loop."
          >
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Inner Core */}
                <div className={`relative z-10 w-16 h-16 ${colors.background} border border-black/20 flex items-center justify-center shadow-sm`}>
                    <div className="grid grid-cols-3 gap-1.5 p-1">
                      {Array.from({length: 9}).map((_, i) => (
                        <motion.div 
                          key={i} 
                          className={`w-1 h-1 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'}`}
                          animate={{ opacity: [0.2, 1, 0.2] }} 
                          transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                        />
                      ))}
                    </div>
                </div>

                {/* Rotating Shield Layers */}
                <motion.div
                    className="absolute z-0 w-28 h-28 border border-black/60 rounded-full border-t-transparent border-l-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute z-0 w-36 h-36 border-[0.5px] border-black/20 rounded-full border-dashed"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Incoming Particles Deflecting */}
                {[0, 120, 240].map((deg, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                        style={{ rotate: deg }}
                    >
                         <motion.div
                            className="absolute right-0 w-1.5 h-1.5 bg-red-500/80 rounded-full"
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 25, opacity: [0, 1, 0] }} 
                            transition={{ duration: 2, delay: i * 0.7, repeat: Infinity, ease: "easeOut" }}
                         />
                    </motion.div>
                ))}
             </div>
          </LogicCard>

          {/* Card 4: Sensor Fusion */}
          <LogicCard 
            id="04" 
            label="SENSORS" 
            title="Context Awareness" 
            description="Multimodal sensor fusion detects environment, activity, and social context to modulate interruption levels."
          >
             <div className="relative w-full h-full flex items-center justify-center">
               <motion.div 
                 className={`w-3 h-3 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} z-20 relative shadow-lg`}
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
               />
               
               {/* Orbits */}
               <motion.div 
                  className="absolute border border-black/10 rounded-full"
                  style={{ width: '80%', height: '30%' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               >
                   <div className="absolute top-0 left-1/2 w-2 h-2 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
               </motion.div>

               <motion.div 
                  className="absolute border border-black/10 rounded-full"
                  style={{ width: '80%', height: '30%' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
               >
                   <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-black/60 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50" />
               </motion.div>

               <motion.div 
                  className="absolute border border-black/10 rounded-full"
                  style={{ width: '30%', height: '80%' }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               >
                   <div className="absolute left-0 top-1/2 w-2 h-2 bg-red-500/60 rounded-full -translate-x-1/2 -translate-y-1/2" />
               </motion.div>

               <motion.div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               >
                  <motion.div 
                    className="w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
               </motion.div>
             </div>
          </LogicCard>

          {/* Card 5: Entropy */}
          <LogicCard 
            id="05" 
            label="ENTROPY" 
            title="Information Decay" 
            description="Unattended notifications follow a half-life protocol. If it wasn't important then, it disappears now."
          >
             <div className="relative w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-5 gap-2 w-32 h-32">
                    {Array.from({ length: 25 }).map((_, i) => (
                       <motion.div
                          key={i}
                          className={colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'}
                          initial={{ opacity: 1 }}
                          animate={{ opacity: [0.1, 0.8, 0] }}
                          transition={{
                             duration: 3 + Math.random() * 4,
                             repeat: Infinity,
                             repeatDelay: Math.random() * 2,
                             delay: Math.random() * 5,
                             ease: "easeInOut"
                          }}
                          style={{
                             width: '100%',
                             height: '100%',
                             borderRadius: '1px'
                          }}
                       />
                    ))}
                </div>
                <div className="absolute bottom-4 right-4 text-[8px] font-mono opacity-30 tracking-widest">
                    DECAY_RATE: 0.5
                </div>
             </div>
          </LogicCard>

          {/* Card 6: Protocol */}
          <LogicCard 
            id="06" 
            label="PROTOCOL" 
            title="Value Alignment" 
            description="The reward function is inverted. Success is defined by Time Well Spent, not Time Spent In App."
          >
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Center Target Line */}
                <div className="absolute w-[1px] h-32 bg-black/10" />

                {/* Oscillating Line */}
                <motion.div
                   className={`absolute w-[2px] h-16 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} origin-bottom`}
                   animate={{ 
                     x: [20, -15, 10, -5, 2, -1, 0, 0, 20],
                     rotate: [5, -4, 3, -2, 1, 0, 0, 0, 5]
                   }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Horizontal stabilizers */}
                <motion.div
                   className="absolute w-24 h-[1px] bg-red-500/40"
                   animate={{ rotate: [-10, 8, -5, 2, 0, 0, -10] }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="absolute top-8 right-8 text-[8px] font-mono text-red-500/60 tracking-widest">
                    ERROR: 0.00%
                </div>
             </div>
          </LogicCard>

        </div>
      </div>

    </section>
  );
};