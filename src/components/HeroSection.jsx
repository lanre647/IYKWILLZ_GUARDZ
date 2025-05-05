// /src/pages/Home.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold tracking-wider mb-6"
          >
            Protection You Can Trust
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5 }}
            className="text-gray-300 text-lg md:text-2xl max-w-xl mx-auto"
          >
            Premium security for events, executives, and VIPs. Delivered with precision and style.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="mt-8"
          >
            <Link to="/contact">
              <button className="bg-pink-500 hover:bg-pink-600 text-black font-bold py-3 px-8 rounded-full text-lg transition">
                Book Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-20 text-center">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">
            Why Choose IYKWILLZ_GUARDZ
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Elite Trained Professionals",
              "Discreet and Confidential",
              "World-Class Event Experience",
              "24/7 Protection, Global Reach"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-bold text-pink-500 mb-4">{item.split(' ')[0]}</h3>
                <p className="text-gray-400">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call To Action */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-b from-black to-gray-900">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Your Security, Our Passion
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Elevate your security standards. Trust the experts who deliver excellence.
          </p>
          <Link to="/contact">
            <button className="bg-pink-500 hover:bg-pink-600 text-black font-bold py-3 px-8 rounded-full text-lg transition">
              Secure Your Service
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

export default Home;
