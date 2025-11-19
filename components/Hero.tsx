import React, { useState, useEffect, useCallback } from 'react';

interface HeroProps {
  onCTAClick: () => void;
}

const heroSlides = [
    { 
        url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        alt: 'Stunning modern kitchen with sleek cabinets',
        title: 'Craft Your Dream Kitchen',
        subtitle: 'From concept to completion, we create custom kitchens that blend style and functionality.'
    },
    { 
        url: 'https://images.pexels.com/photos/6588931/pexels-photo-6588931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        alt: 'Elegant bathroom vanity',
        title: 'Luxurious Bathroom Vanities',
        subtitle: 'Transform your bathroom into a personal oasis with our bespoke vanity solutions.'
    },
    { 
        url: 'https://images.pexels.com/photos/4392873/pexels-photo-4392873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        alt: 'Spacious walk-in closet with custom shelving',
        title: 'Organized & Elegant Closets',
        subtitle: 'Maximize your space with custom closet systems designed for your lifestyle.'
    },
    { 
        url: 'https://images.pexels.com/photos/3992461/pexels-photo-3992461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        alt: 'Modern kitchen with custom cabinets',
        title: 'Precision Cabinet Installation',
        subtitle: 'Expert installation ensuring a perfect, level, and secure fit for all cabinetry.'
    },
    { 
        url: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        alt: 'A cabinet door being repaired',
        title: 'Meticulous Cabinet Repair',
        subtitle: 'We restore your cabinets to their original glory, from minor scratches to major fixes.'
    },
    {
        url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Clean and modern kitchen interior',
        title: 'Bespoke Cabinet Solutions',
        subtitle: 'Collaborate with us to design and create custom cabinet solutions that perfectly match your space and style.'
    }
];

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);


const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);


  return (
    <div className="relative bg-brand-primary text-white h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
          {heroSlides.map((slide, index) => (
              <div
                  key={index}
                  className="absolute w-full h-full bg-cover bg-center transition-all duration-1000 ease-out-expo"
                  style={{ 
                    backgroundImage: `url('${slide.url}')`,
                    opacity: index === currentIndex ? 1 : 0,
                    transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)'
                  }}
                  role="img"
                  aria-label={slide.alt}
                  aria-hidden={index !== currentIndex}
              />
          ))}
      </div>
      <div className="absolute inset-0 bg-black/60 z-1"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl text-center md:text-left">
           <div key={currentIndex} className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
                {heroSlides[currentIndex].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                {heroSlides[currentIndex].subtitle}
              </p>
          </div>
          <button
            onClick={onCTAClick}
            className="px-8 py-4 text-lg font-semibold text-brand-primary bg-brand-secondary rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Get a Free Estimate
          </button>
        </div>
      </div>
      
      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 p-3 bg-black/30 rounded-full hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-secondary"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 p-3 bg-black/30 rounded-full hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-secondary"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex ? 'bg-brand-secondary scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-current={currentIndex === slideIndex}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;
