import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './../styles/globals.css';
import Header from './components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Professional Physiotherapy Services',
  description: 'Expert physiotherapy care for your recovery and wellness needs',
  icons: {
    icon: '/images/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
} 