import { z } from 'zod';

// Define the contact form schema using Zod
export const contactFormSchema = z.object({
  firstName: z.string()
    .min(1, { message: 'First name is required' })
    .max(50, { message: 'First name must be less than 50 characters' }),
  
  lastName: z.string()
    .min(1, { message: 'Last name is required' })
    .max(50, { message: 'Last name must be less than 50 characters' }),
  
  email: z.string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  
  phoneNumber: z.string()
    .min(1, { message: 'Phone number is required' })
    .regex(/^[0-9()\-\s+]*$/, { message: 'Please enter a valid phone number' }),
  
  message: z.string()
    .min(1, { message: 'Message is required' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
  
  timestamp: z.string().optional(),
  
  source: z.string().default('website_contact_form')
});

// Create a type from the schema
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Default empty form values
export const defaultContactFormValues: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
  timestamp: '',
  source: 'website_contact_form'
};

// Helper function to validate form data
export const validateContactForm = (data: Partial<ContactFormData>) => {
  try {
    // Parse will throw an error if validation fails
    const result = contactFormSchema.parse(data);
    return { success: true, data: result, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Convert Zod errors to a more usable format
      const errors = error.format();
      
      // Transform the formatted errors into a flat structure
      const flatErrors = {} as Record<string, string>;
      
      // Helper function to flatten the nested error structure
      const flattenErrors = (obj: any, path: string = '') => {
        for (const key in obj) {
          if (key === '_errors' && Array.isArray(obj[key]) && obj[key].length > 0) {
            flatErrors[path.slice(0, -1)] = obj[key][0];
          } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenErrors(obj[key], `${path}${key}.`);
          }
        }
      };
      
      flattenErrors(errors);
      
      return { success: false, data: null, errors: flatErrors };
    }
    return { success: false, data: null, errors: { form: 'An unexpected error occurred' } };
  }
};
