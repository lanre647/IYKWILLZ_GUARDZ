import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-20">

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold font-serif mb-4">About IYKWILLZ_GUARDZ</h1>
        <p className="text-gray-400 text-lg">Redefining elite protection and ushering services with style, strength, and discretion.</p>
      </motion.div>

      {/* Brand Story */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-[8px] border border-white/20 rounded-3xl p-10 shadow-2xl space-y-6 mb-24"
      >
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-300 leading-relaxed">
          Born from a passion for protection and luxury, IYKWILLZ_GUARDZ was founded with the vision of setting a new standard. 
          We combine elite physical security, VIP hospitality, and absolute discretion to serve distinguished clients worldwide.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Whether guarding a red carpet event or providing personal bodyguards, our team delivers excellence, always.
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {[
          { number: "300+", label: "Clients Protected" },
          { number: "150+", label: "Luxury Events Served" },
          { number: "99.9%", label: "Client Satisfaction" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white/10 backdrop-blur-[6px] p-10 rounded-2xl border border-white/20 shadow-xl"
          >
            <h3 className="text-4xl font-bold text-pink-500">{stat.number}</h3>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-20"
      >
        <a
          href="/contact"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/30"
        >
          Partner with Us
        </a>
      </motion.div>

    </div>
  );
}

export default About;
