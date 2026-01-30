import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Layout } from './components/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSolutionSection } from './components/sections/ProblemSolutionSection';
import { NarrativeSection } from './components/sections/NarrativeSection';
import { DeepDiveSection } from './components/sections/DeepDiveSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { FoundersNoteSection } from './components/sections/FoundersNoteSection';
import { ProductRitualSection } from './components/sections/ProductRitualSection';
import { FooterSection } from './components/sections/FooterSection';
import { BrandingNarrativePage } from './pages/BrandingNarrativePage';
import { DesignNotePage } from './pages/DesignNotePage';

// Extracted Landing Page Content
const LandingPageContent: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <NarrativeSection />
      <ArchitectureSection />
      <DeepDiveSection />
      <FoundersNoteSection />
      <ProductRitualSection />
      <FooterSection />
    </>
  );
};

// Main Content Wrapper that switches based on navigation state
const MainContent: React.FC = () => {
  const { currentPage } = useNavigation();

  return (
    <Layout>
      {currentPage === 'landing' && <LandingPageContent />}
      {currentPage === 'branding' && <BrandingNarrativePage />}
      {currentPage === 'design' && <DesignNotePage />}
    </Layout>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <MainContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}