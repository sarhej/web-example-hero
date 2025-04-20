import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Pain Management',
    description: 'Effective treatment for chronic and acute pain conditions',
    image: '/images/pain-management.png'
  },
  {
    title: 'Sports Injury',
    description: 'Specialized care for athletes and sports-related injuries',
    image: '/images/sports-injury.png'
  },
  {
    title: 'Post-Surgery Rehabilitation',
    description: 'Comprehensive recovery programs after surgical procedures',
    image: '/images/post-surgery.png'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12">
          Comprehensive physiotherapy treatments tailored to your needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-600">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 