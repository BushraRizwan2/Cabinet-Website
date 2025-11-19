import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CustomCabinetry from './components/CustomCabinetry';
import WhatYouGet from './components/WhatYouGet';
import Phases from './components/Phases';
import B2B from './components/B2B';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    b2b: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    gallery: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const sectionRef = sectionRefs[id as keyof typeof sectionRefs];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-brand-light text-brand-primary font-sans">
      <Header navLinks={NAV_LINKS} onNavLinkClick={scrollToSection} activeSection={activeSection} />
      <main>
        <section id="home" ref={sectionRefs.home}>
          <Hero onCTAClick={() => scrollToSection('contact')} />
        </section>
        <section id="services" ref={sectionRefs.services} className="py-16 md:py-24 bg-white">
          <Services />
        </section>
        <section id="custom-cabinetry" className="py-16 md:py-24 bg-brand-light">
          <CustomCabinetry />
        </section>
        <section id="what-you-get" className="py-16 md:py-24 bg-white">
          <WhatYouGet />
        </section>
        <section id="phases" className="py-16 md:py-24 bg-brand-light">
          <Phases />
        </section>
        <section id="b2b" ref={sectionRefs.b2b} className="py-16 md:py-24 bg-white">
          <B2B />
        </section>
        <section id="about" ref={sectionRefs.about} className="py-16 md:py-24 bg-brand-light">
          <About />
        </section>
        <section id="why-choose-us" className="py-16 md:py-24 bg-white">
          <WhyChooseUs />
        </section>
        <section id="gallery" ref={sectionRefs.gallery} className="py-16 md:py-24 bg-brand-light">
          <Gallery />
        </section>
        <section id="testimonials" ref={sectionRefs.testimonials} className="py-16 md:py-24 bg-white">
          <Testimonials />
        </section>
        <section id="faq" ref={sectionRefs.faq} className="py-16 md:py-24 bg-brand-light">
          <FAQ />
        </section>
        <section id="contact" ref={sectionRefs.contact} className="py-16 md:py-24 bg-brand-dark text-white">
          <Contact />
        </section>
      </main>
      <Footer onLinkClick={scrollToSection} />
    </div>
  );
};

export default App;