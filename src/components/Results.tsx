import { Trophy, Star, TrendingUp } from 'lucide-react';

function Results() {
  const toppers = [
    {
      name: 'Aarav Sharma',
      exam: 'JEE Advanced',
      rank: 'AIR 247',
      year: '2024',
      course: 'Physics, Chemistry, Mathematics',
      testimonial: 'The personalized attention and rigorous practice at Kranti Classes helped me crack JEE Advanced.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'Diya Patel',
      exam: 'NEET',
      rank: 'AIR 512',
      year: '2024',
      course: 'Physics, Chemistry, Biology',
      testimonial: 'Expert faculty and regular mock tests built my confidence for NEET. Thank you Kranti Classes!',
      color: 'from-green-400 to-emerald-500',
    },
    {
      name: 'Rohan Gupta',
      exam: 'JEE Main',
      rank: '99.8 %ile',
      year: '2024',
      course: 'Two Year Integrated Program',
      testimonial: 'The problem-solving approach taught here is exceptional. Highly recommended for serious aspirants.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'Ananya Singh',
      exam: 'NEET',
      rank: 'AIR 1,205',
      year: '2023',
      course: 'One Year Crash Course',
      testimonial: 'Even with limited time, Kranti Classes helped me achieve my medical dream. Forever grateful!',
      color: 'from-purple-400 to-pink-500',
    },
    {
      name: 'Karan Mehta',
      exam: 'JEE Advanced',
      rank: 'AIR 1,892',
      year: '2023',
      course: 'Physics, Chemistry, Mathematics',
      testimonial: 'The Physics classes by Ila Ma\'am were game-changing. Her teaching style is unmatched.',
      color: 'from-orange-400 to-red-500',
    },
    {
      name: 'Ishita Reddy',
      exam: 'CBSE Board',
      rank: '98.6%',
      year: '2024',
      course: 'Class 10 Foundation',
      testimonial: 'Strong foundation at Kranti Classes prepared me not just for boards but for future competitive exams.',
      color: 'from-teal-400 to-cyan-500',
    },
  ];

  return (
    <section id="results" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Celebrating the achievements of our brilliant students
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-br ${topper.color} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-semibold">{topper.year}</span>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${topper.color} border-4 border-white shadow-lg flex items-center justify-center text-white text-2xl font-bold`}>
                      {topper.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                <div className="pt-14 px-6 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-1">
                    {topper.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mb-4">{topper.course}</p>

                  <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-600 font-medium mb-1">{topper.exam}</p>
                        <p className="text-2xl font-bold text-slate-900">{topper.rank}</p>
                      </div>
                      <Trophy className="h-10 w-10 text-orange-500" />
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 relative">
                    <Star className="h-4 w-4 text-orange-400 absolute top-2 left-2" />
                    <p className="text-sm text-gray-700 italic leading-relaxed pl-4">
                      "{topper.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-10 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-3xl font-bold mb-2">Join Our Success Journey</h3>
                <p className="text-blue-200">Be the next success story from Kranti Classes</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <TrendingUp className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs text-blue-200">Selection Rate</div>
                </div>
                <div className="text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-xs text-blue-200">AIR Rankers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
