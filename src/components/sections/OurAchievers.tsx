import jankiImg from '../../assets/janki.webp';
import samarImg from '../../assets/samar.webp';
import sheehanImg from '../../assets/sheehan.webp';

const achievers = [
  { id: 1, name: 'Janki', image: jankiImg, achievement: 'Top Scorer' },
  { id: 2, name: 'Samar', image: samarImg, achievement: 'Outstanding Performance' },
  { id: 3, name: 'Sheehan', image: sheehanImg, achievement: 'Subject Topper' },
];

const OurAchievers = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Top Achievers</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {achievers.map((student) => (
            <div 
              key={student.id} 
              className="w-full max-w-[380px] bg-white rounded-2xl shadow hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col transform hover:-translate-y-2"
            >
              <div className="p-5 bg-gray-50 flex-grow flex items-center justify-center">
                <div className="w-full aspect-[4/5] relative rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={student.image} 
                    alt={`${student.name} achievement`} 
                    className="absolute inset-0 w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
              <div className="p-6 text-center bg-white border-t border-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h3>
                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 font-semibold text-sm rounded-full tracking-wide">
                  {student.achievement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAchievers;
