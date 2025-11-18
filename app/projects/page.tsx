'use client';
import { motion } from 'framer-motion';
import ProjectCard from '../Components/Projectcard';

const projects = [
  {
    title: 'E-Commerce',
    desc: 'Shop with authentication, cart, and product filters.',
    imgSrc: '/e1.png',
    liveLink: 'https://e-commrce-five.vercel.app/',
    codeLink: 'https://github.com/Khaledwaled10/E-commrce',
  },
  {
    title: 'Social Media',
    desc: 'Posts, profiles, likes, and authentication.',
    imgSrc: '/social.png',
    liveLink: 'https://social-vert-tau.vercel.app/',
    codeLink: 'https://github.com/Khaledwaled10/Social',
  },
  {
    title: 'Portfolio',
    desc: 'My personal portfolio website with animations.',
    imgSrc: '/profile.png',
    liveLink: 'https://profile-six-eta-96.vercel.app/',
    codeLink: 'https://github.com/Khaledwaled10/Profile',
  },
  {
    title: 'Games',
    desc: 'A comprehensive games showcase website featuring mini-games info without playing.',
    imgSrc: '/games.png',
    liveLink: 'https://khaledwaled10.github.io/Games/',
    codeLink: 'https://github.com/Khaledwaled10/Games',
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather app using API integration.',
    imgSrc: '/weather.png',
    liveLink: 'https://khaledwaled10.github.io/Weather/',
    codeLink: 'https://github.com/Khaledwaled10/Weather',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-24 px-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-16 text-purple-900 drop-shadow-sm"
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -5, scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <ProjectCard
              title={project.title}
              desc={project.desc}
              imgSrc={project.imgSrc}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
