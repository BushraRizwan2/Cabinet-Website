import React from 'react';

interface FooterProps {
  onLinkClick: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const year = new Date().getFullYear();

  const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
       <svg className="w-8 h-8 text-brand-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125A2.25 2.25 0 014.5 4.875h15a2.25 2.25 0 012.25 2.25v9.75a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-9.75z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125v.001M2.25 10.125v.001M5.25 7.125v.001M5.25 10.125v.001M8.25 7.125v.001M8.25 10.125v.001M11.25 7.125v.001M11.25 10.125v.001M14.25 7.125v.001M14.25 10.125v.001M17.25 7.125v.001M17.25 10.125v.001" />
       </svg>
      <span className="text-xl font-bold tracking-tight text-white">Cabinet Masters Pro</span>
    </div>
  );

  return (
    <footer className="bg-brand-primary text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); onLinkClick('home'); }}>
              <Logo />
            </a>
            <p className="mt-4 max-w-sm text-gray-400">
              Your trusted partner for professional cabinet assembly, repair, and installation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); onLinkClick('services'); }} className="hover:text-brand-secondary transition-colors">Services</a></li>
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); onLinkClick('gallery'); }} className="hover:text-brand-secondary transition-colors">Gallery</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onLinkClick('contact'); }} className="hover:text-brand-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
                <li><a href="tel:555-123-4567" className="hover:text-brand-secondary">(555) 123-4567</a></li>
                <li><a href="mailto:contact@cabinetmasterspro.com" className="hover:text-brand-secondary">contact@cabinetmasterspro.com</a></li>
            </ul>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-brand-secondary"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.598 0 0 .598 0 1.334v21.332C0 23.402.598 24 1.334 24h11.493V14.71H9.553v-4.41h3.274V7.03c0-3.254 1.935-5.014 4.88-5.014 1.396 0 2.83.262 2.83.262v3.744h-1.923c-1.6 0-2.08.956-2.08 2.036v2.42h4.21l-.67 4.41h-3.54V24h6.113c.737 0 1.335-.598 1.335-1.334V1.334C24 .598 23.402 0 22.675 0z"/></svg></a>
                <a href="#" className="text-gray-400 hover:text-brand-secondary"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.252 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.171 0-3.535.012-4.782.069-2.736.125-3.953 1.338-4.078 4.078-.057 1.247-.069 1.612-.069 4.782s.012 3.535.069 4.782c.125 2.736 1.343 3.953 4.078 4.078 1.247.057 1.612.069 4.782.069s3.535-.012 4.782-.069c2.736-.125 3.953-1.343 4.078-4.078.057-1.247.069-1.612.069-4.782s-.012-3.535-.069-4.782c-.125-2.736-1.342-3.953-4.078-4.078C15.535 3.615 15.171 3.604 12 3.604zm0 3.064c-2.883 0-5.209 2.326-5.209 5.209s2.326 5.209 5.209 5.209 5.209-2.326 5.209-5.209-2.326-5.209-5.209-5.209zm0 8.569c-1.853 0-3.36-1.507-3.36-3.36s1.507-3.36 3.36-3.36 3.36 1.507 3.36 3.36-1.507 3.36-3.36 3.36zm6.398-8.471c-.786 0-1.424.638-1.424 1.424s.638 1.424 1.424 1.424 1.424-.638 1.424-1.424-.638-1.424-1.424-1.424z"/></svg></a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">&copy; {year} Cabinet Masters Pro. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;