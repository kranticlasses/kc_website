import React from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import { Award, Calendar, CheckCircle } from 'lucide-react';

const Scholarship = () => {
    return (
        <>
            <Helmet>
                <title>Scholarship Test (AST) | Kranti Classes</title>
                <meta name="description" content="Register for the Admission Scholarship Test (AST) and win up to 100% scholarship on tuition fees." />
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Admission Open</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">Admission Scholarship Test (AST)</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Prove your potential and win up to <span className="text-orange-600 font-bold">100% Scholarship</span> on tuition fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Merit-Based Rewards</h3>
                                <p className="text-gray-600">Top performers get fee waivers and special mentorship.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Flexible Dates</h3>
                                <p className="text-gray-600">Choose a test date that suits your schedule. Online and Offline modes available.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Instant Analysis</h3>
                                <p className="text-gray-600">Get a detailed performance report and career counselling session post-test.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Register for AST</h2>
                        <form className="space-y-4">
                            <input type="text" placeholder="Student Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                            <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none bg-white">
                                <option value="">Select Class</option>
                                <option value="6">Class 6</option>
                                <option value="7">Class 7</option>
                                <option value="8">Class 8</option>
                                <option value="9">Class 9</option>
                                <option value="10">Class 10</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                            </select>
                            <Button type="submit" variant="secondary" className="w-full text-lg">
                                Register Now - ₹200
                            </Button>
                            <p className="text-xs text-center text-gray-500 mt-4">
                                By registering, you agree to our Terms & Conditions.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Scholarship;
