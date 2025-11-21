import React from 'react';
import SectionHero from './SectionHero';
import SectionHowItWorks from './SectionHowItWorks';
import SectionPayback from './SectionPayback';
import SectionContactCTA from './SectionContactCTA';

const Home = () => {
  return (
    <div className="min-h-screen">
      <SectionHero />
      <SectionHowItWorks />
      <SectionPayback />
      <SectionContactCTA />
    </div>
  );
};

export default Home;
