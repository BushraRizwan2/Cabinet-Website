import React from 'react';

export interface NavLink {
  id: string;
  title: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  type: 'before' | 'after' | 'completed';
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface WhatYouGetItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PhaseItem {
  id: number;
  title: string;
  description: string;
}

export interface CustomCabinetryItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}