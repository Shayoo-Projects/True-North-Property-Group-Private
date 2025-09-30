import React from 'react';
import { PageHeader } from '../components/Header';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader
        backgroundImage="/media/ContactHeader.jpg"
        title={<>Get in <span className="text-[#00a0b0]">Touch</span></>}
        subtitle="We're here to answer your questions and help you with all your real estate needs."
      />
      <ContactInfo />
    </>
  );
};

export default ContactPage;