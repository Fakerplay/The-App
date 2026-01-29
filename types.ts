export enum TimeOfDay {
  MORNING = 'MORNING', // 06:00 - 10:00
  DAY = 'DAY',         // 11:00 - 17:00
  NIGHT = 'NIGHT',     // 18:00 - 05:00
}

export interface ThemeColors {
  background: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  border: string;
}

export type FontSize = 'small' | 'medium' | 'large';
export type LayoutDensity = 'comfortable' | 'compact';

export type SlideId = 'monolith' | 'intelligence' | 'concept' | 'blackout' | 'styleguide';

export interface SlideProps {
  isActive: boolean;
}