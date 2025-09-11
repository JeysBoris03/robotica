'use server';
/**
 * @fileOverview Summarizes the function of a robot part using AI.
 *
 * - summarizeRobotPart - A function that summarizes the function of a robot part.
 * - SummarizeRobotPartInput - The input type for the summarizeRobotPart function.
 * - SummarizeRobotPartOutput - The return type for the summarizeRobotPart function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeRobotPartInputSchema = z.object({
  partName: z.string().describe('The name of the robot part.'),
  partDescription: z.string().describe('The description of the robot part.'),
});
export type SummarizeRobotPartInput = z.infer<typeof SummarizeRobotPartInputSchema>;

const SummarizeRobotPartOutputSchema = z.object({
  summary: z.string().describe('A summarized description of the robot part function.'),
});
export type SummarizeRobotPartOutput = z.infer<typeof SummarizeRobotPartOutputSchema>;

export async function summarizeRobotPart(input: SummarizeRobotPartInput): Promise<SummarizeRobotPartOutput> {
  return summarizeRobotPartFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeRobotPartPrompt',
  input: {schema: SummarizeRobotPartInputSchema},
  output: {schema: SummarizeRobotPartOutputSchema},
  prompt: `Summarize the function of the following robot part in a concise manner:\n\nPart Name: {{{partName}}}\nPart Description: {{{partDescription}}}`,
});

const summarizeRobotPartFlow = ai.defineFlow(
  {
    name: 'summarizeRobotPartFlow',
    inputSchema: SummarizeRobotPartInputSchema,
    outputSchema: SummarizeRobotPartOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
