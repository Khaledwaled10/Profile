'use client';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-8 mt-3">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* حقوق الملكية */}
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Khaled Waled. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/khaled-waled-7219b5294/"
            target="_blank"
            className="hover:text-yellow-400 transition text-2xl"
          >
          </a>
          <a
            href="https://github.com/Khaledwaled10"
            target="_blank"
            className="hover:text-yellow-400 transition text-2xl"
          >
          </a>
          <a
            href="mailto:khaledwaled8713@gmail.com"
            className="hover:text-yellow-400 transition text-2xl"
          >
          </a>
        </div>
      </div>
    </footer>
  );
}
