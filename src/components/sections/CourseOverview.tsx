import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Book, GraduationCap, Target } from 'lucide-react';

const CourseOverview = () => {
    const courses = [
        {
            title: "Foundation",
            class: "Class 6 - 10",
            desc: "Build a strong base for future competitive exams. Focus on concepts and logical thinking.",
            icon: <Book size={40} className="text-blue-500" />,
            color: "bg-blue-50"
        },
        {
            title: "Boards",
            class: "Class 11 - 12",
            desc: "Comprehensive preparation for CBSE/State Boards with focus on high scoring.",
            icon: <GraduationCap size={40} className="text-orange-500" />,
            color: "bg-orange-50"
        },
        {
            title: "Competitive",
            class: "JEE / NEET / OLYMPIAD / CUET",
            desc: "Rigorous coaching for IIT-JEE, NEET, OLYMPIAD and CUET. Mock tests, doubt solving, and expert guidance.",
            icon: <Target size={40} className="text-purple-500" />,
            color: "bg-purple-50"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Tailored learning programs designed to help students excel in their academic journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <Card key={index} className="p-8 flex flex-col items-center text-center h-full">
                            <div className={`p-4 rounded-full mb-6 ${course.color}`}>
                                {course.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                            <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                {course.class}
                            </span>
                            <p className="text-gray-600 mb-8 flex-grow">
                                {course.desc}
                            </p>
                            <Button variant="outline" to="/courses" className="w-full">
                                Learn More
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseOverview;
