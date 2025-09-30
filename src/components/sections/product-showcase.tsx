
import { getProducts } from '@/lib/data';
import { summarizeProductDescription } from '@/ai/flows/summarize-product-descriptions';
import { ProductCard } from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export async function ProductShowcase() {
  const products = getProducts();

  const productsWithSummaries = await Promise.all(
    products.map(async (product) => {
      try {
        const { summary } = await summarizeProductDescription({
          productDescription: product.description,
        });
        return { ...product, summary };
      } catch (error) {
        console.error(`AI Summarization failed for ${product.name}:`, error);
        // Provide a fallback summary
        return {
          ...product,
          summary:
            product.description.slice(0, 150) +
            (product.description.length > 150 ? '...' : ''),
        };
      }
    })
  );

  return (
    <section id="products" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Premium Rice Varieties
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover our range of sustainably grown, high-quality rice, each with its own unique flavor and story.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productsWithSummaries.map((product) => {
            const placeholderImage = PlaceHolderImages.find(
              (img) => img.id === product.imagePlaceholderId
            );
            return (
              <ProductCard
                key={product.id}
                product={product}
                placeholderImage={placeholderImage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
