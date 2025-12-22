import React from 'react';
import { Award, Users, TrendingUp, BookOpen } from 'lucide-react';

const TrustBar = () => {
    const stats = [
        { icon: <Award size={32} />, label: "7+ Years", sub: "Experience" },
        { icon: <Users size={32} />, label: "1000+", sub: "Students Trusted" },
        { icon: <TrendingUp size={32} />, label: "Top Results", sub: "In JEE & NEET" },
        { icon: <BookOpen size={32} />, label: "Expert", sub: "Faculty Team" },
    ];

    return (
        <section className="bg-white py-4 shadow-sm relative z-20 mx-4 md:mx-auto max-w-6xl rounded-xl border border-gray-100" style={{ marginTop: '-2rem' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-2 p-4">
                        <div className="text-blue-600 bg-blue-50 p-2 rounded-full mb-1">
                            {stat.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{stat.label}</h3>
                        <p className="text-sm text-gray-600 font-medium">{stat.sub}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustBar;
