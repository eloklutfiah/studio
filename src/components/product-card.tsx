
'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type ProductWithSummary = Product & { summary: string };

export function ProductCard({
  product,
  placeholderImage,
}: {
  product: ProductWithSummary;
  placeholderImage?: ImagePlaceholder;
}) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          {placeholderImage && (
            <Image
              src={placeholderImage.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={placeholderImage.imageHint}
            />
          )}
        </div>
        <div className="p-6 pb-2">
          <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <CardDescription>{product.summary}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Learn More</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">{product.name}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                {placeholderImage && (
                  <Image
                    src={placeholderImage.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    data-ai-hint={placeholderImage.imageHint}
                  />
                )}
              </div>
              <DialogDescription className="text-base text-foreground">
                {product.description}
              </DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
