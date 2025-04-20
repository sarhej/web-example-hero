import React from 'react';

const features = [
  {
    title: 'Expert Physiotherapists',
    description: 'Our team of certified professionals has years of experience in various physiotherapy treatments'
  },
  {
    title: 'Personalized Care',
    description: 'Customized treatment plans tailored to your specific needs and recovery goals'
  },
  {
    title: 'Modern Facilities',
    description: 'State-of-the-art equipment and comfortable treatment rooms for optimal care'
  },
  {
    title: 'Evidence-Based Treatment',
    description: 'We use proven therapeutic techniques backed by scientific research'
  },
  {
    title: 'Convenient Scheduling',
    description: 'Flexible appointment times to fit your busy lifestyle'
  },
  {
    title: 'Comprehensive Care',
    description: 'From injury prevention to rehabilitation, we provide complete physiotherapy services'
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
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 