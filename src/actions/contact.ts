
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
    const fieldErrors: Record<string, string | undefined> = {};
    parsed.error.issues.forEach(issue => {
      if (issue.path.length > 0) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
    });

    return {
      message: "Invalid form data. Please check the fields below.",
      fields: formData as Record<string, string>,
      issues,
      success: false,
    };
  }

  // In a real application, you would integrate an Email Service Provider (ESP)
  // like Resend, SendGrid, AWS SES, etc., to send the email.
  // For example, using Resend (after installing `resend` and setting up API keys):
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // try {
  //   await resend.emails.send({
  //     from: 'Your App <noreply@yourdomain.com>',
  //     to: 'harshildesai152@gmail.com',
  //     subject: 'New Contact Form Submission',
  //     html: `
  //       <p><strong>Name:</strong> ${parsed.data.firstName} ${parsed.data.lastName}</p>
  //       <p><strong>Email:</strong> ${parsed.data.email}</p>
  //       ${parsed.data.phone ? `<p><strong>Phone:</strong> ${parsed.data.phone}</p>` : ''}
  //       <p><strong>Message:</strong></p>
  //       <p>${parsed.data.message}</p>
  //     `,
  //   });
  // } catch (error) {
  //   console.error("Failed to send email:", error);
  //   return {
  //     message: "Form submitted, but there was an error sending the email. Please try again later.",
  //     success: false, // Or true, depending on whether you want to inform the user of the send failure
  //   };
  // }

  // For now, we'll just log the details that would be sent.
  console.log("--- Contact Form Submission ---");
  console.log("To: harshildesai152@gmail.com");
  console.log("From (Sender):", parsed.data.email);
  console.log("Subject: New Contact Form Submission");
  console.log("Body:");
  console.log(`  First Name: ${parsed.data.firstName}`);
  console.log(`  Last Name: ${parsed.data.lastName}`);
  console.log(`  Email: ${parsed.data.email}`);
  if (parsed.data.phone) {
    console.log(`  Phone: ${parsed.data.phone}`);
  }
  console.log(`  Message: ${parsed.data.message}`);
  console.log("---------------------------------");


  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
