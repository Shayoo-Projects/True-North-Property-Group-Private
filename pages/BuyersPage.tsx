
import React from 'react';
import { PageHeader } from '../components/Header';
import BuyerAbout from '../components/buyerpage/BuyerAbout';
import BuyerJourney from '../components/buyerpage/BuyerJourney';
import BuyerPartner from '../components/buyerpage/BuyerPartner';
import BuyerPricing from '../components/buyerpage/BuyerPricing';
import BuyerHeaderImg from '../media/BuyerHeader.jpg';


const BuyersPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        backgroundImage={BuyerHeaderImg}
        title={<>Buy a Home in <span className="text-[#00a0b0]">VA/DC/MD</span></>
        }
        subtitle="Your journey to homeownership starts here. Let us guide you every step of the way."
      />
      <BuyerAbout />
      <BuyerJourney />
      <BuyerPartner />
      <BuyerPricing />
    </>
  );
};

export default BuyersPage;
