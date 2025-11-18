'use client';
import { motion } from 'framer-motion';
import '../globals.css';

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 py-24 px-6 flex flex-col items-center overflow-hidden">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-purple-900 mb-14 drop-shadow-sm"
      >
        Contact Me
      </motion.h1>

      {/* Form Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-white/40"
      >
        <form className="flex flex-col gap-7">
          
          <motion.input
            type="text"
            placeholder="Your Name"
            whileFocus={{ scale: 1.03 }}
            className="px-5 py-3.5 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
          />

          <motion.input
            type="email"
            placeholder="Your Email"
            whileFocus={{ scale: 1.03 }}
            className="px-5 py-3.5 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
          />

          <motion.textarea
            placeholder="Your Message"
            rows={6}
            whileFocus={{ scale: 1.03 }}
            className="px-5 py-3.5 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition resize-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.07 }}
            className="px-8 py-4 bg-purple-700 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-purple-600 transition"
          >
            Send Message
          </motion.button>

        </form>
      </motion.div>

      {/* Floating Circles Background */}
      <div className="absolute top-[-80px] left-[-80px] w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>
      <div className="absolute top-1/2 left-[70%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

    </div>
  );
}
