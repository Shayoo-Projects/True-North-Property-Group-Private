
import React from 'react';

const BuyerHeader: React.FC = () => (
  <section className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1074')" }}>
    <div className="absolute inset-0 bg-tn-dark bg-opacity-60"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Buy a Home in <span className="text-[#00a0b0]">VA/DC/MD</span>
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
          Your journey to homeownership starts here. Let us guide you every step of the way.
        </p>
      </div>
    </div>
  </section>
);

const BuyerAbout: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-tn-primary font-semibold tracking-wider uppercase">Our Commitment to Buyers</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Dedicated Service, Unmatched Expertise
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          Buying a home is a significant milestone. At True North Property Group, we provide comprehensive services designed to make your home buying process as smooth and successful as possible. From initial consultation to closing day, we are your trusted advisors and advocates.
        </p>
      </div>
    </div>
  </section>
);

const BuyerBenefits: React.FC = () => {
    const benefits = [
        { title: "Exclusive Access", description: "Get access to on- and off-market properties that match your criteria, giving you a competitive edge." },
        { title: "Expert Negotiation", description: "Our agents are skilled negotiators who work to get you the best price and terms possible." },
        { title: "Seamless Process", description: "We handle the complexities, from paperwork to inspections, ensuring a stress-free experience." },
        { title: "Local Knowledge", description: "Leverage our deep understanding of local markets in VA and SC to find the perfect community for you." }
    ];
    return (
        <section className="py-20 bg-tn-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Buy With Us?</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Experience the True North advantage when you buy your next home.
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

const BuyerFeatures: React.FC = () => {
    const CheckIcon = () => (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    );

    const features = ["Expert Buyer's Guides", "Comprehensive Market Reports", "Network of Trusted Lenders", "Dedicated, Responsive Agents", "Step-by-Step Closing Support", "Community & School Information"];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Resources at Your Fingertips</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        We provide the tools and guidance you need for a confident purchase.
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

const BuyerPricing: React.FC = () => (
    <section className="py-20 bg-tn-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Understanding Your Budget</h2>
            <p className="mt-4 text-xl text-gray-600">
                Our services for buyers are typically free, as our commission is paid by the seller. We'll help you understand all the costs associated with buying a home, from the down payment and closing costs to mortgage pre-approval, so you can make an informed financial decision.
            </p>
            <a
                href="#"
                className="mt-8 inline-block bg-tn-secondary text-tn-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-md"
            >
                Connect with a Lender
            </a>
        </div>
    </section>
);


const BuyerCTAForm: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Let's Find Your New Home</h2>
                <p className="mt-4 text-xl text-gray-600">
                    Fill out the form below, and one of our expert buyer's agents will be in touch shortly.
                </p>
            </div>
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                    <div className="mt-1">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <div className="mt-1">
                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input type="text" name="phone-number" id="phone-number" autoComplete="tel" className="py-3 px-4 block w-full focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" placeholder="(555) 987-6543" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <div className="mt-1">
                        <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border border-gray-300 rounded-md" defaultValue={""} placeholder="Tell us about what you're looking for..."></textarea>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tn-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tn-primary">
                        Get In Touch
                    </button>
                </div>
            </form>
        </div>
    </section>
);


const BuyersPage: React.FC = () => {
  return (
    <>
      <BuyerHeader />
      <BuyerAbout />
      <BuyerBenefits />
      <BuyerFeatures />
      <BuyerPricing />
      <BuyerCTAForm />
    </>
  );
};

export default BuyersPage;
