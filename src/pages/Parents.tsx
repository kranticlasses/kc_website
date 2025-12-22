import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Bus, MessageCircle, Clock } from 'lucide-react';

const Parents = () => {
    return (
        <>
            <Helmet>
                <title>Parents Corner | Kranti Classes</title>
                <meta name="description" content="Information for parents about safety, transport, and communication at Kranti Classes." />
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Parents Corner</h1>

                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-6">
                            <div className="bg-green-100 p-4 rounded-full text-green-600 shrink-0">
                                <Shield size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety & Security</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    The safety of your child is our top priority. Our campus is equipped with 24/7 CCTV surveillance, and we have strict entry/exit protocols. We ensure a safe and disciplined environment where students can focus entirely on their studies.
                                </p>
                            </div>
                        </div>
                    </section>

<section className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-6">
                            <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                                <MessageCircle size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Regular Updates (PTM)</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We believe in a strong partnership between parents and teachers. We conduct regular Parent-Teacher Meetings (PTMs) to discuss your child's progress, attendance, and areas of improvement. You will also receive weekly performance reports via SMS/WhatsApp.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                        <div className="flex items-start gap-6">
                            <div className="bg-purple-100 p-4 rounded-full text-purple-600 shrink-0">
                                <Clock size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Doubt Clearing Support</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Learning doesn't stop after class. We have dedicated doubt-clearing sessions where students can approach faculty members to resolve their queries. We ensure no student is left behind.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Parents;
