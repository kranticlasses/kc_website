import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Target, Users, BookOpen, MessageSquare, MapPin } from 'lucide-react';
import Button from '../ui/Button';

const FlagshipProgram = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.span 
              variants={itemVariants}
              className="inline-block py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-bold tracking-wider mb-6 shadow-md"
            >
              ★ FLAGSHIP PROGRAM
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight uppercase"
            >
              Kranti Academic Foundation Program
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700 font-medium mb-6 max-w-3xl mx-auto"
            >
              Founder-Led Academic Mentorship for Classes 6–10
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              <p className="mb-4">
                Most coaching institutes focus only on completing the syllabus.<br className="hidden md:block"/>
                <span className="font-bold text-gray-800">At Kranti Classes, we focus on building strong learners.</span>
              </p>
              <p className="mb-4">
                The Kranti Academic Foundation Program (KAFP) is a structured academic mentorship program designed to strengthen a student’s fundamentals, discipline, and confidence in studies.
              </p>
              <p className="font-medium text-gray-800">
                This program is personally guided by Ilakranti Gupta – Founder & Educator at Kranti Classes, ensuring that every student receives proper academic direction, regular monitoring, and focused attention.
              </p>
            </motion.div>
          </div>

          {/* Grid Layout for Program Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Box 1: Who Is This Program Designed For? */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-900/5 ring-1 ring-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who Is This Program Designed For?</h3>
              <p className="text-gray-600 font-medium mb-3">This program is ideal for:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" /> Students of Classes 6–10</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" /> Students who study but do not see expected results</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" /> Students who feel confused in concepts or lack confidence</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" /> Students who need discipline and consistent study habits</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" /> Parents who want genuine academic guidance instead of pressure-based coaching</li>
              </ul>
            </motion.div>

            {/* Box 2: What Makes Kranti Classes Different? */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-900/5 ring-1 ring-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What Makes Kranti Classes Different?</h3>
              <div className="text-gray-600 mb-4 text-sm">
                Most coaching institutes only teach chapters.<br />
                <span className="font-bold text-gray-800 mt-1 inline-block">At Kranti Classes, we work on the complete academic development of a student.</span>
              </div>
              <p className="text-gray-600 font-medium mb-3 text-sm">Our program focuses on:</p>
              <ul className="space-y-4 text-gray-600 text-sm cursor-default">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 shrink-0 mt-0.5" /> 
                  <div><span className="font-bold text-gray-800 block mb-0.5">Concept-Based Learning</span>Students understand the “why” behind every topic instead of memorising answers.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 shrink-0 mt-0.5" /> 
                  <div><span className="font-bold text-gray-800 block mb-0.5">Small Batches for Personal Attention</span>Limited students in each batch so that every child is monitored.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 shrink-0 mt-0.5" /> 
                  <div><span className="font-bold text-gray-800 block mb-0.5">Structured Academic Monitoring</span>Regular tests and progress analysis help identify weak areas early.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 shrink-0 mt-0.5" /> 
                  <div><span className="font-bold text-gray-800 block mb-0.5">Doubt Resolution & Revision System</span>Students receive continuous support until the concept becomes clear.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 shrink-0 mt-0.5" /> 
                  <div><span className="font-bold text-gray-800 block mb-0.5">Founder-Led Mentorship</span>Students are guided directly by the founder, ensuring consistent academic direction.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 shrink-0 mt-0.5" /> 
                  <div><span className="font-bold text-gray-800 block mb-0.5">Transparent Parent Communication</span>Parents stay informed about their child’s progress and improvement areas.</div>
                </li>
              </ul>
            </motion.div>

            {/* Box 3: Our Teaching Philosophy */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-900/5 ring-1 ring-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Teaching Philosophy</h3>
              <p className="text-gray-600 mb-4 text-sm">At Kranti Classes, we believe that strong academic performance is not created overnight.</p>
              <p className="text-gray-600 font-medium mb-3 text-sm">It is built through:</p>
              <ul className="space-y-3 text-gray-600 text-sm mb-4">
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-purple-500 mr-1.5 shrink-0 mt-0.5" /> Clear concepts</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-purple-500 mr-1.5 shrink-0 mt-0.5" /> Regular practice</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-purple-500 mr-1.5 shrink-0 mt-0.5" /> Consistent discipline</li>
                <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-purple-500 mr-1.5 shrink-0 mt-0.5" /> Right guidance</li>
              </ul>
              <p className="text-gray-600 italic text-sm border-t pt-4">Instead of shortcuts or fear-based teaching, we focus on helping students develop the ability to think, understand, and learn independently.</p>
            </motion.div>

            {/* Box 4: How the Program Helps Students */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl shadow-blue-900/5 ring-1 ring-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-3 lg:max-w-2xl lg:mx-auto w-full">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">How the Program Helps Students</h3>
              <p className="text-gray-600 font-medium mb-3">Students enrolled in this program typically experience:</p>
              <ul className="space-y-3 text-gray-600 md:grid md:grid-cols-2 md:gap-x-6 md:space-y-0">
                <li className="flex items-start mb-3"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" /> Better concept clarity in school subjects</li>
                <li className="flex items-start mb-3"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" /> Improved performance in school tests and exams</li>
                <li className="flex items-start mb-3"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" /> Increased confidence while solving problems</li>
                <li className="flex items-start mb-3"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" /> Development of consistent study habits</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" /> Reduced fear and confusion during exams</li>
              </ul>
            </motion.div>

          </div>

          {/* Founder's Note & CTA Card */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <MessageSquare className="w-64 h-64 -mt-16 -mr-16" />
             </div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col lg:flex-row gap-12 items-center justify-between">
              
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold mb-6 text-blue-200 uppercase tracking-wider text-sm">Founder's Note</h3>
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic text-white">
                  “Many students are not weak in studies — they simply do not receive the right direction at the right time.
                  <br /><br />
                  With patience, discipline, and proper guidance, every student can improve.”
                </blockquote>
                <div>
                  <div className="font-bold text-xl">— Ilakranti Gupta</div>
                  <div className="text-blue-300 text-lg">Founder & Educator, Kranti Classes</div>
                </div>
              </div>

              <div className="w-full lg:w-[400px] flex flex-col items-center bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl shrink-0">
                <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-3 animate-pulse text-center w-full">
                  Admissions Open | Limited Seats
                </div>
                
                <p className="text-blue-100 text-sm italic mb-8 text-center bg-blue-900/30 w-full py-2 rounded-lg">
                  Small batches are maintained to ensure personal attention.
                </p>

                <div className="flex flex-col gap-4 w-full">
                  <Button to="/admissions" className="w-full bg-gray-900 text-white hover:bg-black shadow-xl px-8 py-3.5 border border-white/20 text-center justify-center text-base rounded-xl">
                    Enroll Now
                  </Button>
                  <Button autoFocus={false} to="/contact" variant="outline" className="w-full border-white text-white hover:bg-white/20 backdrop-blur-sm px-8 py-3.5 text-center justify-center text-base rounded-xl">
                    Contact for Counselling
                  </Button>
                </div>
                
                <div className="w-full border-t border-white/20 mt-6 pt-5">
                  <div className="flex justify-center items-center text-blue-100 text-sm font-semibold mb-1">
                    <MapPin className="w-4 h-4 mr-1.5 shrink-0" />
                    South Bopal, Ahmedabad
                  </div>
                  <div className="text-center text-blue-200/80 text-xs">
                    Contact for counselling and batch details.
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default FlagshipProgram;
