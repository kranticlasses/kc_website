import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Courses = () => {
    const [activeTab, setActiveTab] = useState<'foundation' | 'competitive'>('foundation');

    const foundationCourses = [
        { class: "Class 6", subject: "All Subjects", duration: "1 Year" },
        { class: "Class 7", subject: "All Subjects", duration: "1 Year" },
        { class: "Class 8", subject: "All Subjects", duration: "1 Year" },
        { class: "Class 9", subject: "All Subjects", duration: "1 Year" },
        { class: "Class 10", subject: "All Subjects", duration: "1 Year" },
    ];

    const competitiveCourses = [
        { name: "JEE Main + Advanced", target: "Class 11 & 12"},
        { name: "NEET UG", target: "Class 11 & 12"},
        { name: "Crash Course (JEE/NEET)", target: "Class 12 Pass"},
    ];

    return (
        <>
            <Helmet>
                <title>Courses | Kranti Classes</title>
                <meta name="description" content="Explore our courses for Foundation (Class 6-10) and Competitive Exams (JEE/NEET)." />
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Courses</h1>

                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1 rounded-full inline-flex">
                        <button
                            className={`px-8 py-3 rounded-full font-semibold transition-all ${activeTab === 'foundation' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-blue-600'}`}
                            onClick={() => setActiveTab('foundation')}
                        >
                            Foundation (6-10)
                        </button>
                        <button
                            className={`px-8 py-3 rounded-full font-semibold transition-all ${activeTab === 'competitive' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-blue-600'}`}
                            onClick={() => setActiveTab('competitive')}
                        >
                            Competitive (JEE/NEET)
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeTab === 'foundation' ? (
                        foundationCourses.map((course, index) => (
                            <Card key={index} className="p-6 border-t-4 border-blue-500">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.class}</h3>
                                <p className="text-gray-600 mb-4">{course.subject}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{course.duration}</span>
                                    <Button to="/contact" variant="outline" className="text-sm px-4 py-2">Enquire Now</Button>
                                </div>
                            </Card>
                        ))
                    ) : (
                        competitiveCourses.map((course, index) => (
                            <Card key={index} className="p-6 border-t-4 border-orange-500">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                                <p className="text-gray-600 mb-4">{course.target}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-sm bg-orange-50 text-orange-700 px-3 py-1 rounded-full">{course.duration}</span>
                                    <Button to="/contact" variant="outline" className="text-sm px-4 py-2">Enquire Now</Button>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Courses;
