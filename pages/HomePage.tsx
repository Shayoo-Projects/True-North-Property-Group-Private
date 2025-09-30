
import React from 'react';
import Hero from '../components/home/Hero';
import OurStory from '../components/home/OurStory';
import OurExpertise from '../components/home/OurExpertise';
import ContactUs from '../components/home/ContactUs';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <OurStory />
      <OurExpertise />
      <ContactUs />
    </>
  );
};

export default HomePage;
