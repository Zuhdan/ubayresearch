import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { placeholderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const heroImage = placeholderImages.find(p => p.id === 'hero-image');

  return (
    <section className="relative h-[60vh] w-full min-h-[400px]">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Ubay Research Hub
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-200">
          Advancing the frontiers of knowledge through cutting-edge research and collaboration.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#publications">Explore Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
