
"use client";

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from '@/actions/contact';
import { socialLinks, contactDetails } from '@/lib/data';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      variant="link"
      className="text-2xl font-semibold text-primary hover:text-accent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 group mt-4"
    >
      {pending ? 'Sending...' : 'Submit'}
      <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  const initialState: ContactFormState = { message: '', issues: [], fields: {}, success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
      } else if (state.issues && state.issues.length > 0) {
         toast({
          title: "Error",
          description: state.issues.join('\\n') || state.message,
          variant: "destructive",
        });
      } else if (!state.success && state.message) {
         toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  const getFieldError = (fieldName: string) => {
    if (state.issues && state.fields && state.fields[fieldName] !== undefined) {
      const fieldSpecificIssue = state.issues.find(issue =>
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
            "glass-experience-card", // Applied glassmorphism style
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
            "glass-experience-card", // Applied glassmorphism style
            "shadow-lg bg-card text-card-foreground"
          )}
          style={{ animationDelay: '0.4s' }}
        >
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
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
                    defaultValue={state.fields?.firstName}
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
                    defaultValue={state.fields?.lastName}
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
                    defaultValue={state.fields?.email}
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
                    defaultValue={state.fields?.phone}
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
                  defaultValue={state.fields?.message}
                />
                {getFieldError('message') && <p className="text-destructive text-sm mt-1">{getFieldError('message')}</p>}
              </div>
              <div className="flex justify-start">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
