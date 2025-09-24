import React from 'react';

const SellerHeader: React.FC = () => (
  <section className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1011')" }}>
    <div className="absolute inset-0 bg-tn-dark bg-opacity-60"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Sell Your Home with <span className="text-tn-secondary">Confidence</span>
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
          Achieve the best possible outcome with our expert guidance and strategic marketing.
        </p>
      </div>
    </div>
  </section>
);

const SellerAbout: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-tn-primary font-semibold tracking-wider uppercase">Our Promise to Sellers</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Maximize Your Return, Minimize Your Stress
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          Selling your home is a major decision. At True North Property Group, we are dedicated to providing you with a seamless, transparent, and profitable selling experience. We combine market expertise with innovative marketing to showcase your property to the right buyers at the right time.
        </p>
      </div>
    </div>
  </section>
);

const SellerBenefits: React.FC = () => {
    const benefits = [
        { title: "Strategic Pricing", description: "We conduct a comprehensive market analysis to price your home competitively for maximum return." },
        { title: "Effective Marketing", description: "Our targeted marketing strategies ensure your property reaches a wide audience of qualified buyers." },
        { title: "Expert Negotiation", description: "We advocate for your best interests, skillfully negotiating offers to achieve your financial goals." },
        { title: "Smooth Closing", description: "Our team manages the entire closing process, ensuring all details are handled for a timely and smooth transaction." }
    ];
    return (
        <section className="py-20 bg-tn-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Sell With Us?</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Discover the advantages of partnering with a top-tier real estate team.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map(benefit => (
                         <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold text-tn-primary">{benefit.title}</h3>
                            <p className="mt-4 text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SellerFeatures: React.FC = () => {
    const CheckIcon = () => (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    );

    const features = ["Professional Home Valuation", "Staging Consultation", "High-Quality Photography & Videography", "Targeted Digital Advertising", "Open House Coordination", "Contract & Paperwork Management"];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Comprehensive Seller Services</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Everything you need for a successful home sale, all under one roof.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map(feature => (
                        <div key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-tn-primary text-white">
                                    <CheckIcon />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{feature}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const SellerCTAForm: React.FC = () => (
    <section className="py-20 bg-tn-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ready to Sell?</h2>
                <p className="mt-4 text-xl text-gray-600">
                    Contact us for a complimentary, no-obligation home valuation. Let's discuss how we can achieve your selling goals.
                </p>
            </div>
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                    <label htmlFor="first-name-seller" className="block text-sm font-medium text-gray-700">First name</label>
                    <div className="mt-1">
                        <input type="text" name="first-name" id="first-name-seller" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name-seller" className="block text-sm font-medium text-gray-700">Last name</label>
                    <div className="mt-1">
                        <input type="text" name="last-name" id="last-name-seller" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email-seller" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input id="email-seller" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                    </div>
                </div>
                 <div className="sm:col-span-2">
                    <label htmlFor="property-address" className="block text-sm font-medium text-gray-700">Property Address</label>
                    <div className="mt-1">
                        <input type="text" name="property-address" id="property-address" autoComplete="street-address" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" placeholder="123 Main St, City, State"/>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message-seller" className="block text-sm font-medium text-gray-700">Message</label>
                    <div className="mt-1">
                        <textarea id="message-seller" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border border-gray-300 rounded-md" defaultValue={""} placeholder="Tell us a little about your property and selling goals..."></textarea>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tn-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tn-primary">
                        Request Valuation
                    </button>
                </div>
            </form>
        </div>
    </section>
);


const SellersPage: React.FC = () => {
  return (
    <>
      <SellerHeader />
      <SellerAbout />
      <SellerBenefits />
      <SellerFeatures />
      <SellerCTAForm />
    </>
  );
};

export default SellersPage;