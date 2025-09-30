import React from 'react';

const BuyerJourney: React.FC = () => {
    const phases = [
        {
            title: "Phase 1: Preparation",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            steps: [
                "Check and strengthen your credit (640+ is ideal).",
                "Gather financial documents (pay stubs, tax returns, bank statements).",
                "Explore loan programs (FHA, VA, USDA, Conventional, First-Time Buyer programs).",
                "Budget for upfront costs: earnest money, inspections, and closing costs."
            ]
        },
        {
            title: "Phase 2: Getting Started",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            steps: [
                "Choose your dedicated True North buyer's agent.",
                "Get pre-approved with a trusted lender.",
                "Begin your home search with tailored listings."
            ]
        },
        {
            title: "Phase 3: Making an Offer",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            steps: [
                "Submit your offer with pre-approval.",
                "Provide earnest money deposit (typically 1–2%).",
                "Coordinate with the title company and lender."
            ]
        },
        {
            title: "Phase 4: Inspections & Approvals",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            steps: [
                "Schedule home, termite, and radon inspections.",
                "Review HOA or condo documents (if applicable).",
                "Appraisal and full loan approval process begins."
            ]
        },
        {
            title: "Phase 5: Closing",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            steps: [
                "Complete final walkthrough.",
                "Wire closing funds.",
                "Sign documents and get your keys!"
            ]
        }
    ];

    return (
        <section className="py-20 bg-[#8B4513] bg-opacity-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Your Path to Ownership</h3><br></br>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">The Homebuying Journey</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        We guide you through every step of the process
                    </p>
                </div>
                
                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00a0b0]"></div>
                    
                    {/* Timeline items */}
                    <div className="space-y-12">
                        {phases.map((phase, index) => (
                            <div key={index} className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                {/* Timeline dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#00a0b0]"></div>
                                
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex items-center mb-4">
                                            <div className="flex-shrink-0 mr-3 p-2 rounded-full bg-[#8B4513] bg-opacity-10 text-[#8B4513]">
                                                {phase.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-[#00a0b0]">{phase.title}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {phase.steps.map((step, stepIndex) => (
                                                <li key={stepIndex} className="flex items-start">
                                                    <span className="text-[#00a0b0] mr-2">•</span>
                                                    <span className="text-gray-600">{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-16 bg-white border-l-4 border-[#8B4513] p-4 rounded-md">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-[#8B4513]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-gray-600">
                                <strong>Important:</strong> Avoid big purchases or job changes during this time to protect your approval.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyerJourney;