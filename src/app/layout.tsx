import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import MainLayout from './components/layout/MainLayout';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Anglebert Shumbusho Ishimwe - Backend-Focused Full Stack Developer",
  description: "Portfolio website showcasing my expertise in building scalable digital infrastructures, specializing in financial systems, API integrations, and high-performance backend solutions.",
  keywords: "Full Stack Developer, Backend Developer, Laravel, Spring Boot, Node.js, React.js, Financial Systems, API Integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <MainLayout>
        {children}
        </MainLayout>
      </body>
    </html>
  );
}
