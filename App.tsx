import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DrugDetail } from './components/DrugDetail';
import { ComparisonTable } from './components/ComparisonTable';
import { CombinationSection } from './components/CombinationSection';
import { Footer } from './components/Footer';
import { DRUG_PROFILES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Render each drug profile */}
        <div className="bg-slate-50/50 space-y-4">
           {DRUG_PROFILES.map((profile) => (
             <DrugDetail key={profile.id} data={profile} />
           ))}
        </div>

        <ComparisonTable />
        <CombinationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;