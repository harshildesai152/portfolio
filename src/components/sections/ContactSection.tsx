
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
import { Mail, Phone, MapPin } from 'lucide-react';


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? 'Sending...' : 'Send Message'}
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
          description: state.issues.join('\n') || state.message,
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

  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <Card className="animate-slideUp shadow-lg" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-accent" />
              <div>
                <h4 className="font-semibold text-card-foreground">Email</h4>
                <a href={`mailto:${contactDetails.email}`} className="text-slate-400 hover:text-primary transition-colors">
                  {contactDetails.email}
                </a>
              </div>
            </div>
            {contactDetails.location && (
               <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-accent" />
                <div>
                  <h4 className="font-semibold text-card-foreground">Location</h4>
                  <p className="text-slate-400">{contactDetails.location}</p>
                </div>
              </div>
            )}
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Connect with me:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Button key={link.name} variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <link.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-slideUp shadow-lg" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-card-foreground">Full Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="mt-1 bg-background focus:border-primary"
                  defaultValue={state.fields?.name} 
                />
                {state.issues?.find(issue => issue.toLowerCase().includes('name')) && <p className="text-destructive text-sm mt-1">{state.issues.find(issue => issue.toLowerCase().includes('name'))}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-card-foreground">Email Address</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="mt-1 bg-background focus:border-primary"
                  defaultValue={state.fields?.email} 
                />
                 {state.issues?.find(issue => issue.toLowerCase().includes('email')) && <p className="text-destructive text-sm mt-1">{state.issues.find(issue => issue.toLowerCase().includes('email'))}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-card-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className="mt-1 bg-background focus:border-primary"
                  defaultValue={state.fields?.message} 
                />
                {state.issues?.find(issue => issue.toLowerCase().includes('message')) && <p className="text-destructive text-sm mt-1">{state.issues.find(issue => issue.toLowerCase().includes('message'))}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
