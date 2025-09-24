
import React, { useEffect, useState } from 'react';
import IMG1 from '../media/IMG_1.jpg';
import IMG2 from '../media/IMG_2.jpg';
import IMG3 from '../media/IMG_3.jpeg';
import IMG4 from '../media/IMG_4.jpeg';
import IMG5 from '../media/IMG_5.jpg';

const FeaturesList: React.FC = () => {
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Left: Auto-playing slideshow (no controls) */}
          <div className="relative w-full h-96 sm:h-[30rem] md:h-[36rem] rounded-lg overflow-hidden shadow md:col-span-3">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
              />)
            )}
          </div>

          {/* Right: Content from note2.md */}
          <div className="md:col-span-2">
            <div className="text-left">
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Contact us</p>
              <h2 className="mt-2 text-3xl font-extrabold text-black sm:text-4xl">Leading You Home <br></br> with Trust and Care.</h2>
            </div>

            <div className="mt-12 flex flex-row gap-4 flex-wrap sm:flex-nowrap">
              <a href="#" className="inline-block bg-[#583a1e] text-white font-bold py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg uppercase tracking-wider whitespace-nowrap">Get in touch</a>
              <a href="#" className="inline-block border border-white text-gray-800 font-bold py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg hover:bg-white hover:text-tn-primary transform hover:scale-105 transition-all duration-300 shadow-lg uppercase tracking-wider whitespace-nowrap">Learn more about us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
