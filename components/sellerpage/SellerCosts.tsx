import React from 'react';

interface SellerCostsProps {
    onNavigate?: (page: string) => void;
}

const SellerCosts: React.FC<SellerCostsProps> = ({ onNavigate }) => {
    const costs = [
        { title: "Mortgage Payoff", description: "Current loan(s) and liens cleared at closing." },
        { title: "Commissions", description: "Typically 6% (split between listing and buyer agents, negotiable)." },
        { title: "Seller Subsidy", description: "Optional credit to buyer (1–3%) to help with closing costs." },
        { title: "Taxes & Fees", description: "Transfer taxes, title company fees, deed prep, etc." },
        { title: "HOA/Condo Fees", description: "Disclosure/resale packages, prorated dues, capital contributions (if required)." },
        { title: "Other Costs", description: "Repairs, moving company, and any admin fees." }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Financial Clarity</h3><br></br>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Understanding Seller Costs</h2>
                </div>
                
                <div className="max-w-4xl mx-auto bg-[#8B4513] bg-opacity-10 p-8 rounded-lg shadow-md border border-[#8B4513] border-opacity-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {costs.map((cost, index) => (
                            <div key={index} className="flex flex-col">
                                <h3 className="text-lg font-bold text-[#00a0b0]">{cost.title}</h3>
                                <p className="text-gray-600">{cost.description}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => onNavigate && onNavigate('contact')}
                            className="inline-block bg-[#00a0b0] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#008a99] transition-colors duration-300 shadow-md"
                        >
                            Get Your Free Home Valuation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellerCosts;
