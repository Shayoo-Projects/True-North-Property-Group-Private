import React, { useRef, useState } from 'react';
import logo from '../media/logo.jpg';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  // Timer to delay closing of the Resources submenu so it doesn't disappear
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = (delay = 250) => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsResourcesOpen(false);
    }, delay);
  };
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  const mainLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Buyers', page: 'buyers' },
    { name: 'Sellers', page: 'sellers' },
    { name: 'Join Team', page: 'join' },
    { name: 'About Us', page: 'about' },
  ];

  const resourceLinks = [
    { name: 'Blog', page: 'blog' },
    { name: 'Mortgage Calculator', page: 'mortgage-calculator' },
    { name: 'Financial Assessment', page: 'financial-assessment' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    setIsResourcesOpen(false);
    setIsMobileResourcesOpen(false);
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} className="flex-shrink-0 flex items-center space-x-2">
              <img src={logo} alt="True North Property Group" className="h-10 w-auto" />
              <span className="font-bold text-xl text-black">True North Property Group</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {mainLinks.map((link) => (
                <a key={link.name} href="#" onClick={(e) => {e.preventDefault(); handleNavigate(link.page);}} className="text-gray-600 hover:bg-[#583a1e] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  {link.name}
                </a>
              ))}
              <div
                className="relative"
                onMouseEnter={() => { clearCloseTimer(); setIsResourcesOpen(true); }}
                onMouseLeave={() => scheduleClose(250)}
              >
                <button
                  type="button"
                  className="text-gray-600 hover:bg-[#583a1e] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                  aria-haspopup="true"
                  aria-expanded={isResourcesOpen}
                >
                  Resources
                  <svg className={`ml-2 h-5 w-5 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isResourcesOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    onMouseEnter={clearCloseTimer}
                    onMouseLeave={() => scheduleClose(200)}
                  >
                    <div className="py-1" role="none">
                      {resourceLinks.map((link) => (
                         <a key={link.name} href="#" onClick={(e) => {e.preventDefault(); handleNavigate(link.page);}} className="text-gray-700 hover:bg-[#583a1e] hover:text-white block px-4 py-2 text-sm" role="menuitem">
                           {link.name}
                         </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a href="#" onClick={(e) => {e.preventDefault(); handleNavigate('contact');}} className="bg-[#583a1e] text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:opacity-90">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-tn-primary hover:text-white hover:bg-tn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainLinks.map((link) => (
               <a key={link.name} href="#" onClick={(e) => {e.preventDefault(); handleNavigate(link.page);}} className="text-gray-600 hover:bg-[#583a1e] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                {link.name}
              </a>
            ))}
            <div>
              <button onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)} className="w-full text-left text-gray-600 hover:bg-[#583a1e] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex justify-between items-center">
                Resources
                <svg className={`h-5 w-5 transition-transform duration-200 ${isMobileResourcesOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isMobileResourcesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {resourceLinks.map((link) => (
                     <a key={link.name} href="#" onClick={(e) => {e.preventDefault(); handleNavigate(link.page);}} className="text-gray-600 hover:bg-[#583a1e] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                       {link.name}
                     </a>
                  ))}
                </div>
              )}
            </div>
             <a href="#" onClick={(e) => {e.preventDefault(); handleNavigate('contact');}} className="bg-[#583a1e] text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:opacity-90">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;