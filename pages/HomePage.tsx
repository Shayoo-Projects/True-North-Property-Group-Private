
import React from 'react';
import Hero from '../components/home/Hero';
import OurStory from '../components/home/OurStory';
import OurExpertise from '../components/home/OurExpertise';
import ContactUs from '../components/home/ContactUs';
interface HomePageProps {
  onNavigate?: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <OurStory />
      <OurExpertise />
      <ContactUs />
    </>
  );
};

export default HomePage;
