import React from 'react';
import { WHAT_YOU_GET_DATA } from '../constants';
import type { WhatYouGetItem } from '../types';

const FeatureCard: React.FC<{ item: WhatYouGetItem }> = ({ item }) => (
  <div className="flex items-start space-x-6 text-left">
    <div className="flex-shrink-0 mt-1">
      {item.icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </div>
  </div>
);

const WhatYouGet: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary leading-tight">What You'll Get</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our goal is to deliver value to our client through high quality services
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
        {WHAT_YOU_GET_DATA.map((item) => (
          <FeatureCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhatYouGet;
