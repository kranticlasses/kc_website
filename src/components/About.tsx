import { Target, Eye, Quote } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Kranti Classes
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide world-class education that empowers students to achieve their academic dreams.
                We believe in nurturing not just brilliant minds, but confident individuals who can excel
                in competitive examinations and beyond.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Eye className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the most trusted name in competitive exam preparation, setting benchmarks in quality
                education, personalized mentorship, and creating future leaders who contribute meaningfully
                to society.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-10 md:p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative">
              <Quote className="h-12 w-12 text-orange-400 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Message from Director</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                "Education is not just about clearing exams; it's about building a foundation for life.
                At Kranti Classes, we combine rigorous academics with character development. With over 7 years
                of experience in teaching Physics and mentoring thousands of students, I've witnessed how
                personalized attention and the right guidance can transform aspirations into achievements."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  IK
                </div>
                <div>
                  <div className="font-bold text-xl">Ila Kranti</div>
                  <div className="text-blue-200">Founder & Physics Faculty</div>
                  <div className="text-sm text-blue-300">7+ Years of Teaching Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
