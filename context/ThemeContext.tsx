import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { TimeOfDay, ThemeColors, FontSize, LayoutDensity } from '../types';

interface ThemeContextType {
  timeOfDay: TimeOfDay;
  colors: ThemeColors;
  isDimmed: boolean;
  fontSize: FontSize;
  layoutDensity: LayoutDensity;
  spacing: { sectionPy: string; sectionPx: string };
  setDimmed: (dim: boolean) => void;
  setTimeOfDay: (time: TimeOfDay) => void;
  setFontSize: (size: FontSize) => void;
  setLayoutDensity: (density: LayoutDensity) => void;
  cycleTime: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define themes based on TimeOfDay
const THEMES: Record<TimeOfDay, ThemeColors> = {
  [TimeOfDay.MORNING]: {
    background: 'bg-[#F2F2F2]',
    textPrimary: 'text-[#1A1A1A]',
    textSecondary: 'text-[#5A5A5A]',
    accent: 'text-stone-600',
    border: 'border-[#D1D1D1]'
  },
  [TimeOfDay.DAY]: {
    background: 'bg-[#E0E0E0]', // Slightly darker than morning, "Concrete" feel
    textPrimary: 'text-[#0A0A0A]',
    textSecondary: 'text-[#4A4A4A]',
    accent: 'text-black',
    border: 'border-[#C0C0C0]'
  },
  [TimeOfDay.NIGHT]: {
    background: 'bg-[#050505]', // Deeper black for better contrast
    textPrimary: 'text-[#FAFAFA]', // Brighter white for better readability
    textSecondary: 'text-[#A0A0A0]', // Increased contrast for secondary text
    accent: 'text-white',
    border: 'border-[#2A2A2A]' // Subtle but visible border
  }
};

// Fallback/Default if specific override is needed (e.g. Landing default)
const LANDING_THEME: ThemeColors = {
  background: 'bg-white',
  textPrimary: 'text-[#1A1A1A]',
  textSecondary: 'text-[#4A4A4A]',
  accent: 'text-black',
  border: 'border-[#E5E5E5]'
};

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>(TimeOfDay.MORNING);
  const [isDimmed, setDimmed] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [layoutDensity, setLayoutDensity] = useState<LayoutDensity>('comfortable');

  const cycleTime = () => {
    setTimeOfDay(prev => {
      if (prev === TimeOfDay.MORNING) return TimeOfDay.DAY;
      if (prev === TimeOfDay.DAY) return TimeOfDay.NIGHT;
      return TimeOfDay.MORNING;
    });
  };

  const colors = useMemo(() => {
    // For this specific landing page design, the user might want the "White" look by default 
    // but requested "Color Themes" customization.
    // We will use the TimeOfDay themes now to satisfy the request.
    // If we want the original white look as "Morning", we can adjust THEMES[TimeOfDay.MORNING].
    // Let's use the defined themes but map 'Morning' to the original white-ish look for continuity.
    if (timeOfDay === TimeOfDay.MORNING) return LANDING_THEME;
    return THEMES[timeOfDay];
  }, [timeOfDay]);

  const spacing = useMemo(() => {
    return layoutDensity === 'compact' 
      ? { sectionPy: 'py-16 md:py-20', sectionPx: 'px-6 md:px-8' }
      : { sectionPy: 'py-24 md:py-32', sectionPx: 'px-6 md:px-12 lg:px-24' }; // Optimized for mobile
  }, [layoutDensity]);

  return (
    <ThemeContext.Provider value={{ 
      timeOfDay, 
      colors, 
      isDimmed,
      fontSize,
      layoutDensity,
      spacing,
      setDimmed,
      setTimeOfDay,
      setFontSize,
      setLayoutDensity,
      cycleTime
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};