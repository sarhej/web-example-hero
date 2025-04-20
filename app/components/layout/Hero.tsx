import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.png"
          alt="Physiotherapy treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-primary-700/80" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          Expert Physiotherapy Care
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
          Professional treatment tailored to your recovery needs
        </p>
        <a
          href="#booking"
          className="btn-primary"
        >
          Book Your Session
        </a>
      </div>
    </div>
  );
} 