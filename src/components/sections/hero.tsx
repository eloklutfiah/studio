
import Image from 'next/image';
import Link from 'next/link';
import { getCompanyInfo } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const companyInfo = getCompanyInfo();
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'hero-rice-field'
  );

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-4 font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to {companyInfo.name}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-200 md:text-xl">
            {companyInfo.missionStatement}
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="group">
              <Link href="/#products">
                View Our Products
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
