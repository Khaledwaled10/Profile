'use client';
import { motion } from 'framer-motion';
import '../globals.css';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 py-24 px-6 flex flex-col items-center">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-purple-900 mb-12"
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8"
      >
        <form className="flex flex-col gap-6">
          
          <motion.input
            type="text"
            placeholder="Your Name"
            whileFocus={{ scale: 1.02, borderColor: "#7c3aed" }}
            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <motion.input
            type="email"
            placeholder="Your Email"
            whileFocus={{ scale: 1.02, borderColor: "#7c3aed" }}
            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <motion.textarea
            placeholder="Your Message"
            rows={5}
            whileFocus={{ scale: 1.02, borderColor: "#7c3aed" }}
            className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-500 transition"
          >
            Send Message
          </motion.button>

        </form>
      </motion.div>

      {/* Floating background circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
    </div>
  );
}
