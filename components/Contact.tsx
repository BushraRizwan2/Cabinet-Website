import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        requestCallback: false,
        callbackTime: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
        const name = target.name;

        setFormData(prev => {
            const newState = { ...prev, [name]: value };
            if (name === 'requestCallback' && !value) {
                newState.callbackTime = '';
            }
            return newState;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Here you would typically send the data to a server
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Ready to start your project? Contact us today for a free, no-obligation quote.
                </p>
                <div className="mt-4 h-1 w-24 bg-brand-secondary mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Contact Form */}
                <div className="lg:w-2/3 bg-brand-primary p-8 rounded-lg shadow-xl">
                    {isSubmitted ? (
                         <div className="text-center py-12">
                            <h3 className="text-2xl font-bold text-brand-secondary mb-2">Thank You!</h3>
                            <p className="text-gray-300">Your message has been sent. We will get back to you shortly.</p>
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone (Optional)</label>
                                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                            </div>
                            <div className="md:col-span-2 flex items-center">
                                <input 
                                    id="requestCallback" 
                                    name="requestCallback" 
                                    type="checkbox" 
                                    checked={formData.requestCallback} 
                                    onChange={handleChange}
                                    className="h-4 w-4 rounded border-gray-600 bg-brand-dark text-brand-secondary focus:ring-brand-secondary" 
                                />
                                <label htmlFor="requestCallback" className="ml-2 block text-sm text-gray-300">Request a callback</label>
                            </div>
                            
                            {formData.requestCallback && (
                                <div className="md:col-span-2">
                                    <label htmlFor="callbackTime" className="block text-sm font-medium text-gray-300">Preferred Callback Time</label>
                                    <input 
                                        type="text" 
                                        name="callbackTime" 
                                        id="callbackTime" 
                                        value={formData.callbackTime} 
                                        onChange={handleChange} 
                                        placeholder="e.g., Weekday mornings, after 4 PM"
                                        className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" 
                                    />
                                </div>
                            )}

                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-brand-dark border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"></textarea>
                            </div>
                        </div>
                        <div className="mt-6 text-right">
                            <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-brand-primary bg-brand-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary focus:ring-offset-brand-dark transition-colors duration-200">
                                Send Message
                            </button>
                        </div>
                    </form>
                    )}
                </div>
                {/* Contact Info */}
                <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
                    <div className="bg-brand-primary p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-brand-secondary mb-2">Contact Information</h3>
                        <p className="text-gray-300">123 Cabinetry Lane, Suite 100<br/>Woodwork City, ST 12345</p>
                        <p className="mt-4"><a href="tel:555-123-4567" className="text-gray-300 hover:text-brand-secondary">P: (555) 123-4567</a></p>
                        <p><a href="mailto:contact@cabinetmasterspro.com" className="text-gray-300 hover:text-brand-secondary">E: contact@cabinetmasterspro.com</a></p>
                    </div>
                     <div className="bg-brand-primary p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-brand-secondary mb-2">Follow Us</h3>
                        <div className="flex justify-center lg:justify-start space-x-4 mt-2">
                           <a href="#" className="text-gray-400 hover:text-brand-secondary"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.598 0 0 .598 0 1.334v21.332C0 23.402.598 24 1.334 24h11.493V14.71H9.553v-4.41h3.274V7.03c0-3.254 1.935-5.014 4.88-5.014 1.396 0 2.83.262 2.83.262v3.744h-1.923c-1.6 0-2.08.956-2.08 2.036v2.42h4.21l-.67 4.41h-3.54V24h6.113c.737 0 1.335-.598 1.335-1.334V1.334C24 .598 23.402 0 22.675 0z"/></svg></a>
                           <a href="#" className="text-gray-400 hover:text-brand-secondary"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.252 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.171 0-3.535.012-4.782.069-2.736.125-3.953 1.338-4.078 4.078-.057 1.247-.069 1.612-.069 4.782s.012 3.535.069 4.782c.125 2.736 1.343 3.953 4.078 4.078 1.247.057 1.612.069 4.782.069s3.535-.012 4.782-.069c2.736-.125 3.953-1.343 4.078-4.078.057-1.247.069-1.612.069-4.782s-.012-3.535-.069-4.782c-.125-2.736-1.342-3.953-4.078-4.078C15.535 3.615 15.171 3.604 12 3.604zm0 3.064c-2.883 0-5.209 2.326-5.209 5.209s2.326 5.209 5.209 5.209 5.209-2.326 5.209-5.209-2.326-5.209-5.209-5.209zm0 8.569c-1.853 0-3.36-1.507-3.36-3.36s1.507-3.36 3.36-3.36 3.36 1.507 3.36 3.36-1.507 3.36-3.36 3.36zm6.398-8.471c-.786 0-1.424.638-1.424 1.424s.638 1.424 1.424 1.424 1.424-.638 1.424-1.424-.638-1.424-1.424-1.424z"/></svg></a>
                           <a href="#" className="text-gray-400 hover:text-brand-secondary"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.5 0h-15C2.01 0 0 2.01 0 4.5v15C0 21.99 2.01 24 4.5 24h15c2.49 0 4.5-2.01 4.5-4.5v-15C24 2.01 21.99 0 19.5 0zM8.25 20.25h-3v-10.5h3v10.5zM6.75 8.25c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm13.5 12h-3v-5.25c0-1.25-.025-2.875-1.75-2.875-1.75 0-2.025 1.375-2.025 2.75v5.375h-3v-10.5h2.875v1.325h.05c.4-.75 1.375-1.525 2.825-1.525 3.025 0 3.575 1.975 3.575 4.55v6.15z"/></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;