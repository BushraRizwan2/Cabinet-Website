import React from 'react';

interface B2BProps {
  onContactClick: () => void;
}

const B2B: React.FC<B2BProps> = ({ onContactClick }) => {
  return (
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">B2B</h2>
            <div className="mt-4 mb-6 h-1 w-24 bg-brand-secondary mx-auto lg:mx-0 rounded-full"></div>

            <div className="space-y-4 text-gray-600">
                <p>
                    Attention Entrepreneurs in Home Improvement and Interior Design! Collaborate with <strong>Cabinets Craft</strong> to offer exquisite custom kitchen, vanities, and closet solutions that redefine homes. Our meticulous craftsmanship ensures top-tier elegance in every detail.
                </p>
                <p>
                    Partner with us to supercharge your brand. Your clients gain bespoke interiors while you enjoy a competitive edge. Take advantage of special prices tailored for partners like you. Infuse your portfolio with elegance, setting your brand apart.
                </p>
                <p>
                    <a 
                        href="#contact" 
                        onClick={(e) => { e.preventDefault(); onContactClick(); }} 
                        className="font-semibold text-brand-secondary hover:underline cursor-pointer"
                    >
                        Contact Us
                    </a> today to secure exclusive rates and create interiors that captivate and inspire. Together, let's craft a narrative of sophistication and style, elevating your brand's visibility and impact.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default B2B;