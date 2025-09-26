import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BuyersPage from './pages/BuyersPage';
import SellersPage from './pages/SellersPage';
import JoinTeamPage from './pages/JoinTeamPage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import MortgageCalculatorPage from './pages/MortgageCalculatorPage';
import ContactPage from './pages/ContactPage';
import FinancialAssessmentPage from './pages/FinancialAssessmentPage';
import ClosingCostEstimator from './pages/ClosingCostEstimator';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    const validPages = ['home', 'buyers', 'sellers', 'join', 'about', 'blog', 'mortgage-calculator', 'closing-cost-estimator', 'contact', 'financial-assessment'];
    if (validPages.includes(page)) {
        window.scrollTo(0, 0); // Scroll to top on page change
        setCurrentPage(page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'buyers':
        return <BuyersPage />;
      case 'sellers':
        return <SellersPage />;
      case 'join':
        return <JoinTeamPage />;
      case 'about':
        return <AboutUsPage />;
      case 'blog':
        return <BlogPage />;
      case 'mortgage-calculator':
        return <MortgageCalculatorPage />;
      case 'closing-cost-estimator':
        return <ClosingCostEstimator />;
      case 'financial-assessment':
        return <FinancialAssessmentPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-tn-light font-sans text-tn-dark antialiased">
      <Navbar onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;