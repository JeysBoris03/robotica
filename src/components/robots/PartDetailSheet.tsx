'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { summarizeRobotPart } from '@/ai/flows/summarize-robot-part-function';
import type { RobotPart } from '@/lib/types';
import { Separator } from '@/components/ui/separator';

type PartDetailSheetProps = {
  part: RobotPart | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function PartDetailSheet({ part, open, onOpenChange }: PartDetailSheetProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (!part) return;
    setIsLoading(true);
    setError('');
    setSummary('');
    try {
      const result = await summarizeRobotPart({ partName: part.name, partDescription: part.description });
      setSummary(result.summary);
    } catch (e) {
      setError('Failed to generate summary. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset state when the sheet is closed or part changes
  if (!open && (summary || isLoading || error)) {
    setSummary('');
    setIsLoading(false);
    setError('');
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-lg w-full">
        {part && (
          <>
            <SheetHeader className="mb-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                 <Image
                    src={part.image.imageUrl}
                    alt={part.name}
                    fill
                    className="object-cover"
                    data-ai-hint={part.image.imageHint}
                  />
              </div>
              <SheetTitle className="text-2xl">{part.name}</SheetTitle>
              <SheetDescription>{part.description}</SheetDescription>
            </SheetHeader>
            
            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">AI-Powered Summary</h3>
              <Button onClick={handleSummarize} disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Summarize Function
              </Button>
              {summary && (
                <div className="p-4 bg-muted/50 rounded-lg border border-primary/20">
                  <p className="text-sm">{summary}</p>
                </div>
              )}
               {error && <p className="text-sm text-destructive">{error}</p>}
            </div>

            <SheetFooter className="mt-8">
               <Button asChild variant="outline" className="w-full">
                <Link href={part.learnMoreUrl} target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
