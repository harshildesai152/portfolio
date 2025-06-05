
"use client";

import { useState, useEffect, useTransition, useRef } from 'react'; // Removed useActionState, useFormStatus. Added useState, useTransition, useRef.
import Link from 'next/link';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from '@/actions/contact'; // submitContactForm is now a regular async function
import { socialLinks, contactDetails } from '@/lib/data';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';


function SubmitButton({ isPending }: { isPending: boolean }) { // Changed to accept isPending prop
  return (
    <Button
      type="submit"
      disabled={isPending}
      variant="link"
      className="text-2xl font-semibold text-primary hover:text-accent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 group mt-4"
    >
      {isPending ? 'Sending...' : 'Submit'}
      <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  const initialState: ContactFormState = { message: '', issues: [], fields: {}, success: false };
  
  const [currentFormState, setCurrentFormState] = useState<ContactFormState>(initialState);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    if (currentFormState.message && !isPending) { // Added !isPending check to avoid showing toast while submitting
      if (currentFormState.success) {
        toast({
          title: "Success!",
          description: currentFormState.message,
        });
        formRef.current?.reset(); // Reset form on success
        setCurrentFormState(initialState); // Reset state
      } else if (currentFormState.issues && currentFormState.issues.length > 0) {
         toast({
          title: "Error",
          description: currentFormState.issues.join('\\n') || currentFormState.message,
          variant: "destructive",
        });
      } else if (!currentFormState.success && currentFormState.message) {
         toast({
          title: "Error",
          description: currentFormState.message,
          variant: "destructive",
        });
      }
    }
  }, [currentFormState, toast, isPending]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    // Preserve field values for re-population in case of error
    const currentFields: Record<string, string> = {};
    formData.forEach((value, key) => {
      currentFields[key] = value as string;
    });
    setCurrentFormState(prev => ({...prev, fields: currentFields, message: '', issues: [] }));


    startTransition(async () => {
      // IMPORTANT: The following call to submitContactForm contains server-side Node.js code (nodemailer, process.env).
      // This WILL LIKELY FAIL at runtime when deployed to a static hosting service like GitHub Pages,
      // as it cannot execute Node.js code in the browser.
      // For GitHub Pages, consider using a third-party form service (e.g., Formspree).
      const result = await submitContactForm(formData);
      setCurrentFormState(result);
    });
  };

  const getFieldError = (fieldName: string) => {
    if (currentFormState.issues && currentFormState.fields && currentFormState.fields[fieldName] !== undefined) {
      const fieldSpecificIssue = currentFormState.issues.find(issue =>
        issue.toLowerCase().includes(fieldName.replace(/([A-Z])/g, ' $1').toLowerCase().trim())
      );
      return fieldSpecificIssue;
    }
    return undefined;
  };


  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card 
          className={cn(
            "glass-experience-card",
            "shadow-lg bg-card text-card-foreground"
          )}
          style={{ animationDelay: '0.2s' }}
        >
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-accent" />
              <div>
                <h4 className="font-semibold text-card-foreground">Email</h4>
                <a href={`mailto:${contactDetails.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactDetails.email}
                </a>
              </div>
            </div>
            {contactDetails.location && (
               <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-accent" />
                <div>
                  <h4 className="font-semibold text-card-foreground">Location</h4>
                  <p className="text-muted-foreground">{contactDetails.location}</p>
                </div>
              </div>
            )}
            <div>
              <h4 className="font-semibold text-card-foreground mb-3">Connect with me:</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="social-icon-ephraim"
                  >
                    <link.icon />
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className={cn(
            "glass-experience-card",
            "shadow-lg bg-card text-card-foreground"
          )}
          style={{ animationDelay: '0.4s' }}
        >
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-card-foreground">First Name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="First Name"
                    className="mt-1 bg-input focus:border-primary"
                    defaultValue={currentFormState.fields?.firstName}
                  />
                  {getFieldError('firstName') && <p className="text-destructive text-sm mt-1">{getFieldError('firstName')}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-card-foreground">Last Name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Last Name"
                    className="mt-1 bg-input focus:border-primary"
                    defaultValue={currentFormState.fields?.lastName}
                  />
                   {getFieldError('lastName') && <p className="text-destructive text-sm mt-1">{getFieldError('lastName')}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-card-foreground">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="mt-1 bg-input focus:border-primary"
                    defaultValue={currentFormState.fields?.email}
                  />
                  {getFieldError('email') && <p className="text-destructive text-sm mt-1">{getFieldError('email')}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-card-foreground">Phone Number <span className="text-xs text-muted-foreground">(Optional)</span></Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="mt-1 bg-input focus:border-primary"
                    defaultValue={currentFormState.fields?.phone}
                  />
                  {getFieldError('phone') && <p className="text-destructive text-sm mt-1">{getFieldError('phone')}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-card-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here!"
                  className="mt-1 bg-input focus:border-primary min-h-[150px]"
                  defaultValue={currentFormState.fields?.message}
                />
                {getFieldError('message') && <p className="text-destructive text-sm mt-1">{getFieldError('message')}</p>}
              </div>
              <div className="flex justify-start">
                <SubmitButton isPending={isPending} />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
