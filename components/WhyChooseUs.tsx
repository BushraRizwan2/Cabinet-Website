import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../constants';
import type { WhyChooseUsItem } from '../types';

const FeatureCard: React.FC<{ item: WhyChooseUsItem }> = ({ item }) => (
  <div className="bg-brand-light p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2">
    <div className="flex justify-center mb-4">{item.icon}</div>
    <h3 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
    <p className="text-gray-600">{item.description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Why Choose Us?</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the difference that dedication, quality, and expertise make.
        </p>
        <div className="mt-4 h-1 w-24 bg-brand-secondary mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {WHY_CHOOSE_US_DATA.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
