import React from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../components/ui/Card';

const Faculty = () => {
    const facultyMembers = [
        { name: "IlaKranti Gupta", role: "Sr. Physics Professor", exp: "7+ Years", img: "/IlakrantiFaculty.jpg" }
    ];

    return (
        <>
            <Helmet>
                <title>Faculty | Kranti Classes</title>
                <meta name="description" content="Meet the expert faculty at Kranti Classes. Experienced mentors dedicated to guiding students towards academic excellence." />
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Expert Faculty</h1>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
                        {facultyMembers.map((member, index) => (
                            <Card key={index} className="text-center p-6">
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-170 rounded-full object-contain bg-gray-100"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                                <p className="text-gray-500 text-sm">{member.exp} Experience</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faculty;
