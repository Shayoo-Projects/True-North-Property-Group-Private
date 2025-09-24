import React, { useState, useEffect } from 'react';

const MortgageCalculatorPage: React.FC = () => {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const calculatePayment = () => {
      const principal = homePrice - downPayment;
      const monthlyInterestRate = (interestRate / 100) / 12;
      const numberOfPayments = loanTerm * 12;

      if (principal > 0 && monthlyInterestRate > 0) {
        const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
        const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
        const payment = principal * (numerator / denominator);
        setMonthlyPayment(payment);
      } else {
        setMonthlyPayment(0);
      }
    };
    calculatePayment();
  }, [homePrice, downPayment, interestRate, loanTerm]);

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
                    Mortgage <span className="text-tn-secondary">Calculator</span>
                </h1>
                <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
                    Estimate your monthly mortgage payment and discover your buying power.
                </p>
            </div>
        </section>

        <section className="py-20 bg-tn-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-tn-primary mb-6">Payment Calculator</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="homePrice" className="block text-sm font-medium text-gray-700">Home Price</label>
                                <input type="number" id="homePrice" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">Down Payment</label>
                                <input type="number" id="downPayment" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
                                <input type="number" step="0.01" id="interestRate" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">Loan Term (Years)</label>
                                <select id="loanTerm" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm">
                                    <option>30</option>
                                    <option>20</option>
                                    <option>15</option>
                                    <option>10</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="text-center p-8 bg-tn-primary text-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-200">Estimated Monthly Payment</h3>
                        <p className="text-5xl font-bold text-tn-secondary my-4">{formatPayment(monthlyPayment)}</p>
                        <div className="space-y-2 text-left mt-6 pt-6 border-t border-blue-600">
                           <div className="flex justify-between"><span className="font-semibold">Principal & Interest:</span> <span>{formatPayment(monthlyPayment)}</span></div>
                           <div className="flex justify-between"><span className="font-semibold">Loan Amount:</span> <span>{formatCurrency(homePrice - downPayment)}</span></div>
                        </div>
                        <p className="text-xs text-gray-300 mt-6">* This is an estimate and does not include taxes, insurance, or PMI. Please consult a lender for an official quote.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default MortgageCalculatorPage;