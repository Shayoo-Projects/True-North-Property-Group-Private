import React from 'react';

const BuyerAbout: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Our Commitment to Buyers</h3><br></br>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Dedicated Service, Unmatched Expertise</h2>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Buying a home is a significant milestone. At True North Property Group, we provide comprehensive services designed to make your home buying process as smooth and successful as possible. From initial consultation to closing day, we are your trusted advisors and advocates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerAbout;