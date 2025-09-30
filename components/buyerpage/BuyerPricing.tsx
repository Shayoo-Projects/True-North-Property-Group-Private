import React from 'react';

const BuyerPricing: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Financial Clarity</h3><br></br>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Understanding Your Budget</h2>
                </div>
                
                <div className="max-w-4xl mx-auto bg-[#8B4513] bg-opacity-10 p-8 rounded-lg shadow-md border border-[#8B4513] border-opacity-20">
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        Our services for buyers are typically free, as our commission is paid by the seller. We'll help you understand all the costs associated with buying a home, from the down payment and closing costs to mortgage pre-approval, so you can make an informed financial decision.
                    </p>
                    
                    <div className="mt-8 text-center">
                        <a
                            href="https://www.atlanticcoastmortgage.com/lo/mike-schumacher/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#00a0b0] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#008a99] transition-colors duration-300 shadow-md"
                        >
                            Connect with a Lender
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyerPricing;