import { Download, FileText, BookOpen, CheckCircle } from 'lucide-react';
import { useState } from 'react';

function Resources() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const resources = [
    {
      title: 'JEE Physics Formula Sheet',
      description: 'Complete physics formulas for JEE Main & Advanced',
      type: 'PDF',
      pages: '25 pages',
      icon: FileText,
    },
    {
      title: 'NEET Biology Notes',
      description: 'Comprehensive notes covering NCERT and beyond',
      type: 'PDF',
      pages: '120 pages',
      icon: BookOpen,
    },
    {
      title: 'Previous Year Questions',
      description: 'Solved papers from last 10 years with explanations',
      type: 'PDF',
      pages: '200+ questions',
      icon: FileText,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', class: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Free Study Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download quality study materials to kickstart your preparation
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Resources</h3>
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                      <resource.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">
                        {resource.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                          {resource.type}
                        </span>
                        <span>{resource.pages}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-orange-100 p-4 rounded-full mb-4">
                  <Download className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Get Free Resources
                </h3>
                <p className="text-gray-600">Fill in your details to download study materials</p>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-block bg-green-100 p-4 rounded-full mb-4">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600">
                    Check your email for download links to all resources.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Current Class/Course *
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                    >
                      <option value="">Select your class</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                      <option value="dropper">Dropper</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Resources</span>
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to receive educational updates from Kranti Classes
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
