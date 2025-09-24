import React from 'react';

const JoinTeamHeader: React.FC = () => (
  <section className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=317')" }}>
    <div className="absolute inset-0 bg-tn-dark bg-opacity-60"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Elevate Your Career at <span className="text-tn-secondary">True North</span>
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
          We're looking for passionate, driven real estate professionals to join our growing family.
        </p>
      </div>
    </div>
  </section>
);

const JoinTeamAbout: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-tn-primary font-semibold tracking-wider uppercase">Why True North Property Group?</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          A Culture of Success and Support
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          At True North, we invest in our agents. We believe that your success is our success. We provide the tools, training, and supportive environment you need to build a thriving real estate career and provide exceptional service to your clients.
        </p>
      </div>
    </div>
  </section>
);

const JoinTeamBenefits: React.FC = () => {
    const benefits = [
        { title: "Lead Generation", description: "Benefit from our robust lead generation systems and client referral network to grow your business." },
        { title: "Cutting-Edge Tech", description: "Access top-tier CRM, marketing automation, and transaction management tools to streamline your workflow." },
        { title: "Training & Mentorship", description: "Receive continuous professional development, coaching, and mentorship from industry leaders." },
        { title: "Supportive Culture", description: "Join a collaborative, energetic team where your contributions are valued and your success is celebrated." }
    ];
    return (
        <section className="py-20 bg-tn-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">The Agent Advantage</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        We provide the foundation for you to build a remarkable career.
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

const JoinTeamFeatures: React.FC = () => {
    const CheckIcon = () => (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    );

    const features = ["Competitive Commission Splits", "In-House Marketing Support", "Transaction Coordination", "Advanced Agent Websites", "Ongoing Training Workshops", "A Strong, Respected Brand"];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Tools for Your Success</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        We equip you with everything you need to excel in today's market.
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


const JoinTeamCTAForm: React.FC = () => (
    <section className="py-20 bg-tn-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ready to Take the Next Step?</h2>
                <p className="mt-4 text-xl text-gray-600">
                    Complete the form below for a confidential conversation about your future with True North Property Group.
                </p>
            </div>
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                    <label htmlFor="first-name-join" className="block text-sm font-medium text-gray-700">First name</label>
                    <div className="mt-1">
                        <input type="text" name="first-name" id="first-name-join" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name-join" className="block text-sm font-medium text-gray-700">Last name</label>
                    <div className="mt-1">
                        <input type="text" name="last-name" id="last-name-join" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email-join" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input id="email-join" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="phone-number-join" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input type="text" name="phone-number" id="phone-number-join" autoComplete="tel" className="py-3 px-4 block w-full focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" placeholder="(555) 987-6543" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message-join" className="block text-sm font-medium text-gray-700">Message</label>
                    <div className="mt-1">
                        <textarea id="message-join" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border border-gray-300 rounded-md" defaultValue={""} placeholder="Tell us a bit about your experience and why you're interested in True North..."></textarea>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tn-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tn-primary">
                        Request Information
                    </button>
                </div>
            </form>
        </div>
    </section>
);


const JoinTeamPage: React.FC = () => {
  return (
    <>
      <JoinTeamHeader />
      <JoinTeamAbout />
      <JoinTeamBenefits />
      <JoinTeamFeatures />
      <JoinTeamCTAForm />
    </>
  );
};

export default JoinTeamPage;