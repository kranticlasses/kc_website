import { BookOpen, Users, Clock, CheckCircle } from 'lucide-react';

function Courses() {
  const courses = [
    {
      category: 'Foundation',
      title: 'Classes 6 to 10',
      description: 'Strong fundamentals for CBSE, ICSE, and State Boards with concept clarity and regular assessments',
      features: [
        'Complete syllabus coverage',
        'Weekly tests and doubt sessions',
        'Interactive learning methods',
        'Personalized attention',
      ],
      duration: 'Full Academic Year',
      batch: 'Small batches of 15-20',
      highlight: 'Building Strong Basics',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
    },
    {
      category: 'Competitive',
      title: 'JEE Preparation (11th & 12th)',
      description: 'Comprehensive training for JEE Main and Advanced with Physics specialization by Ila Kranti',
      features: [
        'Topic-wise mastery approach',
        'Previous year problems analysis',
        'Mock tests and performance tracking',
        'Advanced problem-solving techniques',
      ],
      duration: '2 Year Integrated Program',
      batch: 'Limited seats per batch',
      highlight: 'Expert Physics Coaching',
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
    },
    {
      category: 'Competitive',
      title: 'NEET Preparation (11th & 12th)',
      description: 'Focused medical entrance preparation with emphasis on Physics, Chemistry, and Biology',
      features: [
        'NCERT-based foundation',
        'Concept mapping and diagrams',
        'Regular revision sessions',
        'Medical entrance mock tests',
      ],
      duration: '2 Year Integrated Program',
      batch: 'Small batches for attention',
      highlight: 'Medical Entrance Focus',
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
    },
  ];

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed for academic excellence and competitive exam success
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>

                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wide">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <div className={`bg-gradient-to-r ${course.bgGradient} p-3 rounded-lg mb-6`}>
                    <p className="text-sm font-semibold text-slate-700 text-center">
                      {course.highlight}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span className="text-sm font-medium">{course.batch}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <p className="text-lg font-semibold text-slate-900">
                  All courses include study material, regular assessments, and parent-teacher meetings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
