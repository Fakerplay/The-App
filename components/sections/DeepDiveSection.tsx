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
      className="flex flex-col h-full group cursor-pointer"
      initial="idle"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <motion.div 
        variants={{ 
          idle: { y: 0, scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }, 
          hover: { y: -8, scale: 1.02, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)" } 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`w-full aspect-square border-[0.5px] ${colors.border} ${colors.background === 'bg-[#0A0A0A]' ? 'bg-white/5' : 'bg-[#FAFAFA]'} relative overflow-hidden flex items-center justify-center transition-all duration-500 mb-6`}
      >
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: 0.03 }} />
        <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
          {children}
        </div>
        <motion.div 
          variants={{ hover: { opacity: 1 }, idle: { opacity: 0 } }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-solace-cyan/20" />
          <div className="absolute top-0 left-1/2 h-full w-[0.5px] bg-solace-cyan/20" />
        </motion.div>
        <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-current opacity-20 group-hover:border-solace-cyan/50 group-hover:opacity-100 transition-colors" />
        <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-current opacity-20 group-hover:border-solace-cyan/50 group-hover:opacity-100 transition-colors" />
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-current opacity-20 group-hover:border-solace-cyan/50 group-hover:opacity-100 transition-colors" />
        <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-current opacity-20 group-hover:border-solace-cyan/50 group-hover:opacity-100 transition-colors" />
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

export const DeepDiveSection: React.FC = () => {
  const { colors, spacing } = useTheme();
  const getHexColor = (bgClass: string) => {
    const match = bgClass.match(/#([0-9a-fA-F]{6})/);
    return match ? `#${match[1]}` : 'transparent';
  };
  const bgHex = getHexColor(colors.background);

  return (
    <section className={`w-full min-h-screen ${spacing.sectionPy} ${spacing.sectionPx} ${colors.background} flex flex-col justify-center border-b ${colors.border} relative transition-colors duration-500`}>
      <div className="max-w-screen-xl mx-auto w-full">
        <div className={`flex flex-col items-center justify-center mb-24 pb-8 border-b ${colors.border} text-center`}>
           <div className="flex flex-col gap-4 items-center">
             <TechnicalMono className="opacity-40">SECTION 03</TechnicalMono>
             <DisplaySerif>The Logic</DisplaySerif>
           </div>
           <div className="mt-8 flex gap-6">
             <TechnicalMono className="opacity-40 block mb-1">TECHNICAL SPECIFICATIONS V.1.0</TechnicalMono>
             <TechnicalMono className="text-solace-cyan opacity-80">STATUS: VERIFIED</TechnicalMono>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          <LogicCard id="01" label="RHYTHM" title="Circadian Logic" description="Processing patterns adapt to biological time. Notification density mimics natural light cycles.">
             <div className="relative w-full h-full flex flex-col items-center justify-end overflow-hidden pb-4">
                <div className="absolute inset-x-8 bottom-8 h-32 flex items-end justify-between gap-[2px] z-0 opacity-40">
                    {Array.from({length: 16}).map((_, i) => (
                       <motion.div key={i} className={`w-full ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} rounded-t-sm`} animate={{ height: [10, 30 + Math.random() * 40, 10] }} transition={{ duration: 2 + Math.random(), repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
                    ))}
                </div>
                <motion.div className={`absolute inset-x-0 top-0 z-10 backdrop-blur-[1px]`} animate={{ height: ["90%", "30%", "90%"], }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
                    <div className="absolute inset-0 opacity-90" style={{ background: `linear-gradient(to bottom, ${bgHex}, ${bgHex}, transparent)` }} />
                   <div className="absolute bottom-0 w-full h-[1px] bg-solace-cyan/20" />
                </motion.div>
                <motion.div className="absolute z-20 w-3 h-3 bg-solace-cyan rounded-full" animate={{ bottom: ["10%", "70%", "10%"], opacity: [0.3, 1, 0.3] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute bottom-2 inset-x-8 flex justify-between text-[8px] font-mono opacity-30 z-20"><span>06:00</span><span>12:00</span><span>18:00</span></div>
             </div>
          </LogicCard>

          <LogicCard id="02" label="FILTER" title="Semantic Gating" description="LLM-driven analysis determines urgency. Only high-entropy signals penetrate the filter.">
             <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
                <div className="w-full h-[1px] bg-black/20 relative">
                   <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 border border-black/20 rounded-full flex items-center justify-center ${colors.background} z-10`}>
                      <div className={`w-1 h-1 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} rounded-full`} />
                   </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-between py-12 px-8 pointer-events-none">
                    <div className="w-full h-[1px] relative overflow-hidden opacity-30">
                       <motion.div className={`w-2 h-2 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} rounded-full absolute top-1/2 -translate-y-1/2`} animate={{ left: ['0%', '45%'], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                    </div>
                    <div className="w-full h-[1px] relative overflow-hidden">
                       <motion.div className="w-2 h-2 bg-solace-cyan rounded-full absolute top-1/2 -translate-y-1/2" animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }} transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }} />
                    </div>
                    <div className="w-full h-[1px] relative overflow-hidden opacity-30">
                       <motion.div className={`w-2 h-2 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} rounded-full absolute top-1/2 -translate-y-1/2`} animate={{ left: ['0%', '45%'], opacity: [0, 1, 0] }} transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "linear" }} />
                    </div>
                </div>
             </div>
          </LogicCard>

          <LogicCard id="03" label="PRIVACY" title="On-Device Core" description="No cloud handshake. All inference occurs on the local neural engine. Your data is a closed loop.">
             <div className="relative w-full h-full flex items-center justify-center">
                <div className={`relative z-10 w-16 h-16 ${colors.background} border border-black/20 flex items-center justify-center shadow-sm`}>
                    <div className="grid grid-cols-3 gap-1.5 p-1">
                      {Array.from({length: 9}).map((_, i) => (
                        <motion.div key={i} className={`w-1 h-1 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'}`} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }} />
                      ))}
                    </div>
                </div>
                <motion.div className="absolute z-0 w-28 h-28 border border-black/60 rounded-full border-t-transparent border-l-transparent" animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
                <motion.div className="absolute z-0 w-36 h-36 border-[0.5px] border-black/20 rounded-full border-dashed" animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
                {[0, 120, 240].map((deg, i) => (
                    <motion.div key={i} className="absolute w-full h-full flex items-center justify-center pointer-events-none" style={{ rotate: deg }}>
                         <motion.div className="absolute right-0 w-1.5 h-1.5 bg-solace-cyan/80 rounded-full" initial={{ x: 60, opacity: 0 }} animate={{ x: 25, opacity: [0, 1, 0] }} transition={{ duration: 2, delay: i * 0.7, repeat: Infinity, ease: "easeOut" }} />
                    </motion.div>
                ))}
             </div>
          </LogicCard>

          <LogicCard id="04" label="SENSORS" title="Context Awareness" description="Multimodal sensor fusion detects environment, activity, and social context to modulate interruption levels.">
             <div className="relative w-full h-full flex items-center justify-center">
               <motion.div className={`w-3 h-3 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} z-20 relative shadow-lg`} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
               <motion.div className="absolute border border-black/10 rounded-full" style={{ width: '80%', height: '30%' }} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                   <div className="absolute top-0 left-1/2 w-2 h-2 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
               </motion.div>
               <motion.div className="absolute border border-black/10 rounded-full" style={{ width: '80%', height: '30%' }} animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                   <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-black/60 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50" />
               </motion.div>
               <motion.div className="absolute border border-black/10 rounded-full" style={{ width: '30%', height: '80%' }} animate={{ rotate: 180 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                   <div className="absolute left-0 top-1/2 w-2 h-2 bg-solace-cyan rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(0,210,255,0.5)]" />
               </motion.div>
               <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" animate={{ rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                  <motion.div className="w-[1px] h-full bg-gradient-to-b from-transparent via-solace-cyan/30 to-transparent" animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} />
               </motion.div>
             </div>
          </LogicCard>

          <LogicCard id="05" label="ENTROPY" title="Information Decay" description="Unattended notifications follow a half-life protocol. If it wasn't important then, it disappears now.">
             <div className="relative w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-5 gap-2 w-32 h-32">
                    {Array.from({ length: 25 }).map((_, i) => (
                       <motion.div key={i} className={colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} initial={{ opacity: 1 }} animate={{ opacity: [0.1, 0.8, 0] }} transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, repeatDelay: Math.random() * 2, delay: Math.random() * 5, ease: "easeInOut" }} style={{ width: '100%', height: '100%', borderRadius: '1px' }} />
                    ))}
                </div>
                <div className="absolute bottom-4 right-4 text-[8px] font-mono opacity-30 tracking-widest">DECAY_RATE: 0.5</div>
             </div>
          </LogicCard>

          <LogicCard id="06" label="PROTOCOL" title="Value Alignment" description="The reward function is inverted. Success is defined by Time Well Spent, not Time Spent In App.">
             <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-[1px] h-32 bg-black/10" />
                <motion.div className={`absolute w-[2px] h-16 ${colors.textPrimary === 'text-[#E5E5E5]' ? 'bg-white' : 'bg-black'} origin-bottom`} animate={{ x: [20, -15, 10, -5, 2, -1, 0, 0, 20], rotate: [5, -4, 3, -2, 1, 0, 0, 0, 5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="absolute w-24 h-[1px] bg-solace-cyan/40" animate={{ rotate: [-10, 8, -5, 2, 0, 0, -10] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                <div className="absolute top-8 right-8 text-[8px] font-mono text-solace-cyan/60 tracking-widest">ERROR: 0.00%</div>
             </div>
          </LogicCard>

        </div>
      </div>
    </section>
  );
};