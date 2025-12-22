import { Award, Users, TrendingUp, BookOpen } from 'lucide-react';

function Stats() {
  const stats = [
    {
      icon: Award,
      value: '10+',
      label: 'Years of Excellence',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Students Trained',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: BookOpen,
      value: '50+',
      label: 'Expert Faculty',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`${stat.bgColor} ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
