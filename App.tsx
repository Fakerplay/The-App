import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { NarrativeSection } from './components/sections/NarrativeSection';
import { DeepDiveSection } from './components/sections/DeepDiveSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { ProductRitualSection } from './components/sections/ProductRitualSection';
import { FooterSection } from './components/sections/FooterSection';

const SolaceLandingPage = () => {
  return (
    <Layout>
      <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
        <HeroSection />
        <NarrativeSection />
        <ArchitectureSection />
        <DeepDiveSection />
        <ProductRitualSection />
        <FooterSection />
      </div>
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