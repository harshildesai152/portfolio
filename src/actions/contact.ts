
"use server";

import { z } from 'zod';

const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }).max(50, { message: "First name must be 50 characters or less." }),
  lastName: z.string().min(1, { message: "Last name is required." }).max(50, { message: "Last name must be 50 characters or less." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional().refine(value => !value || /^[+]?[0-9\s-()]*$/.test(value), {
    message: "Invalid phone number format."
  }).refine(value => !value || value.replace(/\D/g, '').length <= 15, {
    message: "Phone number is too long."
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000, { message: "Message must be 1000 characters or less." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    // Map field-specific errors to a more user-friendly format if needed
    const fieldErrors: Record<string, string | undefined> = {};
    parsed.error.issues.forEach(issue => {
      if (issue.path.length > 0) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
    });

    return {
      message: "Invalid form data. Please check the fields below.",
      fields: formData as Record<string, string>,
      issues, // You can pass specific field issues too if your UI handles them
      success: false,
    };
  }

  // In a real application, you would send an email or save to a database here.
  // For this example, we'll just log it and return a success message.
  console.log("Contact form submitted:", parsed.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
