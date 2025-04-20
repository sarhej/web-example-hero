import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>123 Healthcare Avenue</p>
            <p>City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@physioclinic.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <p>Monday - Friday: 8am - 7pm</p>
            <p>Saturday: 9am - 5pm</p>
            <p>Sunday: Closed</p>
            <p className="mt-2 text-primary-200">Emergency appointments available</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#booking" className="hover:text-primary-200">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-primary-800">
          <p>&copy; {new Date().getFullYear()} Physio Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 