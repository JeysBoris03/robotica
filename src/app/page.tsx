import Link from 'next/link';
import Image from 'next/image';
import { robots } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          <span className="text-primary electric-glow">RoboLearn</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          Un viaje interactivo al fascinante mundo de la robótica. Explora diferentes tipos de robots y descubre los componentes que les dan vida.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Galería de Robots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {robots.map((robot) => (
            <Link key={robot.id} href={`/robots/${robot.slug}`} passHref>
              <Card className="group overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={robot.image.imageUrl}
                    alt={robot.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={robot.image.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{robot.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-4">{robot.description}</p>
                   <div className="flex items-center justify-end text-sm font-semibold text-primary">
                    Explorar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
