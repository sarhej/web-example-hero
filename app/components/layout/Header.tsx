import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Physiotherapy Clinic Logo"
              width={400}
              height={80}
              className="w-auto h-[50px]"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-12">
            <Link 
              href="#booking" 
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Book Appointment
            </Link>
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Services
            </Link>
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              About Us
            </Link>
            <Link 
              href="#booking" 
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 