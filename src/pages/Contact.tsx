import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const phoneNumber = '+917834932101';
        const message = `New Contact Form Submission:%0A%0A` +
                      `*Name:* ${formData.name}%0A` +
                      `*Email:* ${formData.email}%0A` +
                      `*Phone:* ${formData.phone}%0A` +
                      `*Message:* ${formData.message}`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };
    return (
        <>
            <Helmet>
                <title>Contact Us | Kranti Classes</title>
                <meta name="description" content="Get in touch with Kranti Classes. Visit our center, call us, or send an email for admissions and enquiries." />
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-gray-600">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                                    <p className="text-gray-600">Gala Gymkhana Rd, South Bopal, Ahmedabad</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                                    <p className="text-gray-600">+91 7834932101</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">info@kranticlasses.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3897456789!2d72.47089!3d23.0074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3c7e4c9c9d%3A0x1234567890abcdef!2sGarden%20Residency%201%2C%20South%20Bopal%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="320"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kranti Classes Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                    id="name"
                                    name="name"
                                    type="text" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                                    placeholder="John Doe" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input 
                                    id="email"
                                    name="email"
                                    type="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                                    placeholder="john@example.com" 
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input 
                                    id="phone"
                                    name="phone"
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                                    placeholder="+91 98765 43210" 
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows={4} 
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
