import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Social } from '@/components/Social';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Mayo's Porfolio",
    template: '%s | Mayo',
  },
  description: 'Personal portfolio built with Next.js 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900`}>
        <>
          <Navbar />
          <Social />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
