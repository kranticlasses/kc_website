import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const images = [
        {
            src: "/IlakrantiFaculty.webp",
            alt: "Students and teacher at Kranti Classes in Ahmedabad preparing for JEE, NEET and board exams",
            fit: "object-cover object-top"
        },
        {
            src: "/Results.webp",
            alt: "Kranti Classes results and student achievements",
            fit: "object-contain"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

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
                        <div className="relative w-full max-w-md">
                            <div 
                                className="relative w-80 sm:w-full mx-auto transition-[aspect-ratio] duration-500"
                                style={{ aspectRatio: currentIndex === 0 ? '1 / 1' : '1587 / 2245' }}
                            >
                                <div className="absolute -inset-4 bg-orange-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                                
                                <div className="relative h-full w-full rounded-2xl shadow-2xl border-4 border-white/20 overflow-hidden group">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentIndex}
                                            src={images[currentIndex].src}
                                            alt={images[currentIndex].alt}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className={`h-full w-full ${images[currentIndex].fit}`}
                                        />
                                    </AnimatePresence>

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                                        aria-label="Previous slide"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                                        aria-label="Next slide"
                                    >
                                        <ChevronRight size={20} />
                                    </button>

                                    {/* Navigation Dots */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${
                                                    index === currentIndex ? "bg-white w-4" : "bg-white/50"
                                                }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

