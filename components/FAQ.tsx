import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import type { FAQItem as FAQItemType } from '../types';

const FAQItem: React.FC<{ item: FAQItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = `faq-question-${item.id}`;
  const answerId = `faq-answer-${item.id}`;

  return (
    <div className="border-b border-gray-200 py-4">
      {/* Wrap the button in a heading for better semantic structure. */}
      {/* Styles from the original question span are moved to the heading. */}
      <h3 className="font-medium text-brand-primary">
        <button
          id={buttonId} // Add ID to be referenced by the answer panel
          className="flex justify-between items-center w-full text-left space-x-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={answerId} // Link the button to the panel it controls
        >
          {/* Question text is now a direct child of the button for simplicity */}
          {item.question}
          <span className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={answerId} // Add ID to be targeted by the button
        role="region" // Define the content as a landmark region
        aria-labelledby={buttonId} // Associate the region with its heading/button
        aria-hidden={!isOpen} // Explicitly hide content from screen readers when collapsed
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <p className="pt-2 text-gray-600">
            {item.answer}
            </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const half = Math.ceil(FAQ_DATA.length / 2);
  const firstHalf = FAQ_DATA.slice(0, half);
  const secondHalf = FAQ_DATA.slice(half);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">FAQ</h2>
        <div className="mt-4 h-1 w-24 bg-brand-secondary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto bg-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
          <div>
            {firstHalf.map((item) => <FAQItem key={item.id} item={item} />)}
          </div>
          <div>
            {secondHalf.map((item) => <FAQItem key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
