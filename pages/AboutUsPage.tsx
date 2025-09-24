import React from 'react';

const AboutHeader: React.FC = () => (
  <section className="relative h-[50vh] min-h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=838')" }}>
    <div className="absolute inset-0 bg-tn-dark bg-opacity-60"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          About <span className="text-tn-secondary">True North</span>
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
          Your trusted guides in the journey of real estate.
        </p>
      </div>
    </div>
  </section>
);

const MissionSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-tn-primary font-semibold tracking-wider uppercase">Our Mission & Values</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Integrity, Service, and Excellence
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          Our mission is to provide an unparalleled real estate experience built on a foundation of trust, comprehensive market knowledge, and an unwavering commitment to our clients' success. We are dedicated to navigating every transaction with the highest level of professionalism and care, ensuring you always find your way home.
        </p>
      </div>
    </div>
  </section>
);

const TeamSection: React.FC = () => {
    const teamMembers = [
        { name: "Alex Chen", title: "Founder & Principal Broker", imageUrl: "https://picsum.photos/400/400?image=669" },
        { name: "Samantha Riley", title: "Lead Agent, Northern Virginia", imageUrl: "https://picsum.photos/400/400?image=679" },
        { name: "David Garcia", title: "Hampton Roads Specialist", imageUrl: "https://picsum.photos/400/400?image=689" },
        { name: "Maria Rodriguez", title: "Myrtle Beach Specialist", imageUrl: "https://picsum.photos/400/400?image=699" },
    ];
    return (
        <section className="py-20 bg-tn-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Leadership Team</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        The dedicated professionals guiding our mission.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map(member => (
                         <div key={member.name} className="text-center">
                            <img className="mx-auto h-48 w-48 rounded-full object-cover" src={member.imageUrl} alt={member.name} />
                            <h3 className="mt-6 text-xl font-bold text-tn-primary">{member.name}</h3>
                            <p className="mt-1 text-tn-primary font-semibold">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyChooseUsSection: React.FC = () => {
    const CheckIcon = () => (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    );

    const features = ["Client-First Philosophy", "Unmatched Local Expertise", "Data-Driven Strategies", "A Network of Trusted Professionals", "Commitment to Community", "Transparent Communication"];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">The True North Difference</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        We are more than just agents; we are your partners in real estate.
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


const AboutCTA: React.FC = () => (
    <section className="bg-tn-primary">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to work with a team that cares?</span>
          <span className="block text-tn-secondary">Let's start the conversation.</span>
        </h2>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-tn-primary bg-white hover:bg-gray-100 sm:w-auto"
        >
          Contact Us
        </a>
      </div>
    </section>
  );


const AboutUsPage: React.FC = () => {
  return (
    <>
      <AboutHeader />
      <MissionSection />
      <TeamSection />
      <WhyChooseUsSection />
      <AboutCTA />
    </>
  );
};

export default AboutUsPage;