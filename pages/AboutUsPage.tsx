import React from 'react';
import { PageHeader } from '../components/Header';
import MissionSection from '../components/about/MissionSection';
import TeamSection from '../components/about/TeamSection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';
import AboutCTA from '../components/about/AboutCTA';

interface AboutUsPageProps {
  onNavigate?: (page: string) => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <>
      <PageHeader 
        backgroundImage="/media/AboutUsHeader.jpg"
        title={<>About <span className="text-[#00a0b0]">True North</span></>}
        subtitle="Your trusted guides in the journey of real estate."
      />
      <MissionSection />
      <TeamSection />
      <WhyChooseUsSection />
      <AboutCTA onNavigate={onNavigate} />
    </>
  );
};

export default AboutUsPage;