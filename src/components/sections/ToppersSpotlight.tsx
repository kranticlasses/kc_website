import React from 'react';
import Card from '../ui/Card';
import { BookOpen, Users, Award, Clock, Target, BookmarkCheck } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <BookOpen className="w-8 h-8 text-blue-600 mb-4" />,
            title: "Expert Faculty",
            description: "Learn from highly qualified and experienced educators dedicated to your success."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600 mb-4" />,
            title: "Personalized Attention",
            description: "Small batch sizes ensure individual attention and better learning outcomes."
        },
        {
            icon: <Award className="w-8 h-8 text-blue-600 mb-4" />,
            title: "Proven Methodology",
            description: "Structured learning approach combining conceptual clarity with regular assessments."
        },
        {
            icon: <Clock className="w-8 h-8 text-blue-600 mb-4" />,
            title: "Flexible Scheduling",
            description: "Batch timings designed to accommodate school schedules and personal study time."
        },
        {
            icon: <Target className="w-8 h-8 text-blue-600 mb-4" />,
            title: "Exam-Focused Curriculum",
            description: "Syllabus aligned with JEE, NEET, and board exam patterns for comprehensive preparation."
        },
        {
            icon: <BookmarkCheck className="w-8 h-8 text-blue-600 mb-4" />,
            title: "Doubt Resolution",
            description: "Regular doubt-clearing sessions to ensure complete understanding of concepts."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Kranti Classes?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Empowering students with quality education and personalized learning experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="p-6 text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-lg">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
