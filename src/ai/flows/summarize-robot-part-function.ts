'use server';
/**
 * @fileOverview Resume la función de una pieza de robot usando IA.
 *
 * - summarizeRobotPart - Una función que resume la función de una pieza de robot.
 * - SummarizeRobotPartInput - El tipo de entrada para la función summarizeRobotPart.
 * - SummarizeRobotPartOutput - El tipo de retorno para la función summarizeRobotPart.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeRobotPartInputSchema = z.object({
  partName: z.string().describe('El nombre de la pieza del robot.'),
  partDescription: z.string().describe('La descripción de la pieza del robot.'),
});
export type SummarizeRobotPartInput = z.infer<typeof SummarizeRobotPartInputSchema>;

const SummarizeRobotPartOutputSchema = z.object({
  summary: z.string().describe('Una descripción resumida de la función de la pieza del robot.'),
});
export type SummarizeRobotPartOutput = z.infer<typeof SummarizeRobotPartOutputSchema>;

export async function summarizeRobotPart(input: SummarizeRobotPartInput): Promise<SummarizeRobotPartOutput> {
  return summarizeRobotPartFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeRobotPartPrompt',
  input: {schema: SummarizeRobotPartInputSchema},
  output: {schema: SummarizeRobotPartOutputSchema},
  prompt: `Resume la función de la siguiente pieza de robot de manera concisa:\n\nNombre de la Pieza: {{{partName}}}\nDescripción de la Pieza: {{{partDescription}}}`,
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
