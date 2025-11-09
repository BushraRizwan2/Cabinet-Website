import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import type { Testimonial } from '../types';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
  </svg>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
    <div className="flex text-brand-secondary mb-4">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
    </div>
    <blockquote className="text-gray-600 italic flex-grow">"{testimonial.quote}"</blockquote>
    <footer className="mt-4">
      <p className="font-bold text-brand-primary">{testimonial.author}</p>
      <p className="text-sm text-gray-500">{testimonial.location}</p>
    </footer>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">What Our Clients Say</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We're proud of our work, but we're even prouder of the relationships we've built.
        </p>
        <div className="mt-4 h-1 w-24 bg-brand-secondary mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;