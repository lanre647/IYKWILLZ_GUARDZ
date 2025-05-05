import React from "react";

const Bottom = () => {
  return (
    <footer className="bg-black text-gray-400 pt-10 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
        {/* Left side */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg md:text-xl font-bold font-serif italic text-white tracking-wider">
            IYKWILLZ<span className="text-pink-500 not-italic">_GUARDZ</span>
          </h2>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} IYKWILLZ_GUARDZ. All rights reserved.
          </p>
        </div>

        {/* Right side */}
        <div className="flex space-x-6 text-lg">
          <a href="/services" className="hover:text-pink-500 transition">
            Services
          </a>
          <a href="/about" className="hover:text-pink-500 transition">
            About
          </a>
          <a href="/contact" className="hover:text-pink-500 transition">
            Contactt
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
