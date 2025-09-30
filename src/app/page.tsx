import { Hero } from '@/components/sections/hero';
import { AboutUs } from '@/components/sections/about-us';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { TeamSection } from '@/components/sections/team-section';
import { GallerySection } from '@/components/sections/gallery-section';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ProductShowcase />
      <TeamSection />
      <GallerySection />
    </>
  );
}
