'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../globals.css';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-pink-50 to-purple-50 py-24 px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center text-purple-900 mb-12"
      >
        About Me
      </motion.h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* صورة جانبية */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/profile.jpg"
            alt="Khaled Waled"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg border-4 border-purple-900"
          />
        </motion.div>

        {/* نص عنك */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <p className="text-lg text-gray-700 mb-4">
            Hi! I&apos;m <span className="font-bold text-purple-900">Khaled Waled</span>, a passionate Front-End Developer specializing in <span className="font-bold text-purple-900">React</span> and <span className="font-bold text-purple-900">Next.js</span>. I love building responsive and interactive web applications that provide great user experiences.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I have experience with <span className="font-bold text-purple-900">HTML, CSS, JavaScript, TypeScript, TailwindCSS, Redux</span>, and authentication systems like <span className="font-bold text-purple-900">NextAuth.js</span>. My projects include E-Commerce platforms, Social Media apps, Weather apps, and personal Portfolios.
          </p>
          <p className="text-lg text-gray-700">
            I am currently a 3rd-year CS student at <span className="font-bold text-purple-900">Tanta University</span>. I am eager to grow my skills further and contribute to professional projects in a team environment.
          </p>
        </motion.div>
      </div>

      {/* Skills Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-16 flex flex-wrap justify-center gap-4"
      >
        {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Redux", "Auth.js"].map(skill => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-purple-700 text-white rounded-full shadow cursor-pointer font-medium"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
