import React, { useState } from 'react';
import B2BContactModal from './B2BContactModal';

const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const B2B: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
              <img
                  src="https://picsum.photos/seed/b2b-partnership/800/600"
                  alt="Professional design consultation for custom cabinetry"
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-2">
                  Elevate Your Business with Bespoke Elegance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">B2B Partnership Opportunities</h2>
              <div className="mt-4 mb-6 h-1 w-24 bg-brand-secondary mx-auto lg:mx-0 rounded-full"></div>

              <div className="space-y-4 text-gray-600">
                  <p>
                      Attention Entrepreneurs in Home Improvement and Interior Design! Collaborate with <strong>Cabinet Masters Pro</strong> to offer exquisite custom kitchen, vanities, and closet solutions that redefine homes. Our meticulous craftsmanship ensures top-tier elegance in every detail.
                  </p>
                  <p>
                      Partner with us to supercharge your brand. Your clients gain bespoke interiors while you enjoy a competitive edge. Take advantage of special prices tailored for partners like you. Infuse your portfolio with elegance, setting your brand apart.
                  </p>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-brand-primary bg-brand-secondary rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2.5" />
                  Contact Us for Partnership
                </button>
              </div>
          </div>
        </div>
      </div>
      <B2BContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default B2B;