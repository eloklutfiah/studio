
import Link from 'next/link';
import { getCompanyInfo } from '@/lib/data';
import { Logo } from './logo';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const companyInfo = getCompanyInfo();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/#about-us', label: 'About Us' },
    { href: '/#products', label: 'Products' },
    { href: '/#team', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              {companyInfo.missionStatement}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-headline text-lg font-semibold">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-headline text-lg font-semibold">
                Contact Us
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="hover:text-primary"
                  >
                    {companyInfo.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <a
                    href={`tel:${companyInfo.contact.phone.replace(/\D/g, '')}`}
                    className="hover:text-primary"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{companyInfo.contact.address}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-start-2 md:col-end-4 lg:col-start-auto">
             <div className="border-t pt-8 mt-8 md:mt-0 md:border-0 md:pt-0">
               <p className="text-center text-sm text-muted-foreground md:text-left">
                &copy; {currentYear} {companyInfo.name}. All Rights Reserved.
              </p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
