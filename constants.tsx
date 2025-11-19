import React from 'react';
import type { NavLink, Service, GalleryImage, Testimonial, FAQItem, WhatYouGetItem, PhaseItem, CustomCabinetryItem, WhyChooseUsItem } from './types';

const HammerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.964 3.964l-.946 9.463a2 2 0 01-1.986 1.858h-3.958a2 2 0 01-1.986-1.858L6.036 3.964m9.928 0a2 2 0 00-1.986-1.858h-3.958a2 2 0 00-1.986 1.858m9.928 0L15 6.964m-9.928 0L9 6.964m0 0v10.072m0-10.072L6.036 3.964m3 0L12 2.036m0 0l2.964 1.928M12 2.036L9 3.964m3 3L6.036 3.964" />
    </svg>
);

const WrenchScrewdriverIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.875 9.168-4.684C19.482 4.135 19 5.522 19 7c0 1.5 0 3 0 3h-3.18c-1.1 0-2.016.9-2.016 2.016v.944a2.25 2.25 0 01-1.135 1.954l-2.422 1.211a2.25 2.25 0 00-1.135 1.954V17z" />
    </svg>
);


const CubeTransparentIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PencilRulerIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

const QualityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const DeadlineIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const USAFlagIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 5C3.67157 5 3 5.67157 3 6.5V17.5C3 18.3284 3.67157 19 4.5 19H19.5C20.3284 19 21 18.3284 21 17.5V6.5C21 5.67157 20.3284 5 19.5 5H4.5ZM12.5 12H19.5V10.5H12.5V12ZM19.5 13.5H12.5V15H19.5V13.5ZM12.5 16.5H19.5V18H12.5V16.5ZM12.5 9H19.5V7.5H12.5V9ZM4.5 6.5H11V12.5H4.5V6.5Z" fill="currentColor"/>
  </svg>
);

const RemoteCalcIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 10H5C4.44772 10 4 10.4477 4 11V13H20V11C20 10.4477 19.5523 10 19 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 13H20V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M15 10C15 7.23858 13.6569 5 12 5C10.3431 5 9 7.23858 9 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const NoFeesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="18" rx="7" ry="2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M5 16V13C5 11.8954 8.13401 11 12 11C15.866 11 19 11.8954 19 13V16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M5 12V9C5 7.89543 8.13401 7 12 7C15.866 7 19 7.89543 19 9V12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 8C15.866 8 19 7.10457 19 6C19 4.89543 15.866 4 12 4C8.13401 4 5 4.89543 5 6C5 7.10457 8.13401 8 12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
);

const UnlimitedRevisionsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 11C6.20914 9.33333 8.83558 8.16667 12 8C15.1644 7.83333 17.7909 9 20 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 14C8.62135 12.8333 10.4913 12.0833 12.5 12C14.5087 11.9167 16.3786 12.6667 18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 17C10.8105 16.5 11.6667 16.1667 12.5 16C13.3333 15.8333 14.1895 16 15 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const CraftsmanshipIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17L14.49 12.1M11.42 15.17l-1.59 1.59M14.49 12.1L9.75 7.36M14.49 12.1l1.59-1.59M9.75 7.36L3 14.11A2.652 2.652 0 003 17.25l3.59 3.59c1.956 1.956 5.122 1.956 7.078 0L19.5 15.06M9.75 7.36L12.1 9.75" />
  </svg>
);

const TransparentIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0H21m-18 0h9.523M5.25 7.5h13.5m-13.5 3h13.5m-13.5 3h13.5m-13.5 3h13.5M3 7.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm0 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm0 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm0 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z" />
  </svg>
);

const ExpertsIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663M12 3.375c-3.418 0-6.162 2.524-6.162 5.625s2.744 5.625 6.162 5.625 6.162-2.524 6.162-5.625S15.418 3.375 12 3.375z" />
  </svg>
);

export const NAV_LINKS: NavLink[] = [
  { id: 'services', title: 'Services' },
  { id: 'b2b', title: 'B2B' },
  { id: 'about', title: 'About Us' },
  { id: 'gallery', title: 'Gallery' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'faq', title: 'FAQ' },
  { id: 'contact', title: 'Contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    icon: <CubeTransparentIcon className="w-10 h-10 text-brand-secondary" />,
    title: 'Cabinet Assembly',
    description: 'Precision assembly of all types of flat-pack and custom cabinets. We ensure every piece fits perfectly for a flawless finish.',
  },
  {
    icon: <WrenchScrewdriverIcon className="w-10 h-10 text-brand-secondary" />,
    title: 'Cabinet Repair',
    description: 'From broken hinges to scratched surfaces, we restore your cabinets to their original beauty and functionality.',
  },
  {
    icon: <HammerIcon className="w-10 h-10 text-brand-secondary" />,
    title: 'Cabinet Installation',
    description: 'Expert installation services for kitchens, bathrooms, and offices. We guarantee a level, secure, and professional fit.',
  },
  {
    icon: <PencilRulerIcon className="w-10 h-10 text-brand-secondary" />,
    title: 'Custom Cabinet Solutions',
    description: 'Collaborate with us to design and create bespoke cabinet solutions that perfectly match your space and style.',
  },
];

