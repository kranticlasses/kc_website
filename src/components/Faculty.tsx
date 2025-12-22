import { Award, BookOpen, GraduationCap } from 'lucide-react';

function Faculty() {
  const facultyMembers = [
    {
      name: 'Ila Kranti',
      role: 'Director & Physics HOD',
      qualification: 'M.Sc Physics, B.Ed',
      experience: '15+ Years Experience',
      specialization: 'JEE & NEET Physics Expert',
      achievements: [
        'Over 15 years of teaching experience',
        'Expert in problem-solving techniques',
        'Mentored 1000+ successful students',
      ],
      color: 'from-orange-400 to-orange-600',
      image: '/student.png'
    },
  ];

  return (
    <section id="faculty" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Expert Faculty
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from the best minds dedicated to your success
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {faculty.name}
                      </h3>
                      <p className="text-orange-600 font-semibold mb-2">
                        {faculty.role}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                          {faculty.experience}
                        </span>
                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                          {faculty.qualification}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen className="h-5 w-5 text-slate-600" />
                      <h4 className="font-semibold text-slate-900">Specialization</h4>
                    </div>
                    <p className="text-gray-700 pl-7">{faculty.specialization}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="h-5 w-5 text-slate-600" />
                      <h4 className="font-semibold text-slate-900">Key Achievements</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {faculty.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-50 to-orange-50 border border-orange-200 rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <GraduationCap className="h-12 w-12 text-orange-600" />
                <div className="text-left">
                  <p className="text-xl font-bold text-slate-900 mb-1">
                    50+ Qualified Teachers
                  </p>
                  <p className="text-gray-600">
                    Our team includes subject experts, former competitive exam toppers, and experienced educators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faculty;
