// /src/pages/Home.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}>
        <div className="bg-black bg-opacity-70 absolute inset-0"></div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">
            Elite Protection, Absolute Confidence
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-8">
            IYKWILLZ_GUARDZ: Providing VIP security with style, strength, and discretion.
          </p>
          <Link to="/contact">
            <button className="bg-pink-500 hover:bg-pink-600 text-black font-bold py-3 px-8 rounded-full text-lg transition">
              Book Now
            </button>
          </Link>
        </motion.div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center text-gray-400"
          >
            <p className="text-sm mb-2">Scroll Down</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Experience world-class security delivered with excellence and discretion.  
            Trusted by VIPs, executives, and event organizers globally.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Top-tier licensed guards",
            "Discreet & reliable",
            "Luxury event specialists",
            "Global coverage 24/7"
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-md hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-pink-500 mb-4">{item.split(' ')[0]}</h3>
              <p className="text-gray-400">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Ready to Secure Excellence?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Don't settle for less. Trust IYKWILLZ_GUARDZ to safeguard your success.
          </p>
          <Link to="/contact">
            <button className="bg-pink-500 hover:bg-pink-600 text-black font-bold py-3 px-8 rounded-full text-lg transition">
              Book Now
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

export default Home;
