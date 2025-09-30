
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getGalleryImages, type GalleryImage } from '@/lib/data';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '../ui/card';

type GalleryItem = GalleryImage & { placeholder: ImagePlaceholder };

export function GallerySection() {
  const galleryImages = getGalleryImages();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = galleryImages.map(image => {
    const placeholder = PlaceHolderImages.find(p => p.id === image.imagePlaceholderId);
    return { ...image, placeholder: placeholder! };
  }).filter(item => item.placeholder);

  return (
    <section id="gallery" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Our Fields
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the world of PadiPro, from lush paddies to the final harvest.
          </p>
        </div>
        <Dialog>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <DialogTrigger asChild key={item.id} onClick={() => setSelectedImage(item)}>
                <div
                  className={`group relative aspect-square w-full cursor-pointer overflow-hidden rounded-lg shadow-md ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                >
                  <Image
                    src={item.placeholder.imageUrl}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    data-ai-hint={item.placeholder.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </DialogTrigger>
            ))}
          </div>

          <DialogContent className="max-w-3xl p-0">
            {selectedImage && (
              <div className="relative aspect-video w-full">
                <Image
                  src={selectedImage.placeholder.imageUrl}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  data-ai-hint={selectedImage.placeholder.imageHint}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
