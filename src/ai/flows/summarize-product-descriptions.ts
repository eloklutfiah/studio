'use server';
/**
 * @fileOverview AI-powered product description summarization flow.
 * 
 * - summarizeProductDescription - A function that generates a short summary of a product description.
 * - SummarizeProductDescriptionInput - The input type for the summarizeProductDescription function.
 * - SummarizeProductDescriptionOutput - The return type for the summarizeProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProductDescriptionInputSchema = z.object({
  productDescription: z
    .string()
    .describe('The full product description to be summarized.'),
});
export type SummarizeProductDescriptionInput = z.infer<typeof SummarizeProductDescriptionInputSchema>;

const SummarizeProductDescriptionOutputSchema = z.object({
  summary:
    z.string().describe('A concise, one-sentence summary of the product description.'),
});
export type SummarizeProductDescriptionOutput = z.infer<typeof SummarizeProductDescriptionOutputSchema>;

export async function summarizeProductDescription(
  input: SummarizeProductDescriptionInput
): Promise<SummarizeProductDescriptionOutput> {
  return summarizeProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProductDescriptionPrompt',
  input: {schema: SummarizeProductDescriptionInputSchema},
  output: {schema: SummarizeProductDescriptionOutputSchema},
  prompt: `Summarize the following product description in one sentence:\n\n{{{productDescription}}}`,
});

const summarizeProductDescriptionFlow = ai.defineFlow(
  {
    name: 'summarizeProductDescriptionFlow',
    inputSchema: SummarizeProductDescriptionInputSchema,
    outputSchema: SummarizeProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
