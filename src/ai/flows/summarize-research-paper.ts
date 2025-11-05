'use server';
/**
 * @fileOverview A research paper summarization AI agent.
 *
 * - summarizeResearchPaper - A function that handles the research paper summarization process.
 * - SummarizeResearchPaperInput - The input type for the summarizeResearchPaper function.
 * - SummarizeResearchPaperOutput - The return type for the summarizeResearchPaper function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeResearchPaperInputSchema = z.object({
  paperText: z.string().describe('The full text content of the research paper.'),
});
export type SummarizeResearchPaperInput = z.infer<typeof SummarizeResearchPaperInputSchema>;

const SummarizeResearchPaperOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the research paper.'),
});
export type SummarizeResearchPaperOutput = z.infer<typeof SummarizeResearchPaperOutputSchema>;

export async function summarizeResearchPaper(input: SummarizeResearchPaperInput): Promise<SummarizeResearchPaperOutput> {
  return summarizeResearchPaperFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeResearchPaperPrompt',
  input: {schema: SummarizeResearchPaperInputSchema},
  output: {schema: SummarizeResearchPaperOutputSchema},
  prompt: `You are an expert research assistant. Your task is to provide a concise and informative summary of a given research paper.

  Research Paper Text: {{{paperText}}}
  `,
});

const summarizeResearchPaperFlow = ai.defineFlow(
  {
    name: 'summarizeResearchPaperFlow',
    inputSchema: SummarizeResearchPaperInputSchema,
    outputSchema: SummarizeResearchPaperOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
