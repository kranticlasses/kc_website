import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

// We use a module-level variable so that the popup only shows once per SPA navigation 
// session, but resets if the user explicitly refreshes the browser page.
let hasClosedPopup = false;

const AnnouncementPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!hasClosedPopup) {
      // Show the popup 2 seconds after page load
      const timer = window.setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    hasClosedPopup = true;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          key="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden"
          >
            {/* Top accent border */}
            <div className="h-2 w-full bg-red-600"></div>
            
            <div className="p-6 sm:p-8">
              <button 
                onClick={handleClose}
                className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6 mt-2 overflow-hidden">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
                  KRANTI CLASSES
                </h3>
                
                <motion.h2 
                  animate={{ 
                    textShadow: ["0px 0px 0px rgba(220, 38, 38, 0)", "0px 0px 15px rgba(220, 38, 38, 0.5)", "0px 0px 0px rgba(220, 38, 38, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight"
                >
                  Admission Open
                  <span className="block text-red-600 mt-1 text-xl sm:text-2xl">New Batch Starting 1 April</span>
                </motion.h2>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
                  className="mt-4"
                >
                  <span className="inline-block py-1.5 px-4 rounded-full bg-red-100 text-red-700 text-sm font-bold tracking-wider relative overflow-hidden">
                    <motion.div 
                       animate={{ x: ["-100%", "200%"] }}
                       transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                       className="absolute inset-0 bg-white/40 skew-x-12"
                    />
                    LIMITED SEATS AVAILABLE
                  </span>
                </motion.div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 mb-7 border border-gray-100 text-left">
                <p className="text-gray-600 font-medium mb-3">Classes available for:</p>
                <ul className="space-y-3 text-gray-800 font-medium ml-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3"></span>
                    6th – 10th <span className="text-gray-500 font-normal ml-1">(All Subjects)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3"></span>
                    11th – 12th <span className="text-gray-500 font-normal ml-1">Physics</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div className="flex-1" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/admissions"
                    onClick={handleClose}
                    className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-colors shadow-md"
                  >
                    Enroll Now
                  </Link>
                </motion.div>
                <button
                  onClick={handleClose}
                  className="flex-1 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl text-center transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementPopup;
