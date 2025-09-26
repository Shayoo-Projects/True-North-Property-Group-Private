import React from 'react';
import logo from '../media/logo_full.png';
import partnerLogo1 from '../media/PartnerLogo_1.jpg';
import partnerLogo2 from '../media/PartnerLogo_2.jpg';

const SocialIcon: React.FC<{ href: string; path: string }> = ({ href, path }) => (
    <a href={href} className="text-gray-300 hover:text-white transition-colors duration-300">
        <span className="sr-only">Social Media</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d={path} />
        </svg>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
                    <div className="space-y-6 lg:col-span-2">
                        {/* Top: Brand logo (fills container width to reduce right-side empty space) */}
                        <div className="flex items-center w-full">
                            <img src={logo} alt="True North Logo" className="w-full h-auto max-h-24 md:max-h-28 object-contain" />
                        </div>
                        {/* Bottom: Partner logos (flex and wrap, adjust within container) */}
                        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                            <img src={partnerLogo1} alt="Partner 1" className="flex-1 h-auto max-h-12 md:max-h-16 object-contain" />
                            <img src={partnerLogo2} alt="Partner 2" className="flex-1 h-auto max-h-12 md:max-h-16 object-contain" />
                        </div>
                        
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                        <div className="flex w-full flex-row items-start justify-center gap-20">
                            <div className="text-left">
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Home Buying</a></li>
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Home Selling</a></li>
                                </ul>
                            </div>
                            <div className="md:mt-0 text-left">
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">About Us</a></li>
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Contact Us</a></li>
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Resources</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-[#6b4a2e] pt-8">
                    <p className="text-base text-gray-200 text-center">&copy; {new Date().getFullYear()} True North Property Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;