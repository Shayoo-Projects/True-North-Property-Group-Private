
import React from 'react';
import whoWeAre from '../media/whoweare.jpg';

const OurStory: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text content from note2.md */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">OUR STORY</h3><br></br>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">True North Property Group</h2>
            <p className="mt-2 text-lg sm:text-xl text-gray-700">Serving Virginia, Maryland, and Washington D.C.</p>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              True North Property Group (TNPG) was founded by Tony and Brandon, a father-son real estate team whose business is guided by their “True North” — a constant moral compass rooted in integrity, intrinsic motivation, and service to their clients and community.
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Our team is committed to making a difference — not only in the real estate journeys of our clients, but also in the communities we serve. At True North Property Group, our mission is simple: to deliver positive results with honesty, dedication, and heart.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <img src={whoWeAre} alt="Who we are at True North Property Group" className="w-full h-auto rounded-lg shadow-md object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
