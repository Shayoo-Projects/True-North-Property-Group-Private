import React from 'react';

const SellerAbout: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Our Commitment to Sellers</h3><br></br>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Maximize Your Return, Minimize Your Stress</h2>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Selling your home is a major decision. At True North Property Group, we are dedicated to providing you with a seamless, transparent, and profitable selling experience. We combine market expertise with innovative marketing to showcase your property to the right buyers at the right time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerAbout;