import React from 'react';

interface AboutCTAProps {
  onNavigate?: (page: string) => void;
}

const AboutCTA: React.FC<AboutCTAProps> = ({ onNavigate }) => (
  <section className="bg-[#00a0b0]">
    <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        <span className="block">Ready to work with a team that cares?</span>
        <span className="block text-[#8B4513]">Let's start the conversation.</span>
      </h2>
      <button
        onClick={() => onNavigate && onNavigate('contact')}
        className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-white hover:bg-gray-100 sm:w-auto"
      >
        Contact Us
      </button>
    </div>
  </section>
);

export default AboutCTA;
