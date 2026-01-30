import React from 'react';
import { motion } from 'framer-motion';
import { DisplaySerif, TechnicalMono } from '../ui/Typography';
import { useTheme } from '../../context/ThemeContext';

export const FoundersNoteSection: React.FC = () => {
  const { colors, spacing } = useTheme();

  return (
    <section className={`w-full ${spacing.sectionPy} ${spacing.sectionPx} ${colors.background} border-b ${colors.border} transition-colors duration-500 flex justify-center`}>
      <div className="max-w-2xl w-full">
        
        <div className="flex flex-col items-center text-center mb-12">
            <div className="w-[1px] h-12 bg-solace-cyan/40 mb-8" />
            <TechnicalMono className="opacity-40 mb-4">A NOTE FROM THE CREATORS</TechnicalMono>
            <DisplaySerif className="text-4xl md:text-5xl">Why we built Solace</DisplaySerif>
        </div>

        <div className={`font-sans text-lg md:text-xl leading-relaxed ${colors.textPrimary} opacity-80 space-y-8 text-center md:px-8`}>
            <p>
                We were tired.
            </p>
            <p>
                Tired of the constant noise. Tired of algorithms designed to hijack our dopamine receptors. Tired of technology that felt like a slot machine in our pockets.
            </p>
            <p>
                Big Tech builds AI to keep you clicking. They measure success in "Time on Site" and "Daily Active Users." They want you addicted.
            </p>
            <p>
                We define success differently. If you use Solace for 5 minutes and then put your phone down to go for a walk, watch the sunset, or talk to a friend—we've succeeded.
            </p>
            <p>
                Solace isn't just an app. It's a quiet rebellion against the attention economy.
            </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
            <div className={`w-32 h-[1px] ${colors.border}`} />
            <p className={`font-mono text-xs ${colors.textPrimary} tracking-widest uppercase opacity-60`}>
                Shubham Shinde
            </p>
            <p className={`font-serif italic text-sm ${colors.textSecondary}`}>
                Founder, Solace AI
            </p>
        </div>

      </div>
    </section>
  );
};