export const WHAT_YOU_GET_DATA: WhatYouGetItem[] = [
  {
    id: 1,
    icon: <QualityIcon className="w-12 h-12 text-brand-primary" />,
    title: 'Quality',
    description: 'Kitchen cabinets are manufactured at a factory equipped with modern Italian machinery. This means that your kitchen cabinets will be made with precision - all components are accurately sized.',
  },
  {
    id: 2,
    icon: <DeadlineIcon className="w-12 h-12 text-brand-primary" />,
    title: 'Fixed deadlines',
    description: 'You won’t have to wait for a new kitchen cabinets for 2 months. The production timeline for the set is specified in the contract.',
  },
  {
    id: 3,
    icon: <USAFlagIcon className="w-12 h-12 text-brand-primary" />,
    title: 'Made in the USA',
    description: 'Choose to buy our USA-built cabinets, and you support American jobs and families.',
  },
  {
    id: 4,
    icon: <RemoteCalcIcon className="w-12 h-12 text-brand-primary" />,
    title: 'Remote calculation',
    description: 'Would you like to make a preliminary estimate? We will clarify your preferences over the phone and develop a design project remotely. Then, all that remains is to take precise measurements. Calculation and 3D design are complimentary as a part of our service.',
  },
  {
    id: 5,
    icon: <NoFeesIcon className="w-12 h-12 text-brand-primary" />,
    title: 'No Hidden Fees',
    description: 'We provide the final price for the kitchen cabinets upfront - there will be no additional expenses. You only pay for the manufacturing.',
  },
  {
    id: 6,
    icon: <UnlimitedRevisionsIcon className="w-12 h-12 text-brand-primary" />,
    title: 'Unlimited revisions',
    description: 'We make as many changes as needed to the design project at no cost to you. The designer works with you until we achieve the perfect kitchen: exactly as you envisioned it.',
  },
];

export const PHASES_DATA: PhaseItem[] = [
  {
    id: 1,
    title: 'Dream Layout',
    description: "Let's start by envisioning your dream kitchen together! Tell us your wishes and ideas, and We'll craft the initial 3D layout, bringing your vision to life on-screen.",
  },
  {
    id: 2,
    title: 'Precise Measurements',
    description: 'Our team departs for accurate measurements and collaborates with the designer',
  },
  {
    id: 3,
    title: 'Perfect Design',
    description: 'We present the final 3D project, capturing your dream kitchen in meticulous detail.',
  },
  {
    id: 4,
    title: 'Craftsmanship Unleashed',
    description: 'Production begins, turning designs into reality.',
  },
  {
    id: 5,
    title: 'Seamless Installation',
    description: 'Expert hands ensure a flawless installation, bringing your dream kitchen to life.',
  },
  {
    id: 6,
    title: 'Embrace and Enjoy',
    description: "With your dream kitchen complete, it's time to savor every moment and relish the joy it brings to your daily life.",
  },
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 1,
    icon: <CraftsmanshipIcon className="w-10 h-10 text-brand-secondary" />,
    title: 'Master Craftsmanship',
    description: 'Every piece is built with precision and care by our skilled artisans, using only the finest materials for a flawless and durable finish.',
  },
  {
    id: 2,
    icon: <TransparentIcon className="w-10 h-10 text-brand-secondary" />,
    title: 'Transparent Pricing',
    description: 'We believe in honesty and clarity. You\'ll receive a detailed, upfront quote with no hidden fees, so you know exactly what to expect.',
  },
  {
    id: 3,
    icon: <ExpertsIcon className="w-10 h-10 text-brand-secondary" />,
    title: 'Dedicated Expert Team',
    description: 'Our team of certified professionals is with you every step of the way, from design to installation, ensuring your vision comes to life.',
  },
];

