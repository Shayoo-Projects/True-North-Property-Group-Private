import React, { useEffect, useMemo, useState } from 'react';

const ClosingCostEstimator: React.FC = () => {
  // Inputs
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downPaymentPct, setDownPaymentPct] = useState(10); // %
  const [propertyTaxRatePct, setPropertyTaxRatePct] = useState(1.0); // % of purchase price annually
  const [insuranceAnnual, setInsuranceAnnual] = useState(1200); // $/year
  const [transferTaxRatePct, setTransferTaxRatePct] = useState(0.5); // % of purchase price
  const [lenderFees, setLenderFees] = useState(1500);
  const [titleEscrow, setTitleEscrow] = useState(1200);
  const [recordingFees, setRecordingFees] = useState(300);
  const [hoaInitiation, setHoaInitiation] = useState(0);

  // Derived
  const downPayment = useMemo(() => purchasePrice * (downPaymentPct / 100), [purchasePrice, downPaymentPct]);
  const loanAmount = useMemo(() => Math.max(purchasePrice - downPayment, 0), [purchasePrice, downPayment]);

  // Prepaids/escrows (simple assumptions)
  const propertyTaxAnnual = useMemo(() => purchasePrice * (propertyTaxRatePct / 100), [purchasePrice, propertyTaxRatePct]);
  const propertyTaxEscrow = useMemo(() => (propertyTaxAnnual / 12) * 6, [propertyTaxAnnual]); // collect ~6 months
  const insurancePrepaid = useMemo(() => insuranceAnnual, [insuranceAnnual]); // 12 months upfront
  const transferTax = useMemo(() => purchasePrice * (transferTaxRatePct / 100), [purchasePrice, transferTaxRatePct]);

  const estimatedClosingCosts = useMemo(() => {
    const sum = lenderFees + titleEscrow + recordingFees + transferTax + propertyTaxEscrow + insurancePrepaid + hoaInitiation;
    return Math.max(sum, 0);
  }, [lenderFees, titleEscrow, recordingFees, transferTax, propertyTaxEscrow, insurancePrepaid, hoaInitiation]);

  const cashToClose = useMemo(() => downPayment + estimatedClosingCosts, [downPayment, estimatedClosingCosts]);

  const fmtMoney = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(isFinite(v) ? v : 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-tn-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Closing Cost <span className="text-tn-secondary">Estimator</span>
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
            Estimate your closing costs and see an approximate cash-to-close based on your purchase details.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-20 bg-tn-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Inputs */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-tn-primary mb-6">Enter Details</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700">Purchase Price</label>
                  <input id="purchasePrice" type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="downPaymentPct" className="block text-sm font-medium text-gray-700">Down Payment (%)</label>
                  <input id="downPaymentPct" type="number" step="0.1" value={downPaymentPct} onChange={(e) => setDownPaymentPct(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyTaxRatePct" className="block text-sm font-medium text-gray-700">Property Tax Rate (%/yr)</label>
                    <input id="propertyTaxRatePct" type="number" step="0.01" value={propertyTaxRatePct} onChange={(e) => setPropertyTaxRatePct(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="insuranceAnnual" className="block text-sm font-medium text-gray-700">Homeowners Insurance ($/yr)</label>
                    <input id="insuranceAnnual" type="number" value={insuranceAnnual} onChange={(e) => setInsuranceAnnual(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="transferTaxRatePct" className="block text-sm font-medium text-gray-700">Transfer/Grant Tax (% of price)</label>
                    <input id="transferTaxRatePct" type="number" step="0.01" value={transferTaxRatePct} onChange={(e) => setTransferTaxRatePct(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="lenderFees" className="block text-sm font-medium text-gray-700">Lender Fees ($)</label>
                    <input id="lenderFees" type="number" value={lenderFees} onChange={(e) => setLenderFees(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="titleEscrow" className="block text-sm font-medium text-gray-700">Title/Escrow ($)</label>
                    <input id="titleEscrow" type="number" value={titleEscrow} onChange={(e) => setTitleEscrow(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="recordingFees" className="block text-sm font-medium text-gray-700">Recording Fees ($)</label>
                    <input id="recordingFees" type="number" value={recordingFees} onChange={(e) => setRecordingFees(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="hoaInitiation" className="block text-sm font-medium text-gray-700">HOA Initiation ($)</label>
                    <input id="hoaInitiation" type="number" value={hoaInitiation} onChange={(e) => setHoaInitiation(Number(e.target.value))} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-tn-primary focus:border-tn-primary sm:text-sm" />
                  </div>
                </div>
              </form>
            </div>

            {/* Right: Results */}
            <div className="text-center p-8 bg-tn-primary text-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Estimated Closing Summary</h3>
              <div className="mt-6 grid grid-cols-1 gap-4 text-left">
                <div className="flex justify-between"><span className="font-semibold">Purchase Price:</span> <span>{fmtMoney(purchasePrice)}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Down Payment ({downPaymentPct}%):</span> <span>{fmtMoney(downPayment)}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Estimated Loan Amount:</span> <span>{fmtMoney(loanAmount)}</span></div>
                <hr className="border-blue-600 my-2" />
                <div className="flex justify-between"><span className="font-semibold">Lender Fees:</span> <span>{fmtMoney(lenderFees)}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Title & Escrow:</span> <span>{fmtMoney(titleEscrow)}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Recording Fees:</span> <span>{fmtMoney(recordingFees)}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Transfer/Grant Tax:</span> <span>{fmtMoney(transferTax)}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Property Tax Escrow (≈6 mo):</span> <span>{fmtMoney(propertyTaxEscrow)}</span></div>
                <div className="flex justify-between"><span className="font-semibold">Homeowners Insurance (12 mo):</span> <span>{fmtMoney(insurancePrepaid)}</span></div>
                {hoaInitiation > 0 && (
                  <div className="flex justify-between"><span className="font-semibold">HOA Initiation:</span> <span>{fmtMoney(hoaInitiation)}</span></div>
                )}
                <hr className="border-blue-600 my-2" />
                <div className="flex justify-between text-lg"><span className="font-bold">Estimated Closing Costs:</span> <span className="font-bold text-tn-secondary">{fmtMoney(estimatedClosingCosts)}</span></div>
                <div className="flex justify-between text-xl mt-2"><span className="font-extrabold">Estimated Cash to Close:</span> <span className="font-extrabold text-white">{fmtMoney(cashToClose)}</span></div>
              </div>
              <p className="text-xs text-gray-300 mt-6">
                Estimates are for planning purposes only. Actual costs vary by jurisdiction, lender, and property. Consult your lender and title company for a formal quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClosingCostEstimator;

