import { BookOpenText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BookOpenText className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg sm:inline-block">ubayresearch.org</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#publications" className="transition-colors hover:text-primary">
            Publications
          </Link>
          <Link href="#team" className="transition-colors hover:text-primary">
            Our Team
          </Link>
          <Link href="#contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" size="sm">Log In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
