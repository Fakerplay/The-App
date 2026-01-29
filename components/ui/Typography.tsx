import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FontSize } from '../../types';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const getDisplaySerifSize = (size: FontSize) => {
  switch (size) {
    case 'small': return 'text-3xl md:text-5xl lg:text-6xl';
    case 'large': return 'text-5xl md:text-7xl lg:text-8xl';
    default: return 'text-4xl md:text-6xl lg:text-7xl';
  }
};

const getTechnicalMonoSize = (size: FontSize) => {
  switch (size) {
    case 'small': return 'text-[8px] md:text-[9px]';
    case 'large': return 'text-[10px] md:text-[11px]';
    default: return 'text-[9px] md:text-[10px]';
  }
};

const getBodyTextSize = (size: FontSize) => {
  switch (size) {
    case 'small': return 'text-xs md:text-sm';
    case 'large': return 'text-base md:text-lg';
    default: return 'text-sm md:text-base';
  }
};

export const DisplaySerif: React.FC<TextProps> = ({ children, className = '' }) => {
  const { colors, fontSize } = useTheme();
  return (
    <h1 className={`font-sans ${getDisplaySerifSize(fontSize)} font-light tracking-tighter leading-[1.1] ${colors.textPrimary} transition-all duration-300 ${className}`}>
      {children}
    </h1>
  );
};

export const TechnicalMono: React.FC<TextProps> = ({ children, className = '' }) => {
  const { colors, fontSize } = useTheme();
  return (
    <p className={`font-mono ${getTechnicalMonoSize(fontSize)} uppercase tracking-[0.2em] leading-normal ${colors.textSecondary} transition-all duration-300 ${className}`}>
      {children}
    </p>
  );
};

export const BodyText: React.FC<TextProps> = ({ children, className = '' }) => {
  const { colors, fontSize } = useTheme();
  return (
    <p className={`font-sans ${getBodyTextSize(fontSize)} leading-7 font-normal ${colors.textPrimary} opacity-80 max-w-prose transition-all duration-300 ${className}`}>
      {children}
    </p>
  );
};

export const Label: React.FC<TextProps> = ({ children, className = '' }) => {
  const { colors } = useTheme();
  return (
    <span className={`font-mono text-[8px] uppercase tracking-widest ${colors.textSecondary} opacity-50 transition-colors duration-300 ${className}`}>
      {children}
    </span>
  );
};