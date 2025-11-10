import React, { useState, useEffect } from 'react';
import Modal from './Modal';

interface B2BContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const B2BContactModal: React.FC<B2BContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('B2B Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 3000);
    };
    
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setFormData({ name: '', companyName: '', email: '', phone: '', message: '' });
        }
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-brand-dark p-8 rounded-lg shadow-xl text-white w-full max-w-2xl mx-auto">
                {isSubmitted ? (
                    <div className="text-center py-12">
                        <h3 className="text-2xl font-bold text-brand-secondary mb-2">Thank You!</h3>
                        <p className="text-gray-300">Your partnership inquiry has been sent. We will be in touch shortly.</p>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white">B2B Partnership Inquiry</h2>
                            <p className="mt-2 text-gray-300">Let's build something great together. Fill out the form below to get started.</p>
                            <div className="mt-4 h-1 w-24 bg-brand-secondary mx-auto rounded-full"></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="b2b-name" className="block text-sm font-medium text-gray-300">Full Name</label>
                                    <input type="text" name="name" id="b2b-name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-brand-primary border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                                </div>
                                <div>
                                    <label htmlFor="b2b-companyName" className="block text-sm font-medium text-gray-300">Company Name</label>
                                    <input type="text" name="companyName" id="b2b-companyName" required value={formData.companyName} onChange={handleChange} className="mt-1 block w-full bg-brand-primary border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                                </div>
                                <div>
                                    <label htmlFor="b2b-email" className="block text-sm font-medium text-gray-300">Email</label>
                                    <input type="email" name="email" id="b2b-email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-brand-primary border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                                </div>
                                <div>
                                    <label htmlFor="b2b-phone" className="block text-sm font-medium text-gray-300">Phone (Optional)</label>
                                    <input type="tel" name="phone" id="b2b-phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full bg-brand-primary border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="b2b-message" className="block text-sm font-medium text-gray-300">Message</label>
                                    <textarea id="b2b-message" name="message" rows={5} required value={formData.message} onChange={handleChange} placeholder="Tell us about your business and how you'd like to partner with us..." className="mt-1 block w-full bg-brand-primary border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"></textarea>
                                </div>
                            </div>
                            <div className="mt-8 text-right">
                                <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-brand-primary bg-brand-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary focus:ring-offset-brand-dark transition-colors duration-200">
                                    Submit Inquiry
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default B2BContactModal;
