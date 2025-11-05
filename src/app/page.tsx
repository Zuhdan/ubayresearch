import Header from '@/components/header';
import Hero from '@/components/hero';
import PublicationsSection from '@/components/publications-section';
import TeamSection from '@/components/team-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <PublicationsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
