
import { getCompanyInfo } from '@/lib/data';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | PadiPro',
  description: 'Get in touch with the PadiPro team for inquiries and support.',
};

export default function ContactPage() {
  const companyInfo = getCompanyInfo();

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We'd love to hear from you. Whether you have a question about our products, practices, or anything else, our team is ready to answer all your questions.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-3">
                            <Mail className="h-6 w-6 text-primary"/>
                            Email Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">For general inquiries, support, or feedback.</p>
                        <a href={`mailto:${companyInfo.contact.email}`} className="text-primary font-medium hover:underline">
                            {companyInfo.contact.email}
                        </a>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-3">
                            <Phone className="h-6 w-6 text-primary"/>
                            Call Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Speak with a member of our team directly.</p>
                        <a href={`tel:${companyInfo.contact.phone.replace(/\D/g, '')}`} className="text-primary font-medium hover:underline">
                            {companyInfo.contact.phone}
                        </a>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-3">
                            <MapPin className="h-6 w-6 text-primary"/>
                            Visit Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Our main office and research facility.</p>
                        <p className="font-medium text-foreground">
                            {companyInfo.contact.address}
                        </p>
                    </CardContent>
                </Card>
            </div>
            
            <div>
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-headline text-2xl">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
