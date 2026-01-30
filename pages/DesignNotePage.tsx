import React from 'react';
import { motion } from 'framer-motion';
import { DisplaySerif, TechnicalMono, BodyText } from '../components/ui/Typography';
import { useTheme } from '../context/ThemeContext';
import { TimeOfDay } from '../types';

export const DesignNotePage: React.FC = () => {
  const { colors, spacing, timeOfDay } = useTheme();
  const isNight = timeOfDay === TimeOfDay.NIGHT;

  const visualSystems = [
    {
      category: "TYPOGRAPHY",
      choice: "Serif + Mono",
      reason: "The Human & The Machine",
      detail: "We pair Cormorant Garamond (the imperfection of human history) with Space Mono (the precision of code). This tension represents the dialogue between biological emotion and artificial intelligence."
    },
    {
      category: "COLOR",
      choice: "Circadian Adaptive",
      reason: "Living Interface",
      detail: "Static interfaces are unnatural. Solace breathes with the sun. It is bright when you need clarity (Morning) and turns to deep Obsidian (Night) to induce melatonin production, not suppress it."
    },
    {
      category: "MOTION",
      choice: "Subthreshold Physics",
      reason: "Emotional Silence",
      detail: "No bounce. No spring. No jarring cuts. Transitions are linear and slow (1000ms+), mimicking the settling of dust or the flow of fog. It teaches the user's nervous system to slow down."
    }
  ];

  return (
    <div className={`w-full ${colors.background} transition-colors duration-500`}>
      
      {/* Header */}
      <section className={`w-full ${spacing.sectionPy} ${spacing.sectionPx} border-b ${colors.border} flex flex-col items-center text-center`}>
           <div className="max-w-4xl pt-12">
             <div className="flex justify-center mb-6">
                <span className={`px-3 py-1 rounded-full border ${colors.border} ${colors.textSecondary} text-[10px] tracking-widest uppercase`}>Design Note 001</span>
             </div>
             <TechnicalMono className="mb-6 opacity-60">THEORY OF CONSTRUCTION</TechnicalMono>
             <DisplaySerif className="mb-12 text-5xl md:text-7xl leading-tight">
               Design as a form of <br /> quiet vigilance.
             </DisplaySerif>
           </div>
      </section>

      {/* Strategy Section */}
      <section className={`w-full ${spacing.sectionPy} ${spacing.sectionPx} border-b ${colors.border}`}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <div className="md:col-span-5">
                <TechnicalMono className="text-solace-cyan mb-4">01 // THE STRATEGY</TechnicalMono>
                <h3 className={`font-serif text-3xl md:text-4xl ${colors.textPrimary} italic opacity-80 leading-tight`}>
                   Building an <br/>absence.
                </h3>
            </div>
            <div className="md:col-span-7 space-y-8 md:pt-10">
                <BodyText className="text-lg md:text-xl">
                    Most wellness apps look clinical—cold blues, sterile whites, and illustrations of happy people doing yoga. They treat stress as a medical condition. Alternatively, social apps look like casinos—bright red badges, infinite feeds, and high-contrast triggers designed to spike dopamine.
                </BodyText>
                <BodyText className="text-lg md:text-xl">
                    Solace rejects both. We chose a visual direction that feels like a "Quiet Companion." It is not a tool you use; it is an environment you inhabit. We leveraged heavy negative space not just for aesthetics, but to create "Cognitive Breathing Room." Every pixel of whitespace is a pause for the user's brain.
                </BodyText>
            </div>
        </div>
      </section>

      {/* Visual System Section */}
      <section className={`w-full ${spacing.sectionPy} ${spacing.sectionPx} border-b ${colors.border}`}>
        <div className="max-w-screen-xl mx-auto">
             <div className="mb-16 border-b border-solace-cyan/20 pb-4 flex justify-between items-end">
                <TechnicalMono className="text-solace-cyan">02 // THE VISUAL SYSTEM</TechnicalMono>
                <TechnicalMono className="opacity-30 hidden md:block">COMPONENTS</TechnicalMono>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {visualSystems.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className={`flex flex-col gap-6 p-8 border ${colors.border} ${isNight ? 'bg-white/5' : 'bg-black/5'}`}
                    >
                         <div className="flex justify-between items-center">
                            <TechnicalMono className="opacity-40">{item.category}</TechnicalMono>
                            <div className={`w-2 h-2 rounded-full ${isNight ? 'bg-white/20' : 'bg-black/20'}`} />
                         </div>
                         
                         <div>
                            <h3 className={`font-serif text-2xl ${colors.textPrimary} mb-2`}>{item.choice}</h3>
                            <TechnicalMono className="text-solace-cyan text-[10px]">{item.reason}</TechnicalMono>
                         </div>
                         
                         <div className={`w-full h-px ${colors.border}`} />

                         <p className={`font-sans text-sm ${colors.textPrimary} opacity-70 leading-relaxed`}>{item.detail}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Restraint Section */}
      <section className={`w-full ${spacing.sectionPy} ${spacing.sectionPx} border-b ${colors.border}`}>
         <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
             <div className="md:col-span-5">
                <TechnicalMono className="opacity-60 mb-2">03 // THE RESTRAINT</TechnicalMono>
                <div className={`w-12 h-px ${colors.textPrimary} opacity-20 my-6`} />
                <h3 className={`font-sans text-4xl md:text-5xl ${colors.textPrimary} font-light tracking-tight`}>What we <br/>left out.</h3>
             </div>
             <div className="md:col-span-7 p-8 md:p-16 bg-solace-cyan/5 border border-solace-cyan/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-solace-cyan/10 blur-[50px] rounded-full pointer-events-none" />
                <BodyText className="text-lg md:text-xl relative z-10">
                    The greatest act of design in Solace is what isn't there. We removed the "Feed." We removed the "Like" button. We removed the "Streak" counter. 
                    <br/><br/>
                    These are engagement hacks. They are the visual language of addiction. By omitting them, we prove our alignment with the user. We demonstrate visual judgment by refusing to clutter the user's mind with gamification. We trust that the silence is enough.
                </BodyText>
             </div>
         </div>
      </section>

       <footer className={`w-full py-16 ${spacing.sectionPx} text-center opacity-40`}>
            <TechnicalMono>SOLACE AI // DESIGN MANIFESTO V.1</TechnicalMono>
        </footer>
    </div>
  );
};