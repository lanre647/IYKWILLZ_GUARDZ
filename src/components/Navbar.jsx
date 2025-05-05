import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-lg md:text-xl font-bold font-serif italic tracking-wider"
        >
          IYKWILLZ<span className="text-pink-500 not-italic">_GUARDZ</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-sans text-lg">
          <a href="/" className="hover:text-pink-500 transition">
            Home
          </a>
          <a href="/services" className="hover:text-pink-500 transition">
            Services
          </a>
          <a href="/about" className="hover:text-pink-500 transition">
            About
          </a>
          <a
            href="/contact"
            className="hover:bg-pink-500 hover:text-black py-2 px-5 rounded-full transition"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-black bg-opacity-90 space-y-6 py-6 text-center font-sans text-lg">
          <a
            href="/"
            className="hover:text-pink-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/services"
            className="hover:text-pink-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="/about"
            className="hover:text-pink-500 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:bg-pink-500 hover:text-black py-2 px-5 rounded-full mx-auto transition"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
