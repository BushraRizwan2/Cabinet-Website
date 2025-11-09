import React from 'react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-brand-light p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2">
    <div className="flex justify-center mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-brand-primary mb-2">{service.title}</h3>
    <p className="text-gray-600 mb-4">{service.description}</p>
    <button className="font-semibold text-brand-secondary hover:text-brand-primary transition-colors">
      Learn More &rarr;
    </button>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of cabinet services to meet your needs.
        </p>
        <div className="mt-4 h-1 w-24 bg-brand-secondary mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;