
import Image from 'next/image';
import { getCompanyInfo } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutUs() {
  const companyInfo = getCompanyInfo();
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === 'about-us-image'
  );

  return (
    <section id="about-us" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg md:h-full">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About {companyInfo.name}
            </h2>
            <p className="text-muted-foreground md:text-lg">
              {companyInfo.aboutUs}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
