import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Kranti Classes</title>
                <meta name="description" content="Learn about Kranti Classes, our mission, vision, and the expert faculty dedicated to your success." />
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">About Kranti Classes</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Our Mission"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To empower every student with the knowledge, skills, and confidence to achieve their academic goals. We believe in nurturing potential through personalized guidance and a disciplined learning environment.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To be the most trusted educational institute known for excellence in coaching and character building, shaping the future leaders of tomorrow.
                        </p>
                    </div>
                </div>

                <section className="py-16 md:py-20">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Why Kranti Classes</h2>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Kranti Classes is a trusted coaching institute for Class 6–12, JEE Main, JEE Advanced, and NEET preparation. With over 7+ years of teaching experience, we focus on conceptual clarity, disciplined learning, and result-oriented preparation.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Experienced and dedicated faculty</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Small batch sizes for personalized attention</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Strong foundation for Class 6–10 students</span>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Focused JEE & NEET preparation</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Regular tests and performance analysis</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Trusted by parents and students</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Director's Message</h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-700 italic mb-6">
                            "As a teacher, I believe every student has potential. It just needs the right guidance and environment to flourish. At Kranti Classes, we don't just teach; we mentor, we guide, and we walk the path of success with you."
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900">Ilakranti Gupta</h3>
                        <p className="text-blue-600">Founder & Director</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
