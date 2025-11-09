import React from 'react';

interface HeroProps {
  onCTAClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <div className="relative bg-brand-primary text-white h-screen min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
            Precision Cabinet Assembly, Repair & Installation
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Bringing craftsmanship and precision to every project. We specialize in transforming your spaces with beautiful, functional, and perfectly fitted cabinetry.
          </p>
          <button
            onClick={onCTAClick}
            className="px-8 py-4 text-lg font-semibold text-brand-primary bg-brand-secondary rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Get a Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;