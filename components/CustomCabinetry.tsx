import React from 'react';
import { CUSTOM_CABINETRY_DATA } from '../constants';
import type { CustomCabinetryItem } from '../types';

const CabinetryCard: React.FC<{ item: CustomCabinetryItem }> = ({ item }) => (
  <div className="text-center">
    <div className="relative overflow-hidden rounded-lg shadow-lg group mb-6">
      <img src={item.imageSrc} alt={item.title} className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white text-3xl font-bold">{item.title}</h3>
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed px-4">{item.description}</p>
  </div>
);

const CustomCabinetry: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">We Provide Custom Cabinetry</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CUSTOM_CABINETRY_DATA.map((item) => (
          <CabinetryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CustomCabinetry;