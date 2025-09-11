'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Robot, RobotPart } from '@/lib/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import PartDetailSheet from './PartDetailSheet';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

type InteractiveRobotProps = {
  robot: Robot;
};

export default function InteractiveRobot({ robot }: InteractiveRobotProps) {
  const [selectedPart, setSelectedPart] = useState<RobotPart | null>(null);

  return (
    <TooltipProvider>
      <div className="relative w-full max-w-2xl mx-auto aspect-[2/3] md:aspect-video">
        <Image
          src={robot.image.imageUrl}
          alt={`Interactive view of ${robot.name}`}
          fill
          priority
          className="object-contain rounded-lg shadow-2xl"
          data-ai-hint={robot.image.imageHint}
        />

        {robot.parts.map((part) => (
          <Tooltip key={part.id} delayDuration={100}>
            <TooltipTrigger asChild>
              <button
                onClick={() => setSelectedPart(part)}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary"
                style={{ top: part.position.top, left: part.position.left }}
                aria-label={`Details for ${part.name}`}
              >
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60"></div>
                <Plus className="w-5 h-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <p>{part.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      <PartDetailSheet
        part={selectedPart}
        open={!!selectedPart}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedPart(null);
          }
        }}
      />
    </TooltipProvider>
  );
}
