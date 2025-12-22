import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Kranti Classes</h3>
                        <p className="text-sm mb-4">
                            Empowering students to achieve their dreams through expert coaching and personalized guidance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1BsWpnboxH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/kranti_classes" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><Instagram size={20} /></a>
                            <a href="https://youtube.com/@easyphysicsbyilakranti" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors"><Youtube size={20} /></a>
                            <a href="https://wa.me/917834932101" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors"><MessageCircle size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                            <li><Link to="/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
                            <li><Link to="/results" className="hover:text-white transition-colors">Results</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link to="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/legal/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/legal/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                                <span>Gala Gymkhana Rd, South Bopal, Ahmedabad - 380058</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-blue-500 shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-white">+91 78349 32101</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-blue-500 shrink-0" />
                                <a href="mailto:info@kranticlasses.com" className="hover:text-white">info@kranticlasses.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Kranti Classes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
