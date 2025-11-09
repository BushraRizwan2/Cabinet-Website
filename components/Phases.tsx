import React from 'react';
import { PHASES_DATA } from '../constants';

const Phases: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary leading-tight">Phases of our works</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* The vertical timeline bar - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 h-full w-0.5 bg-gray-200"></div>

        <div className="space-y-12 md:space-y-16">
          {PHASES_DATA.map((phase, index) => (
            <div key={phase.id} className="md:grid md:grid-cols-2 md:gap-x-16 relative">
              
              {/* Timeline Point for Desktop */}
              <div className="hidden md:flex absolute top-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-brand-secondary rounded-full z-10 justify-center items-center"></div>

              {/* Mobile Timeline Point & Line */}
              <div className="md:hidden absolute top-1 left-4 -translate-x-1/2 w-5 h-5 bg-white border-2 border-brand-secondary rounded-full z-10"></div>
              <div className="md:hidden absolute top-1 left-4 -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

              {/* Content */}
              <div className={`
                ${index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2 md:text-left'}
                pl-12 md:pl-0 md:pr-0
              `}>
                <h3 className="text-xl font-bold text-brand-primary mb-2">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phases;
