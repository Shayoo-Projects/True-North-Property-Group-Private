import React, { useState, useEffect } from 'react';

const FinancialAssessmentPage: React.FC = () => {
    const [income, setIncome] = useState(6000);
    const [carPayment, setCarPayment] = useState(400);
    const [creditCardPayment, setCreditCardPayment] = useState(200);
    const [studentLoan, setStudentLoan] = useState(300);
    const [otherDebt, setOtherDebt] = useState(0);

    const [totalDebt, setTotalDebt] = useState(0);
    const [dti, setDti] = useState(0);
    const [qualifyingLoan, setQualifyingLoan] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const assumedRate = 6.5; // percent
    const assumedTerm = 30; // years
    const targetDti = 0.43; // 43%

    useEffect(() => {
        const calculateAssessment = () => {
            const currentTotalDebt = carPayment + creditCardPayment + studentLoan + otherDebt;
            setTotalDebt(currentTotalDebt);

            if (income > 0) {
                const maxMonthlyPaymentForHousing = (income * targetDti) - currentTotalDebt;
                setMonthlyPayment(maxMonthlyPaymentForHousing > 0 ? maxMonthlyPaymentForHousing : 0);

                const currentDti = (currentTotalDebt / income) * 100;
                setDti(currentDti);
                
                if (maxMonthlyPaymentForHousing > 0) {
                    const monthlyInterestRate = (assumedRate / 100) / 12;
                    const numberOfPayments = assumedTerm * 12;

                    const numerator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
                    const denominator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
                    
                    const calculatedLoanAmount = maxMonthlyPaymentForHousing * (numerator / denominator);
                    setQualifyingLoan(calculatedLoanAmount);
                } else {
                    setQualifyingLoan(0);
                }

            } else {
                setDti(0);
                setQualifyingLoan(0);
                setMonthlyPayment(0);
            }
        };
        calculateAssessment();
    }, [income, carPayment, creditCardPayment, studentLoan, otherDebt]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    const formatPayment = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    }

    return (
        <>
            <section className="bg-tn-primary py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Financial <span className="text-tn-secondary">Assessment</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
                        Understand your debt-to-income ratio and estimate what you can comfortably afford.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-tn-light">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-tn-primary mb-6">Enter Your Financials</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="income" className="block text-sm font-medium text-gray-700">Gross Monthly Income</label>
                                    <input type="number" id="income" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 pt-4 border-t">Monthly Debt Payments</h3>
                                <div>
                                    <label htmlFor="carPayment" className="block text-sm font-medium text-gray-700">Car Payment(s)</label>
                                    <input type="number" id="carPayment" value={carPayment} onChange={(e) => setCarPayment(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="creditCardPayment" className="block text-sm font-medium text-gray-700">Credit Card Minimums</label>
                                    <input type="number" id="creditCardPayment" value={creditCardPayment} onChange={(e) => setCreditCardPayment(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="studentLoan" className="block text-sm font-medium text-gray-700">Student Loan(s)</label>
                                    <input type="number" id="studentLoan" value={studentLoan} onChange={(e) => setStudentLoan(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="otherDebt" className="block text-sm font-medium text-gray-700">Other Monthly Debts</label>
                                    <input type="number" id="otherDebt" value={otherDebt} onChange={(e) => setOtherDebt(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                                </div>
                            </form>
                        </div>
                        <div className="text-center p-8 bg-tn-primary text-white rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold">Your Estimated Buying Power</h3>
                            <div className="mt-6 space-y-6">
                                <div>
                                    <p className="text-gray-300 text-lg">Estimated Qualifying Loan Amount</p>
                                    <p className="text-5xl font-bold text-tn-secondary">{formatCurrency(qualifyingLoan)}</p>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-lg">Projected Monthly Payment (P&I)</p>
                                    <p className="text-4xl font-bold text-white">{formatPayment(monthlyPayment)}</p>
                                </div>
                            </div>
                            <div className="space-y-3 text-left mt-8 pt-6 border-t border-blue-600">
                               <div className="flex justify-between text-lg"><span className="font-semibold">Total Monthly Debt:</span> <span>{formatCurrency(totalDebt)}</span></div>
                               <div className="flex justify-between text-lg"><span className="font-semibold">Debt-to-Income (DTI):</span> <span>{dti.toFixed(1)}%</span></div>
                            </div>
                            <p className="text-xs text-gray-300 mt-6">
                                * Estimates are based on a {targetDti*100}% DTI ratio, a {assumedRate}% interest rate over {assumedTerm} years, and do not include taxes, insurance, or HOA fees. This is not a loan offer. Consult a mortgage professional for an official pre-approval.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FinancialAssessmentPage;