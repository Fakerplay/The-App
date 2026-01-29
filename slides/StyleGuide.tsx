import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { TimeOfDay } from '../types';
import { DisplaySerif, TechnicalMono, BodyText, Label } from '../components/ui/Typography';
import { motion } from 'framer-motion';

export const StyleGuide: React.FC = () => {
  const { colors, setTimeOfDay, timeOfDay } = useTheme();

  return (
    <div className="w-full min-h-screen p-8 md:p-24 overflow-y-auto">
      <div className="max-w-6xl mx-auto pb-24">
        
        <header className="mb-24 border-b border-stone-500/20 pb-8">
           <TechnicalMono className="mb-4">SYSTEM ARCHITECTURE</TechnicalMono>
           <DisplaySerif>The Quiet System</DisplaySerif>
        </header>

        {/* 01. Typography */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
           <div className="md:col-span-3">
             <Label>01 // TYPOGRAPHY</Label>
           </div>
           <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-12">
             <div>
               <h3 className={`font-mono text-xs uppercase mb-4 ${colors.textSecondary}`}>Primary (The Brain)</h3>
               <p className={`font-mono text-3xl ${colors.textPrimary}`}>ABC Diatype Mono</p>
               <p className={`font-mono text-sm mt-2 opacity-50 ${colors.textPrimary}`}>Used for data, citations, and precision.</p>
             </div>
             <div>
               <h3 className={`font-mono text-xs uppercase mb-4 ${colors.textSecondary}`}>Secondary (The Soul)</h3>
               <p className={`font-serif text-5xl ${colors.textPrimary}`}>Canela Display</p>
               <p className={`font-sans text-sm mt-2 opacity-50 ${colors.textPrimary}`}>Used for narrative and human resonance.</p>
             </div>
           </div>
        </section>

        {/* 02. Color Palette */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
           <div className="md:col-span-3">
             <Label>02 // CIRCADIAN SUITE</Label>
             <p className={`mt-4 text-sm ${colors.textSecondary} max-w-[200px]`}>
               The palette adapts to the user's local time, respecting biological rhythms.
             </p>
           </div>
           <div className="md:col-span-9">
              <div className="grid grid-cols-3 gap-4 h-40 mb-8">
                 <button onClick={() => setTimeOfDay(TimeOfDay.MORNING)} className="group relative h-full bg-[#F2F2F2] border border-stone-200 p-4 text-left transition-all hover:scale-105">
                    <span className="font-mono text-[10px] text-stone-500 uppercase">06:00 - 10:00</span>
                    <p className="font-serif text-stone-800 mt-2">Mist</p>
                    {timeOfDay === TimeOfDay.MORNING && <div className="absolute bottom-4 right-4 w-2 h-2 bg-stone-800 rounded-full" />}
                 </button>
                 <button onClick={() => setTimeOfDay(TimeOfDay.DAY)} className="group relative h-full bg-[#8C8C8C] border border-stone-600 p-4 text-left transition-all hover:scale-105">
                    <span className="font-mono text-[10px] text-stone-900 uppercase">11:00 - 17:00</span>
                    <p className="font-serif text-[#0A0A0A] mt-2">Concrete</p>
                     {timeOfDay === TimeOfDay.DAY && <div className="absolute bottom-4 right-4 w-2 h-2 bg-black rounded-full" />}
                 </button>
                 <button onClick={() => setTimeOfDay(TimeOfDay.NIGHT)} className="group relative h-full bg-[#0A0A0A] border border-stone-800 p-4 text-left transition-all hover:scale-105">
                    <span className="font-mono text-[10px] text-stone-500 uppercase">18:00 - 05:00</span>
                    <p className="font-serif text-stone-200 mt-2">Obsidian</p>
                     {timeOfDay === TimeOfDay.NIGHT && <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full" />}
                 </button>
              </div>
              <TechnicalMono className="text-center w-full">Click panels above to simulate time-shift</TechnicalMono>
           </div>
        </section>

        {/* 03. Visual Metaphor */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
           <div className="md:col-span-3">
             <Label>03 // GAUSSIAN THRESHOLD</Label>
           </div>
           <div className="md:col-span-9 grid grid-cols-2 gap-8">
              <div className="relative aspect-video overflow-hidden bg-stone-200">
                  <img src="https://picsum.photos/800/600?grayscale" alt="Sharp" className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-mono text-xs">STANDARD AI</div>
              </div>
              <div className="relative aspect-video overflow-hidden bg-stone-200">
                  <img src="https://picsum.photos/800/600?grayscale" alt="Blurred" className="w-full h-full object-cover blur-[40px] opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-2xl drop-shadow-lg">Solace</div>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};