export const CUSTOM_CABINETRY_DATA: CustomCabinetryItem[] = [
  {
    id: 1,
    title: 'Kitchens',
    description: 'Make your kitchen more beautiful and organized with our custom cabinets. They are designed to look amazing and work perfectly to keep everything neat and stylish.',
    imageSrc: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Vanities',
    description: 'Experience luxury in your bathroom with our carefully crafted vanities. They combine style and usefulness to create your own peaceful oasis.',
    imageSrc: 'https://images.pexels.com/photos/6621323/pexels-photo-6621323.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Closets',
    description: 'Get organized with our personalized closet systems. They maximize storage space and make it easy to access your clothes and belongings, creating a tidy and comfortable space for your wardrobe.',
    imageSrc: 'https://images.pexels.com/photos/7018391/pexels-photo-7018391.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/seed/kitchen1/800/600', alt: 'Modern kitchen cabinet installation', type: 'completed' },
  { id: 2, src: 'https://picsum.photos/seed/repairbefore/800/600', alt: 'Damaged cabinet door before repair', type: 'before' },
  { id: 3, src: 'https://picsum.photos/seed/repairafter/800/600', alt: 'Repaired cabinet door looking new', type: 'after' },
  { id: 4, src: 'https://picsum.photos/seed/bathroom/800/600', alt: 'Sleek bathroom vanity installation', type: 'completed' },
  { id: 5, src: 'https://picsum.photos/seed/custom/800/600', alt: 'Custom-built bookshelf cabinets', type: 'completed' },
  { id: 6, src: 'https://picsum.photos/seed/assembly/800/600', alt: 'Cabinet assembly in progress', type: 'completed' },
  { id: 7, src: 'https://picsum.photos/seed/office/800/600', alt: 'Office storage cabinet solution', type: 'completed' },
  { id: 8, src: 'https://picsum.photos/seed/laundry/800/600', alt: 'Laundry room cabinet installation', type: 'completed' },
  { id: 9, src: 'https://i.pinimg.com/564x/41/20/5d/41205d11751a41b1233810287841a10c.jpg', alt: 'Luxurious kitchen with integrated LED lighting and marble backsplash.', type: 'completed' },
  { id: 10, src: 'https://i.pinimg.com/564x/4b/55/92/4b5592237d825c2e2aa36d332306d7e0.jpg', alt: 'Cozy U-shaped kitchen with natural wood cabinets and white countertops.', type: 'completed' },
  { id: 11, src: 'https://i.pinimg.com/564x/c9/a7/a3/c9a7a3536100155b932207559196b17c.jpg', alt: 'Detailed kitchen design showing custom cabinet dimensions.', type: 'completed' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quote: "The team was professional, punctual, and their attention to detail was impeccable. Our new kitchen cabinets are stunning!",
    author: 'Sarah J.',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    quote: "I thought my old cabinets were beyond repair, but they worked their magic and now they look brand new. Saved me a fortune!",
    author: 'Michael B.',
    location: 'Oakland, CA',
  },
  {
    id: 3,
    quote: "From design to installation, the process was seamless. They listened to our needs and delivered a custom solution that exceeded our expectations.",
    author: 'Emily & David R.',
    location: 'Palo Alto, CA',
  },
];

export const FAQ_DATA: FAQItem[] = [
    { id: 1, question: "How much does a consultant's work cost?", answer: "Consultation costs vary based on project scope. We offer a free initial consultation to discuss your needs and provide a detailed quote." },
    { id: 2, question: "Can a customer buy all materials?", answer: "Yes, customers can source their own materials. However, we recommend using our trusted suppliers to ensure quality and compatibility." },
    { id: 3, question: "Do you provide on-site measurements?", answer: "Absolutely. Precise on-site measurements are a crucial part of our process to guarantee a perfect fit for your new cabinets." },
    { id: 4, question: "Do you create 3D designs?", answer: "Yes, we provide detailed 3D designs and renderings to help you visualize your project before any work begins." },
    { id: 5, question: "Do you offer full customization?", answer: "We specialize in custom cabinet solutions. We can tailor the design, materials, finish, and hardware to your exact specifications." },
    { id: 6, question: "How many color options do you have?", answer: "We offer a vast range of color options, including standard palettes and custom color matching to suit your home's decor." },
    { id: 7, question: "Do you only make kitchen cabinets?", answer: "While we specialize in kitchens, we also design and install cabinets for bathrooms, offices, laundry rooms, closets, and more." },
    { id: 8, question: "Do you have a license and requisitions?", answer: "Yes, we are a fully licensed and insured company. All necessary permits and requisitions are handled by our team." },
    { id: 9, question: "How long does the manufacturing take?", answer: "Manufacturing times typically range from 4 to 8 weeks, depending on the complexity and materials of the project." },
    { id: 10, question: "Do you have a designer?", answer: "Our team includes experienced designers who will work with you to create a functional and beautiful cabinet layout." },
    { id: 11, question: "What is your warranty?", answer: "We offer a comprehensive warranty on both our craftsmanship and the materials used. Specific details are provided with your project proposal." },
    { id: 12, question: "Do you have a discount?", answer: "We occasionally offer promotions and discounts. Please inquire during your consultation for any current offers." },
    { id: 13, question: "Where is the manufacturing done?", answer: "All of our custom cabinets are manufactured locally in our state-of-the-art workshop to ensure the highest quality control." },
    { id: 14, question: "How long have you been in business?", answer: "Cabinet Masters Pro has been proudly serving clients for over 15 years, building a reputation for quality and reliability." },
];