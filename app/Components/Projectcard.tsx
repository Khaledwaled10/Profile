'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  desc: string;
  imgSrc?: string;
  liveLink?: string;
  codeLink?: string;
}

export default function ProjectCard({ title, desc, imgSrc, liveLink, codeLink }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer h-94"
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={250}
          className="object-cover w-full h-48"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
        <div className="flex space-x-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-500 transition"
            >
              View Live
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              className="px-4 py-2 border-2 border-purple-700 text-purple-700 rounded-lg hover:bg-purple-700 hover:text-white transition"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
