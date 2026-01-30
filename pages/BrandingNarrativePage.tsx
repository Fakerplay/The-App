import React from 'react';
import { motion } from 'framer-motion';
import { DisplaySerif, TechnicalMono, BodyText } from '../components/ui/Typography';
import { useTheme } from '../context/ThemeContext';

export const BrandingNarrativePage = () => {
  const { colors, spacing } = useTheme();

  const sections = [
    {
      id: "01",
      label: "THE SHIFT",
      title: "From Extraction to Retention",
      content: "The first era of the social web was built on extraction: mining user attention for ad revenue. This model has reached saturation. Users are churning, burnout is endemic, and regulatory pressure is mounting. Solace represents the second era: Retention through Peace. We don't sell attention; we sell the absence of noise."
    },
    {
      id: "02",
      label: "THE IDENTITY",
      title: "Quiet Confidence",
      content: "Our brand voice is low-frequency, high-fidelity. We do not use exclamation points. We do not use urgency triggers. Our visual identity utilizes negative space not as emptiness, but as a luxury asset. In a world of screaming neon, silence is the ultimate status symbol."
    },
    {
      id: "03",
      label: "VALUE",
      title: "The Metric of Silence",
      content: "We are deprecating 'Time on Site' as a KPI. Our north star metric is 'Time Well Spent' (TWS). Initial beta testing shows that users willing to pay a premium for Solace exhibit 3x higher retention rates than ad-supported competitors. We are building a high-LTV, subscription-based sanctuary."
    }
  ];

  return (
    <div className={`w-full ${colors.background} transition-colors duration-500`}>
      
      {/* Header Section */}
      <section className={`w-full ${spacing.sectionPy} ${spacing.sectionPx} border-b ${colors.border} flex flex-col items-center text-center`}>
        <div className="max-w-4xl w-full pt-12">
           <div className="flex justify-center mb-8">
              <span className={`px-3 py-1 rounded-full border ${colors.border} ${colors.textSecondary} text-[10px] tracking-widest uppercase`}>Internal Briefing</span>
           </div>
           <TechnicalMono className="mb-6 opacity-60">STRATEGIC VISION / FINAL REVIEW</TechnicalMono>
           <DisplaySerif className="text-5xl md:text-8xl mb-8 leading-[0.9]">The Silent Revolution</DisplaySerif>
           <div className={`w-px h-24 ${colors.border} mx-auto bg-solace-cyan/50`} />
        </div>
      </section>

      {/* Grid Sections */}
      {sections.map((section, idx) => (
         <section key={idx} className={`w-full ${spacing.sectionPy} ${spacing.sectionPx} border-b ${colors.border}`}>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
               {/* Left Column: Metadata + Title */}
               <div className="md:col-span-5 flex flex-col">
                  <TechnicalMono className="text-solace-cyan mb-4">{section.id} // {section.label}</TechnicalMono>
                  <h2 className={`font-sans text-3xl md:text-4xl ${colors.textPrimary} tracking-tight leading-tight`}>
                    {section.title}
                  </h2>
               </div>

               {/* Right Column: Body */}
               <div className="md:col-span-7 md:pt-10">
                  <BodyText className="text-lg md:text-xl leading-relaxed opacity-80">
                    {section.content}
                  </BodyText>
               </div>
            </div>
         </section>
      ))}

      {/* Footer Quote */}
      <section className={`w-full ${spacing.sectionPy} ${spacing.sectionPx} bg-black/5 flex justify-center items-center relative overflow-hidden border-b ${colors.border}`}>
         <div className="absolute inset-0 bg-solace-cyan/5 opacity-30" />
         <div className="max-w-4xl text-center relative z-10">
            <DisplaySerif className="text-4xl md:text-6xl italic mb-8">"Silence is the new luxury."</DisplaySerif>
            <TechnicalMono className="opacity-40">PROJECT SILENCE_01 // 2026 ROADMAP</TechnicalMono>
         </div>
      </section>
    </div>
  );
};