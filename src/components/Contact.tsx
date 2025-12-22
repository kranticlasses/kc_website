import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Education Street', 'MG Road, Bangalore - 560001'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 80 1234 5678'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@kranticlasses.com', 'admissions@kranticlasses.com'],
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 2:00 PM'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help you make the right choice for your education
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${info.bgColor} ${info.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-block bg-green-100 p-4 rounded-full mb-4">
                    <Send className="h-12 w-12 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Name *
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

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email *
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
                        Phone *
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
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="course">Course Information</option>
                      <option value="fees">Fee Structure</option>
                      <option value="schedule">Class Schedule</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Experience our state-of-the-art facilities, meet our faculty, and get a feel for
                  the Kranti Classes learning environment. Walk-ins are welcome during office hours.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="font-semibold mb-2">Quick Tips for Your Visit:</p>
                  <ul className="space-y-1 text-sm text-blue-100">
                    <li>• Bring your previous academic records</li>
                    <li>• Come with your parents/guardian</li>
                    <li>• Schedule an appointment for personalized counseling</li>
                    <li>• Ask about our trial classes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Location Map</h3>
                <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                    <p className="text-slate-700 font-semibold">123 Education Street</p>
                    <p className="text-slate-600 text-sm">MG Road, Bangalore - 560001</p>
                    <p className="text-slate-500 text-xs mt-2">(Map integration available)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
