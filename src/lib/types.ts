import type { ImagePlaceholder } from './placeholder-images';

export type RobotPart = {
  id: string;
  name: string;
  description: string;
  image: ImagePlaceholder;
  position: { top: string; left: string };
  learnMoreUrl: string;
};

export type Robot = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: ImagePlaceholder;
  parts: RobotPart[];
};
