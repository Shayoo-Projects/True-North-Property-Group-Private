import React from 'react';

const SellerBenefits: React.FC = () => {
    const benefits = [
        { title: "Expert Pricing & Strategy", description: "We conduct a comprehensive market analysis to price your home competitively for maximum return." },
        { title: "Professional Marketing Exposure", description: "Our targeted marketing strategies ensure your property reaches a wide audience of qualified buyers." },
        { title: "Skilled Negotiations", description: "We advocate for your best interests, skillfully negotiating offers to achieve your financial goals." },
        { title: "Transaction Management from Start to Finish", description: "Our team manages the entire closing process, ensuring all details are handled for a timely and smooth transaction." }
    ];
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Your Trusted Partner</h3><br></br>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Work With True North</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        The right guide through every phase of your home selling journey
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

export default SellerBenefits;