import React from 'react';
import { PageHeader } from '../components/Header';
import SellerAbout from '../components/sellerpage/SellerAbout';
import SellerBenefits from '../components/sellerpage/SellerBenefits';
import SellerJourney from '../components/sellerpage/SellerJourney';
import SellerCosts from '../components/sellerpage/SellerCosts';
import SellerHeaderImg from '../media/SellerHeader.jpg';

const SellersPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        backgroundImage={SellerHeaderImg}
        title={<>Sell Your Home with <span className="text-[#00a0b0]">Confidence</span></>}
        subtitle="Achieve the best possible outcome with our expert guidance and strategic marketing."
      />
      <SellerAbout />
      <SellerJourney />
      <SellerBenefits />
      <SellerCosts />
    </>
  );
};

export default SellersPage;