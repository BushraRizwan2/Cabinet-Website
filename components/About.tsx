import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://picsum.photos/seed/teamwork/800/600"
            alt="Cabinet Masters Pro team at work"
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">About Cabinet Masters Pro</h2>
          <div className="mt-4 mb-6 h-1 w-24 bg-brand-secondary mx-auto lg:mx-0 rounded-full"></div>
          <p className="text-gray-700 text-lg mb-4">
            Founded over a decade ago, Cabinet Masters Pro was born from a passion for woodworking and a commitment to exceptional craftsmanship. We believe that cabinets are more than just storage; they are the centerpiece of a room's design and functionality.
          </p>
          <p className="text-gray-600 mb-4">
            Our team of certified professionals is dedicated to providing reliable, high-quality service on every project, big or small. We pride ourselves on our meticulous attention to detail, transparent communication, and our promise to leave every client completely satisfied.
          </p>
           <ul className="text-left space-y-2 text-gray-600">
             <li className="flex items-start">
               <svg className="w-5 h-5 text-brand-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               <span><strong>Certified & Insured:</strong> Peace of mind with every project.</span>
             </li>
             <li className="flex items-start">
               <svg className="w-5 h-5 text-brand-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               <span><strong>Quality Materials:</strong> We use only the best for lasting results.</span>
             </li>
              <li className="flex items-start">
               <svg className="w-5 h-5 text-brand-secondary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               <span><strong>Customer-Focused:</strong> Your vision is our blueprint.</span>
             </li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default About;