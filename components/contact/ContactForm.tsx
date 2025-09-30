import React, { useState } from 'react';
import axios from 'axios';
import { ContactFormData, defaultContactFormValues, validateContactForm } from './contactFormSchema';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(defaultContactFormValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('Thank you for your message! We\'ll get back to you soon.');
  const [isErrorResponse, setIsErrorResponse] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Add timestamp
    const dataToSubmit = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    // Validate form data
    const validation = validateContactForm(dataToSubmit);
    
    if (!validation.success) {
      setErrors(validation.errors || {});
      setIsSubmitting(false);
      return;
    }

    try {
      // Get webhook URL from environment variables
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      
      // Check if webhook URL is available
      if (!webhookUrl) {
        console.error('Missing webhook URL in environment variables');
        throw new Error('Contact form configuration error');
      }
      
      // Create payload using the structure from contactFormPayload.json
      // This sends all the form data to the webhook
      const payload = {
        firstName: dataToSubmit.firstName,
        lastName: dataToSubmit.lastName,
        email: dataToSubmit.email,
        phoneNumber: dataToSubmit.phoneNumber,
        message: dataToSubmit.message,
        timestamp: dataToSubmit.timestamp,
        source: dataToSubmit.source
      };
      
      // Log for debugging (remove in production)
      console.log('Sending form submission...');
      
      // Send data to webhook (no authentication required)
      const response = await axios.post(webhookUrl, payload);
      
      // Always log the entire response for debugging
      console.log('Webhook response:', response.data);
      
      // Extract the message from the response
      let responseMessage = '';
      
      // Reset error state
      setIsErrorResponse(false);
      
      // Check if the response contains an error property
      if (response.data && response.data.error) {
        // This is an error response
        responseMessage = response.data.error;
        setIsErrorResponse(true);
        console.log('Error response detected:', responseMessage);
      }
      // Check if the response contains a message property
      else if (response.data && response.data.message) {
        responseMessage = response.data.message;
      } else {
        // If no message property, display the requested fallback message
        responseMessage = 'Please try again later';
        
        // Still log the response for debugging purposes
        try {
          console.log('Response data without message property:', JSON.stringify(response.data));
        } catch (e) {
          console.log('Unable to stringify response data');
        }
      }
      
      // Always update the success message with the webhook response
      console.log('Setting success message to:', responseMessage);
      setSuccessMessage(responseMessage);
      
      // Reset form on success
      setFormData(defaultContactFormValues);
      setSubmitSuccess(true);
      
      // Keep success message visible longer (10 seconds)
      setTimeout(() => setSubmitSuccess(false), 10000);
    } catch (error) {
      // Log the actual error for debugging but don't expose details to the user
      console.error('Error submitting form:', error);
      
      // Show a generic error message to the user
      setErrors({ 
        form: 'We encountered an issue sending your message. Please try again or contact us directly by phone.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
        <input 
          type="text" 
          name="firstName" 
          id="firstName" 
          value={formData.firstName}
          onChange={handleChange}
          autoComplete="given-name" 
          className={`py-3 px-4 block w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} shadow-sm rounded-md focus:ring-[#00a0b0] focus:border-[#00a0b0]`} 
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
        )}
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
        <input 
          type="text" 
          name="lastName" 
          id="lastName" 
          value={formData.lastName}
          onChange={handleChange}
          autoComplete="family-name" 
          className={`py-3 px-4 block w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} shadow-sm rounded-md focus:ring-[#00a0b0] focus:border-[#00a0b0]`} 
        />
        {errors.lastName && (
          <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          value={formData.email}
          onChange={handleChange}
          autoComplete="email" 
          className={`py-3 px-4 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm rounded-md focus:ring-[#00a0b0] focus:border-[#00a0b0]`} 
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input 
          type="text" 
          name="phoneNumber" 
          id="phoneNumber" 
          value={formData.phoneNumber}
          onChange={handleChange}
          autoComplete="tel" 
          className={`py-3 px-4 block w-full border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} shadow-sm rounded-md focus:ring-[#00a0b0] focus:border-[#00a0b0]`} 
          placeholder="" 
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          className={`py-3 px-4 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} shadow-sm rounded-md focus:ring-[#00a0b0] focus:border-[#00a0b0]`} 
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>
      {errors.form && (
        <div className="sm:col-span-2">
          <p className="text-sm text-red-600">{errors.form}</p>
        </div>
      )}
      
      {submitSuccess && (
        <div className={`sm:col-span-2 ${isErrorResponse ? 'bg-red-50 border border-red-400 text-red-700' : 'bg-green-50 border border-green-400 text-green-700'} px-4 py-3 rounded relative`}>
          <div className="flex">
            <div className="py-1">
              {isErrorResponse ? (
                <svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6H9V5zm0 8h2v2H9v-2z"/>
                </svg>
              ) : (
                <svg className="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/>
                </svg>
              )}
            </div>
            <div>
              <p className="font-bold">{isErrorResponse ? 'Error:' : 'Webhook Response:'}</p>
              <p className="text-sm">{successMessage}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="sm:col-span-2">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${isSubmitting ? 'bg-gray-400' : 'bg-[#00a0b0] hover:bg-[#008a99]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00a0b0]`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
