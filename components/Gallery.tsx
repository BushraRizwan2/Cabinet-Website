import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';
import type { GalleryImage } from '../types';
import Modal from './Modal';

type FilterKey = 'all' | 'completed' | 'before-after';

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

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const galleryFilters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'completed', label: 'Completed Work' },
    { key: 'before-after', label: 'Before & After' },
  ];

  const displayedImages = useMemo(() => {
    switch (activeFilter) {
      case 'completed':
        return GALLERY_IMAGES.filter((image) => image.type === 'completed');
      case 'before-after':
        return GALLERY_IMAGES.filter(
          (image) => image.type === 'before' || image.type === 'after'
        );
      case 'all':
      default:
        return GALLERY_IMAGES;
    }
  }, [activeFilter]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showNext = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((prevIndex) => (prevIndex! + 1) % displayedImages.length);
  }, [currentIndex, displayedImages.length]);

  const showPrev = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((prevIndex) => (prevIndex! - 1 + displayedImages.length) % displayedImages.length);
  }, [currentIndex, displayedImages.length]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };
    if (currentIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, showNext, showPrev]);

  const selectedImage = currentIndex !== null ? displayedImages[currentIndex] : null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Project Gallery</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          See the quality and craftsmanship of our work for yourself.
        </p>
        <div className="mt-4 h-1 w-24 bg-brand-secondary mx-auto rounded-full"></div>
      </div>

      <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
        {galleryFilters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-200 ${
              activeFilter === key
                ? 'bg-brand-secondary text-brand-primary shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-center font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedImage} onClose={closeModal}>
        {selectedImage && (
          <div className="relative flex items-center justify-center">
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-8 h-8 text-white" />
            </button>
            
            <div className="flex flex-col items-center">
                <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
                />
                <p className="text-white text-center mt-4 bg-black/50 p-2 rounded-md">
                    {selectedImage.alt}
                </p>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-8 h-8 text-white" />
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
