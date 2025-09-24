
import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import OurExpertise from '../components/OurExpertise';
import FeaturesList from '../components/FeaturesList';
interface HomePageProps {
  onNavigate?: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <OurStory />
      <OurExpertise />
      <FeaturesList />
    </>
  );
};

export default HomePage;
