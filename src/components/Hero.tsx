import { GraduationCap, ArrowRight } from 'lucide-react';

function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden pt-0">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <nav className="relative container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-500 p-2.5 rounded-xl">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Kranti Classes</h1>
            <p className="text-xs text-blue-200">Excellence in Education</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition-colors">About</button>
          <button onClick={() => scrollToSection('courses')} className="hover:text-orange-400 transition-colors">Courses</button>
          <button onClick={() => scrollToSection('faculty')} className="hover:text-orange-400 transition-colors">Faculty</button>
          <button onClick={() => scrollToSection('results')} className="hover:text-orange-400 transition-colors">Results</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-orange-400 transition-colors">Contact</button>
        </div>
      </nav>

      <div className="relative container mx-auto px-4 py-6 md:py-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/40 backdrop-blur-sm rounded-full border border-blue-400/30">
            <p className="text-sm font-medium text-blue-200">Led by Ila Kranti • 7+ Years of Physics Excellence</p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Empowering Students,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Shaping Futures</span>
          </h2>

          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Trusted by 1000+ students for competitive exam preparation with personalized attention and proven results
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('admissions')}
              className="group w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-500/50"
            >
              <span>Join Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('admissions')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Pay Fees
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}

export default Hero;
