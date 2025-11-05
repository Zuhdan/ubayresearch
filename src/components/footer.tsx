import { BookOpenText } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpenText className="h-6 w-6 text-primary" />
            <span className="font-bold">Ubay Research Hub</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ubayresearch.org. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
