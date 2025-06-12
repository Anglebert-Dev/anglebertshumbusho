import { ReactNode } from 'react';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={`min-h-screen bg-primary text-neutral-light ${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}>
      <header className="fixed top-0 w-full z-50">
        {/* Navigation will go here */}
      </header>
      
      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-primary-dark">
        {/* Footer content will go here */}
      </footer>
    </div>
  );
} 