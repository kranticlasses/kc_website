import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, BarChart2, Target, Clock, Award, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';

const Results = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Our Results Journey | Kranti Classes</title>
                <meta name="description" content="Discover Kranti Classes' teaching philosophy and assessment approach designed to build strong academic foundations and achieve long-term success." />
            </Helmet>
            
            <div className="container mx-auto px-4 py-16">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Results Journey</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Building a legacy of academic excellence through personalized learning and continuous improvement.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <BookOpen className="w-8 h-8 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Our Teaching Philosophy</h2>
                        </div>
                        <p className="text-gray-700 mb-4">
                            At Kranti Classes, we believe in nurturing not just academic excellence but also the overall development of our students. Our approach combines:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                <span>Conceptual clarity over rote learning</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                <span>Personalized attention in small batch sizes</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                <span>Regular assessments and feedback loops</span>
                            </li>
                        </ul>
                    </Card>

                    <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <BarChart2 className="w-8 h-8 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Assessment Approach</h2>
                        </div>
                        <p className="text-gray-700 mb-4">
                            Our comprehensive evaluation system ensures continuous growth and improvement:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                <span>Weekly tests to track progress</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                <span>Chapter-wise assessments for concept reinforcement</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                <span>Detailed performance analysis and improvement plans</span>
                            </li>
                        </ul>
                    </Card>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                        <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h2>
                    <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                        As a new institute, we're currently building our track record with the first batch of students. 
                        We believe in transparency and will publish verified results after our students complete their 
                        respective board and competitive exams.
                    </p>
                    <p className="text-gray-600 font-medium">
                        Stay tuned for updates on our students' achievements!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose Our Approach?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
                                <Target className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Focused Learning</h3>
                            <p className="text-gray-600 text-sm">Targeted preparation based on individual learning needs and exam patterns</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Continuous Progress</h3>
                            <p className="text-gray-600 text-sm">Regular monitoring and feedback for steady academic improvement</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center">
                                <Award className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Future-Ready</h3>
                            <p className="text-gray-600 text-sm">Building strong foundations for academic and competitive success</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;
