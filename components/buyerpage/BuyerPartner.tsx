import React from 'react';

const BuyerPartner: React.FC = () => {
    const benefits = [
        { title: "Exclusive Access", description: "Get access to on- and off-market properties that match your criteria, giving you a competitive edge." },
        { title: "Expert Negotiation", description: "Our agents are skilled negotiators who work to get you the best price and terms possible." },
        { title: "Seamless Process", description: "We handle the complexities, from paperwork to inspections, ensuring a stress-free experience." },
        { title: "Local Knowledge", description: "Leverage our deep understanding of local markets in VA, MD, and DC to find the perfect community for you." }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Your Trusted Partner</h3><br></br>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Work With True North</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        The right guide through every phase of your homebuying journey
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map(benefit => (
                        <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#8B4513] text-center">
                            <h3 className="text-xl font-bold text-[#00a0b0]">{benefit.title}</h3>
                            <p className="mt-4 text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BuyerPartner;