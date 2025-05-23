
"use server";

import { z } from 'zod';
import nodemailer from 'nodemailer';

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

  const { firstName, lastName, email, phone, message } = parsed.data;

  // Email sending logic
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error("Gmail credentials (GMAIL_USER, GMAIL_PASS) are not set in environment variables.");
    return {
      message: "Server configuration error: Email credentials not set. Please contact support.",
      success: false,
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // Use an App Password here
    },
  });

  const mailOptions = {
    from: `"${firstName} ${lastName} via Portfolio" <${process.env.GMAIL_USER}>`,
    replyTo: email,
    to: 'harshildesai152@gmail.com',
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `
      You have received a new message from your portfolio contact form:

      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>From:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to harshildesai152@gmail.com');
    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    let userErrorMessage = "An unexpected error occurred while sending your message. Please try again later or contact me directly.";
    
    // Check for specific Nodemailer/Gmail errors
    if (error instanceof Error) {
        const nodeError = error as NodeJS.ErrnoException; // Type assertion for common error properties
        if (nodeError.message?.includes('Invalid login') || (nodeError as any).responseCode === 535) {
            userErrorMessage = "Authentication failed on the server. Please contact the site administrator.";
             console.error("Nodemailer authentication error: Invalid login or App Password. Check GMAIL_USER and GMAIL_PASS.");
        } else if (nodeError.message?.includes('ETIMEDOUT') || nodeError.message?.includes('ENOTFOUND')) {
            userErrorMessage = "Could not connect to the email server. Please try again later.";
        }
    }
    
    return {
      message: userErrorMessage,
      success: false,
    };
  }
}
