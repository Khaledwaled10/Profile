'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'HTML', color: 'bg-orange-400' },
  { name: 'CSS', color: 'bg-blue-500' },
  { name: 'JavaScript', color: 'bg-yellow-400' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'React', color: 'bg-sky-400' },
  { name: 'Next.js', color: 'bg-black text-white' },
  { name: 'Tailwind', color: 'bg-teal-400' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-6xl font-bold text-purple-900 mb-4">
            Khaled Waled
          </h1>
          <p className="text-2xl text-purple-700 mb-6">
            Front-End / React Developer
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-purple-900 text-white rounded-xl hover:bg-purple-700 transition shadow-lg"
            >
              My Projects
            </a>

            <a
              href="/KhaledWaledcv.pdf"
              download
              className="px-6 py-3 border-2 border-purple-900 text-purple-900 rounded-xl hover:bg-purple-900 hover:text-white transition shadow-lg"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="https://github.com/Khaledwaled10"
              target="_blank"
              className="p-3 bg-white border-2 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white transition shadow-lg"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/khaled-waled-7219b5294/"
              target="_blank"
              className="p-3 bg-white border-2 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white transition shadow-lg"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>

            <a
              href="mailto:khaledwaled8713@gmail.com"
              className="p-3 bg-white border-2 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white transition shadow-lg"
            >
              <i className="fa-solid fa-envelope text-2xl"></i>
            </a>

<a
  href="https://vercel.com/khaledwaleds-projects"
  target="_blank"
  className="p-3 bg-white border-2 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white transition shadow-lg flex items-center justify-center"
>
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2L24 22H0L12 2Z" />
  </svg>
</a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="p-3 bg-white border-2 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white transition shadow-lg"
            >
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 md:mt-0"
        >
          <Image
            src="/profile.jpg"
            alt="Khaled Waled"
            width={300}
            height={300}
            className="rounded-full border-4 border-purple-900 shadow-lg"
          />
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 px-6"
      >
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1, y: -5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${skill.color} p-6 rounded-2xl shadow-lg text-center font-bold cursor-pointer text-white`}
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>

      {/* Background floating circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

    </div>
  );
}
