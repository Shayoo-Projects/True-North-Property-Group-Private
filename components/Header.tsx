import React from 'react';

interface HeaderProps {
  backgroundImage: string; // Now required, no longer optional
  title: React.ReactNode;
  subtitle: string;
}

export const PageHeader: React.FC<HeaderProps> = ({ 
  backgroundImage,
  title, 
  subtitle 
}) => (
  <section className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
    <div className="absolute inset-0 bg-tn-dark bg-opacity-60"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  </section>
);

