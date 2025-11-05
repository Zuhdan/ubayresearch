'use server';

import { summarizeResearchPaper } from '@/ai/flows/summarize-research-paper';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function getSummary(paperText: string) {
  try {
    const result = await summarizeResearchPaper({ paperText });
    return { summary: result.summary, error: null };
  } catch (error) {
    console.error('Error generating summary:', error);
    return { summary: null, error: 'Failed to generate summary. Please try again later.' };
  }
}

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please correct the errors.',
    };
  }

  // In a real app, you would send an email or save to a database.
  console.log('Contact form submitted:');
  console.log(validatedFields.data);

  return { message: 'Thank you for your message! We will get back to you soon.', errors: null };
}
