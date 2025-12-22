import { GraduationCap, Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const quickLinks = [
    'About Us',
    'Courses',
    'Faculty',
    'Results',
    'Admissions',
    'Contact',
  ];

  const courses = [
    'Foundation Classes',
    'JEE Preparation',
    'NEET Preparation',
    'Crash Courses',
    'Online Classes',
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-500 p-2.5 rounded-xl">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Kranti Classes</h3>
                <p className="text-xs text-blue-200">Excellence in Education</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering students with quality education and personalized mentorship for over a decade.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white/10 hover:bg-orange-500 p-2.5 rounded-lg transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-orange-500 p-2.5 rounded-lg transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-orange-500 p-2.5 rounded-lg transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-orange-500 p-2.5 rounded-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-100 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href="#courses"
                    className="text-blue-100 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm">
                  123 Education Street,<br />
                  MG Road, Bangalore - 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-blue-100 text-sm hover:text-orange-400 transition-colors block">
                    +91 98765 43210
                  </a>
                  <a href="tel:+918012345678" className="text-blue-100 text-sm hover:text-orange-400 transition-colors block">
                    +91 80 1234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@kranticlasses.com" className="text-blue-100 text-sm hover:text-orange-400 transition-colors">
                  info@kranticlasses.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Kranti Classes. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
