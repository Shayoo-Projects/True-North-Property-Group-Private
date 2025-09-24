import React from 'react';
import logo from '../media/logo.jpg';

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
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                    <div className="space-y-8 xl:col-span-2">
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="True North Logo" className="h-16 w-auto rounded-md" />
                            <span className="text-2xl font-bold">True North Property Group</span>
                        </div>
                        <p className="text-gray-200 text-base">
                            4391 Ridgewood Center Dr,<br />
                            Woodbridge, VA 22192<br />
                            (301) 445-1395
                        </p>
                        
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Home Buying</a></li>
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Home Selling</a></li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">About Us</a></li>
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Join Our Team</a></li>
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Service Areas</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li><p className="text-base text-gray-200">Virginia</p></li>
                                    <li><p className="text-base text-gray-200">Maryland</p></li>
                                    <li><p className="text-base text-gray-200">Washington D.C.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-[#6b4a2e] pt-8">
                    <p className="text-base text-gray-200 xl:text-center">&copy; {new Date().getFullYear()} True North Property Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;