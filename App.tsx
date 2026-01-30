import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSolutionSection } from './components/sections/ProblemSolutionSection';
import { NarrativeSection } from './components/sections/NarrativeSection';
import { DeepDiveSection } from './components/sections/DeepDiveSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { FoundersNoteSection } from './components/sections/FoundersNoteSection';
import { ProductRitualSection } from './components/sections/ProductRitualSection';
import { FooterSection } from './components/sections/FooterSection';

const SolaceLandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <NarrativeSection />
      <ArchitectureSection />
      <DeepDiveSection />
      <FoundersNoteSection />
      <ProductRitualSection />
      <FooterSection />
    </Layout>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <SolaceLandingPage />
    </ThemeProvider>
  );
}