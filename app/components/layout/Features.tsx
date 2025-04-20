import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Expert Physiotherapists',
    description: 'Our team of certified professionals has years of experience in various physiotherapy treatments',
    image: '/images/expert-therapists.png'
  },
  {
    title: 'Personalized Care',
    description: 'Customized treatment plans tailored to your specific needs and recovery goals',
    image: '/images/personalized-care.png'
  },
  {
    title: 'Modern Facilities',
    description: 'State-of-the-art equipment and comfortable treatment rooms for optimal care',
    image: '/images/Modern Facilities.png'
  },
  {
    title: 'Evidence-Based Treatment',
    description: 'We use proven therapeutic techniques backed by scientific research',
    image: '/images/evidence-based.png'
  },
  {
    title: 'Convenient Scheduling',
    description: 'Flexible appointment times to fit your busy lifestyle',
    image: '/images/convenient-scheduling.png'
  },
  {
    title: 'Comprehensive Care',
    description: 'From injury prevention to rehabilitation, we provide complete physiotherapy services',
    image: '/images/comprehensive-care.png'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-center text-gray-600 mb-12">
          Experience the difference with our professional physiotherapy services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 