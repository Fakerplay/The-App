import React from 'react';
import { motion } from 'framer-motion';
import { DisplaySerif, TechnicalMono } from '../ui/Typography';
import { useTheme } from '../../context/ThemeContext';

export const ProblemSolutionSection: React.FC = () => {
  const { colors, spacing } = useTheme();

  return (
    <section className={`w-full min-h-[80vh] grid grid-cols-1 md:grid-cols-2 relative ${colors.background} border-b ${colors.border} transition-colors duration-500`}>
      
      {/* Left Column: The Problem (Burnout) */}
      <div className={`grid content-center ${spacing.sectionPx} py-20 border-b md:border-b-0 md:border-r ${colors.border}`}>
        <div className="max-w-xl w-full justify-self-center md:justify-self-end md:pr-12 text-left">
            <TechnicalMono className="mb-6 text-red-500/70">01 // THE DIAGNOSIS</TechnicalMono>
            <h2 className={`font-sans text-3xl md:text-5xl font-light mb-8 ${colors.textPrimary} tracking-tight leading-[1.1]`}>
              Digital Burnout. <br/>
              <span className="opacity-40">The Infinite Scroll.</span>
            </h2>
            
            <div className="space-y-6">
                <p className={`font-sans text-lg ${colors.textPrimary} opacity-70 leading-relaxed`}>
                    Every ping is a demand. Every notification is a debt. You are living in a state of constant, low-grade emergency.
                </p>
                <div className="pl-4 border-l border-red-500/30">
                    <p className={`font-mono text-xs ${colors.textSecondary} uppercase tracking-wider`}>
                        AVG SCREEN TIME: 6H 42M <br/>
                        AVG ATTENTION SPAN: 8.25S <br/>
                        CORTISOL LEVELS: ELEVATED
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Right Column: The Solution (Solace) */}
      <div className={`grid content-center ${spacing.sectionPx} py-20 relative overflow-hidden`}>
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-solace-cyan/5 opacity-50 pointer-events-none" />
        
        <div className="max-w-xl w-full justify-self-center md:justify-self-start md:pl-12 relative z-10 text-left">
            <TechnicalMono className="mb-6 text-solace-cyan">02 // THE CURE</TechnicalMono>
            <h2 className={`font-sans text-3xl md:text-5xl font-light mb-8 ${colors.textPrimary} tracking-tight leading-[1.1]`}>
              The Pause. <br/>
              <span className="text-solace-cyan">The Deep Breath.</span>
            </h2>
            
            <div className="space-y-6">
                <p className={`font-sans text-lg ${colors.textPrimary} opacity-70 leading-relaxed`}>
                    Solace is the anti-algorithm. It doesn't want you to stay. It optimizes for your departure. 
                </p>
                
                <div className="mt-8 p-6 border border-solace-cyan/20 bg-solace-cyan/5 rounded-sm">
                    <p className={`font-serif text-xl italic ${colors.textPrimary}`}>
                       "Technology that respects the sanctity of your silence."
                    </p>
                </div>
            </div>
        </div>
      </div>

    </section>
  );
};