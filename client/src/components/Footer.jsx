import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Rabindra from "../assets/Rabindra.jpg";

const developers = [
  {
    name: "K Rabindra Nath Senapaty",
    role: "Lead Developer",
    img: Rabindra,
    branch: "Computer Science & Engineering",
    year: "4th Year",
  },
  {
    name: "Soumya Sundar Subudhi",
    role: "Frontend Developer",
    img: "https://via.placeholder.com/60",
    branch: "Information Technology",
    year: "3rd Year",
  },
  // Add more contributors here...
];

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">
              🏫 College Competition Marking System
            </p>
            <p className="text-sm text-gray-300">
              Streamlined marking and leaderboard management
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300 mb-2">Developed with ❤️ by</p>
            <div className="flex justify-center md:justify-end items-center gap-2 flex-wrap">
              <p className="text-lg font-bold text-blue-400">
                {developers[0].name}
              </p>

              {developers.length > 1 && (
                <button
                  onClick={() => setShowModal(true)}
                  className="text-sm text-gray-400 hover:text-blue-300 underline ml-1"
                >
                  & more
                </button>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              © 2025 All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p className="text-xs text-gray-400">
            Powered by Coding Design And Development Club
          </p>
        </div>
      </div>

      {/* Contributors Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-6 text-center max-w-md w-full shadow-lg overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold text-blue-400 mb-4">
                Project Contributors
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {developers.map((dev, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-gray-800 rounded-lg p-4"
                  >
                    <img
                      src={dev.img}
                      alt={dev.name}
                      className="w-20 h-20  border border-gray-600  mb-2"
                    />
                    <p className="font-semibold text-blue-300">{dev.name}</p>
                    <p className="text-xs text-gray-400">{dev.role}</p>
                    <p className="text-xs text-gray-400">{dev.branch}</p>
                    <p className="text-xs text-gray-400">{dev.year}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
