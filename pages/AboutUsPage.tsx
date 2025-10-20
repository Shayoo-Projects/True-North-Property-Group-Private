import React from 'react';
import { PageHeader } from '../components/Header';
import MissionSection from '../components/about/MissionSection';
import TeamSection from '../components/about/TeamSection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';
import AboutCTA from '../components/about/AboutCTA';
import AboutUsHeaderImg from '../media/AboutUsHeader.jpg';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        backgroundImage={AboutUsHeaderImg}
        title={<>About <span className="text-[#00a0b0]">True North Property Group</span></>}
        subtitle="Your trusted guides in the journey of real estate."
      />
      <MissionSection />
      <TeamSection />
      <WhyChooseUsSection />
      <AboutCTA />
    </>
  );
};

export default AboutUsPage;