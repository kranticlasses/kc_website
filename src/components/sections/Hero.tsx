import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>

            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Empowering Students, <br />
                            <span className="text-orange-400">Shaping Futures.</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-lg">
                            Expert coaching for Class 6–12, JEE, & NEET. Join the league of toppers with Kranti Classes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button to="/contact" variant="secondary" className="gap-2">
                                Book Free Demo <ArrowRight size={18} />
                            </Button>
                            <a
                                href="https://wa.me/917834932101"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors bg-[#25D366] hover:bg-[#128C7E] text-white"
                            >
                                <MessageCircle size={18} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-80 h-full aspect-square">
                            <div className="absolute -inset-4 bg-orange-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                            <img
                                src="/IlakrantiFaculty.webp"
                                alt="Students and teacher at Kranti Classes in Ahmedabad preparing for JEE, NEET and board exams"
                                className="relative rounded-2xl shadow-2xl border-4 border-white/20 max-w-md w-full transform hover:scale-105 transition-transform duration-500 object-cover object-top h-full max-h-[400px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
