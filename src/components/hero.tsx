import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { placeholderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const heroImage = placeholderImages.find(p => p.id === 'hero-image');

  return (
    <section className="bg-secondary border-b">
      <div className="container grid lg:grid-cols-2 gap-12 items-center py-12 md:py-24">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
            Advancing the frontiers of knowledge.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            ubayresearch.org is your hub for cutting-edge research, expert analysis, and collaborative discovery.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="#publications">Explore Publications</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
         <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
      </div>
    </section>
  );
};

export default Hero;
