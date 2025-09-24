import React from 'react';

const ContactHeader: React.FC = () => (
    <section className="bg-tn-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Get in <span className="text-tn-secondary">Touch</span>
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
          We're here to answer your questions and help you with all your real estate needs.
        </p>
      </div>
    </section>
  );

const ContactInfo: React.FC = () => {
    const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
    const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
    
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact Us</h2>
                    <div className="mt-3">
                        <p className="text-lg text-gray-500">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>
                    </div>
                    <div className="mt-9">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <PhoneIcon />
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>(301) 445-1395</p>
                            </div>
                        </div>
                        <div className="mt-6 flex">
                            <div className="flex-shrink-0">
                                <MailIcon />
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>contact@tnorthdmv.com</p>
                            </div>
                        </div>
                         <div className="mt-6 flex">
                            <div className="flex-shrink-0">
                               <LocationIcon />
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>4391 Ridgewood Center Dr,<br />
                                Woodbridge, VA 22192</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 sm:mt-16 md:mt-0">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text" name="phone-number" id="phone-number" autoComplete="tel" className="py-3 px-4 block w-full focus:ring-tn-primary focus:border-tn-primary border-gray-300 rounded-md" placeholder="(555) 987-6543" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-tn-primary focus:border-tn-primary border border-gray-300 rounded-md" defaultValue={""}></textarea>
                        </div>
                        <div className="sm:col-span-2">
                            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tn-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tn-primary">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactHeader />
      <ContactInfo />
    </>
  );
};

export default ContactPage;