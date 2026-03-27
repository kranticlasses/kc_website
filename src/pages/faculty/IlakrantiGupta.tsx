
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Users, Presentation, Lightbulb, GraduationCap, Briefcase } from 'lucide-react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const IlakrantiGupta = () => {
    return (
        <>
            <Helmet>
                <title>Ilakranti Gupta - Physics Faculty | Kranti Classes</title>
                <meta name="description" content="View the profile of Ilakranti Gupta, Founder and Senior Physics Faculty at Kranti Classes." />
            </Helmet>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen py-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    
                    {/* Hero Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 flex flex-col md:flex-row border border-gray-100">
                        <div className="md:w-1/3 bg-blue-900 p-8 flex flex-col items-center justify-center text-center text-white relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-bl-full opacity-20"></div>
                            <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl z-10">
                                <img
                                    src="/IlakrantiFaculty.webp"
                                    alt="Ilakranti Gupta"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: '50% 15%' }}
                                />
                            </div>
                            <h1 className="text-3xl font-bold mb-2 z-10">Ilakranti Gupta</h1>
                            <p className="text-orange-400 font-bold text-lg mb-1 z-10">Founder – Kranti Classes</p>
                            <p className="mb-4 text-blue-200 font-medium z-10">Physics Faculty (JEE, NEET, Boards)</p>
                            <div className="bg-blue-800 rounded-full px-5 py-2 text-sm font-semibold border border-blue-700 shadow-inner z-10">
                                7+ Years Experience
                            </div>
                        </div>
                        <div className="md:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight border-l-4 border-orange-500 pl-4">
                                Building strong academic foundations with conceptual clarity and student-first teaching.
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                I am a Physics Educator, EdTech Professional, and Founder of Kranti Classes, dedicated to building strong academic foundations and confident learners.
                                <br/><br/>
                                With years of experience across reputed EdTech platforms such as ALLEN, Career Point, and Doubtnut, along with offline classroom teaching, I specialize in teaching Physics for Classes 11 & 12, JEE, NEET, and Board Exams with deep conceptual clarity and exam-oriented strategy.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all">
                                        Book a Demo with this Faculty
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button variant="outline" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-6 shadow-sm hover:shadow-md transition-all">
                                        Contact Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Core Strengths */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                                <div className="bg-blue-100 p-3 rounded-xl text-blue-600 shadow-sm">
                                    <TrendingUp size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Core Strengths</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="bg-orange-100 text-orange-600 p-1 rounded-full mt-0.5"><div className="w-2 h-2 bg-orange-500 rounded-full"></div></span>
                                    <span className="text-gray-700 font-medium">Simplify complex Physics concepts into easy, relatable learning</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="bg-orange-100 text-orange-600 p-1 rounded-full mt-0.5"><div className="w-2 h-2 bg-orange-500 rounded-full"></div></span>
                                    <span className="text-gray-700 font-medium">Design structured notes, PYQs, question banks, and assessments</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="bg-orange-100 text-orange-600 p-1 rounded-full mt-0.5"><div className="w-2 h-2 bg-orange-500 rounded-full"></div></span>
                                    <span className="text-gray-700 font-medium">Mentor students for consistency, confidence, and performance</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="bg-orange-100 text-orange-600 p-1 rounded-full mt-0.5"><div className="w-2 h-2 bg-orange-500 rounded-full"></div></span>
                                    <span className="text-gray-700 font-medium">Provide honest academic guidance to students and parents</span>
                                </li>
                            </ul>
                        </div>

                        {/* Leadership & Impact */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                                <div className="bg-orange-100 p-3 rounded-xl text-orange-600 shadow-sm">
                                    <Users size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Leadership & Impact</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mt-0.5"><div className="w-2 h-2 bg-blue-600 rounded-full"></div></span>
                                    <span className="text-gray-700 font-medium">Trained and led Physics content and teaching teams</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mt-0.5"><div className="w-2 h-2 bg-blue-600 rounded-full"></div></span>
                                    <span className="text-gray-700 font-medium">Played key roles in launching and scaling new academic branches</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mt-0.5"><div className="w-2 h-2 bg-blue-600 rounded-full"></div></span>
                                    <span className="text-gray-700 font-medium">Managed academics, marketing, counselling, and admissions</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full mt-0.5"><div className="w-2 h-2 bg-blue-600 rounded-full"></div></span>
                                    <span className="text-gray-700 font-medium">Focused on building systems, not just delivering lectures</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {/* Founder's Journey */}
                        <div className="lg:col-span-2 bg-blue-900 text-white p-8 lg:p-10 rounded-2xl shadow-xl border border-blue-800 relative overflow-hidden">
                            <div className="absolute -bottom-10 -right-10 opacity-10">
                                <Presentation size={150} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-white/20 p-3 rounded-xl text-white backdrop-blur-sm">
                                        <Presentation size={28} />
                                    </div>
                                    <h3 className="text-3xl font-bold">Founder’s Journey</h3>
                                </div>
                                <p className="mb-6 text-blue-100 leading-relaxed text-lg">
                                    As the Founder of Kranti Classes, my mission is to deliver quality education with discipline, structure, and personal attention, especially at the school and foundation level.
                                </p>
                                <p className="text-blue-100 leading-relaxed text-lg font-medium">
                                    Through <span className="text-orange-400 font-bold border-b border-orange-400 border-dashed pb-0.5">“Easy Physics by Ilakranti”</span>, I aim to make Physics fear-free, logical, and enjoyable for every student.
                                </p>
                                
                                <div className="mt-10 p-6 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl border border-blue-700 shadow-inner relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                        <Lightbulb size={64} className="text-orange-400" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-orange-400 flex items-center gap-2">
                                        <Lightbulb size={20} /> My Philosophy
                                    </h4>
                                    <blockquote className="italic text-xl text-white border-l-4 border-orange-500 pl-5 py-2 font-light leading-relaxed">
                                        "Good education doesn’t just produce toppers — <span className="font-semibold text-orange-300">it builds thinkers.</span>"
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                                <div className="bg-blue-100 p-3 rounded-xl text-blue-600 shadow-sm">
                                    <GraduationCap size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                            </div>
                            
                            <div className="flex-1 relative flex flex-col justify-center py-6">
                                {/* Vertical Timeline Line */}
                                <div className="absolute left-[11px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-200 via-blue-100 to-transparent"></div>
                                
                                <div className="space-y-8 relative">
                                    
                                    {/* Item 1 */}
                                    <div className="relative flex items-start group">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-4 border-white bg-orange-500 shadow-md mt-1 relative z-10"></div>
                                        <div className="ml-6 flex-1 p-5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <div className="text-sm font-bold text-orange-600 mb-1">2016 – 2018</div>
                                            <div className="font-bold text-gray-900 mb-2 text-xl">M.Tech</div>
                                            <div className="text-gray-600 leading-relaxed">Industrial Drives and Control<br/><span className="text-gray-500 text-sm font-medium">BIT, Durg</span></div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="relative flex items-start group">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-4 border-white bg-blue-500 shadow-md mt-1 relative z-10"></div>
                                        <div className="ml-6 flex-1 p-5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <div className="text-sm font-bold text-blue-600 mb-1">2010 – 2014</div>
                                            <div className="font-bold text-gray-900 mb-2 text-xl">B.Tech</div>
                                            <div className="text-gray-600 leading-relaxed">Electrical & Electronics<br/><span className="text-gray-500 text-sm font-medium">CSVTU, Bhilai</span></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-4">
                            <div className="bg-orange-100 p-3 rounded-xl text-orange-600 shadow-sm">
                                <Briefcase size={28} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">Professional Experience</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                            <div className="md:col-span-2 hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-100 -z-10"></div>
                            
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                    <h4 className="font-bold text-xl text-blue-900 group-hover:text-orange-600 transition-colors">Founder</h4>
                                    <span className="text-sm font-semibold bg-orange-50 text-orange-600 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">Dec 2025 – Present</span>
                                </div>
                                <p className="text-gray-900 font-bold mb-2 text-lg">Kranti Classes <span className="text-gray-500 font-normal text-sm">| Ahmedabad</span></p>
                                <p className="text-gray-600 leading-relaxed">Built a student-first academic institute focused on strong fundamentals</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                    <h4 className="font-bold text-xl text-blue-900 group-hover:text-blue-600 transition-colors">Senior Physics Faculty</h4>
                                    <span className="text-sm font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">Mar 2025 – Nov 2025</span>
                                </div>
                                <p className="text-gray-900 font-bold mb-2 text-lg">Career Point Edutech Ltd. <span className="text-gray-500 font-normal text-sm">| Ahmedabad</span></p>
                                <p className="text-gray-600 leading-relaxed">Founding faculty member for new branch (Ahmedabad)</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                    <h4 className="font-bold text-xl text-blue-900 group-hover:text-blue-600 transition-colors">Physics Faculty</h4>
                                    <span className="text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">Nov 2023 – Feb 2025</span>
                                </div>
                                <p className="text-gray-900 font-bold mb-3 text-lg">ALLEN Digital</p>
                                <ul className="text-gray-600 list-none space-y-2">
                                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-1.5"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div></span>Delivered structured online Physics sessions</li>
                                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-1.5"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div></span>Implemented effective teaching strategies</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                    <h4 className="font-bold text-xl text-blue-900 group-hover:text-blue-600 transition-colors">Physics Faculty & SME</h4>
                                    <span className="text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">2020 – 2023</span>
                                </div>
                                <p className="text-gray-900 font-bold mb-3 text-lg">Doubtnut</p>
                                <ul className="text-gray-600 list-none space-y-2">
                                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-1.5"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div></span>Team Lead (Physics)</li>
                                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-1.5"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div></span>Academic content development and mentoring</li>
                                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-1.5"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div></span>Specialized in Hindi & English content delivery</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 md:col-span-2 group">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                    <h4 className="font-bold text-lg text-gray-700">Teaching Experience (Early Career)</h4>
                                </div>
                                <p className="text-gray-800 font-semibold mb-1">Rathi Classes <span className="text-gray-500 font-normal text-sm">| Bhilai</span></p>
                                <p className="text-gray-600">Taught EE Gate & semester students under Ex-IES faculty</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default IlakrantiGupta;
