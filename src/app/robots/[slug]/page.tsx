import { notFound } from 'next/navigation';
import { robots } from '@/lib/data';
import InteractiveRobot from '@/components/robots/InteractiveRobot';

type RobotPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return robots.map((robot) => ({
    slug: robot.slug,
  }));
}

export default function RobotPage({ params }: RobotPageProps) {
  const robot = robots.find((r) => r.slug === params.slug);

  if (!robot) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{robot.name}</h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
          {robot.description}
        </p>
      </div>
      <InteractiveRobot robot={robot} />
    </div>
  );
}
