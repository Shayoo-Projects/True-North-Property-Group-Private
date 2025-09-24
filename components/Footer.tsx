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
                        <div className="flex space-x-6">
                           <SocialIcon href="#" path="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.28C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.1,9.75 4.18,10.55C3.46,10.53 2.8,10.33 2.22,10.03C2.22,10.05 2.22,10.07 2.22,10.08C2.22,12.24 3.73,14.05 5.79,14.45C5.45,14.54 5.08,14.6 4.7,14.6C4.42,14.6 4.15,14.58 3.89,14.53C4.45,16.31 6.17,17.56 8.28,17.6C6.78,18.81 4.93,19.53 2.9,19.53C2.55,19.53 2.2,19.51 1.86,19.45C3.96,20.78 6.4,21.5 9,21.5C16,21.5 20.33,15.48 20.33,10.09C20.33,9.84 20.32,9.6 20.3,9.36C21.1,8.76 21.86,8.02 22.46,7.16" />
                           <SocialIcon href="#" path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.28.058 1.688.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
                           <SocialIcon href="#" path="M20.94,11C20.44,15.65 16.54,19.33 11.53,19.33C6.82,19.33 3,15.54 3,10.95C3,6.35 6.43,2.67 11.12,2.67C13.4,2.67 15.42,3.53 16.94,5L14.73,7.21C14,6.67 13.06,6.13 12,6.13C9.07,6.13 6.64,8.68 6.64,11.69C6.64,14.69 9.07,17.25 12,17.25C14.71,17.25 16.84,15.4 17.27,12.89H12V10.11H20.94V11Z" />
                        </div>
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
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Our Team</a></li>
                                    <li><a href="#" className="text-base text-gray-200 hover:text-white">Testimonials</a></li>
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