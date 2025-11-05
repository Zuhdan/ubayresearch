import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter, Lexend } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
});


export const metadata: Metadata = {
  title: 'ubayresearch.org',
  description: 'Advancing the frontiers of knowledge through cutting-edge research and collaboration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('font-sans antialiased', inter.variable, lexend.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
