import { motion } from "framer-motion";

const services = [
  {
    title: "Bodyguard Protection",
    description: "Elite personal security services ensuring your safety with professionalism, discretion, and strength.",
    icon: "🛡️",
  },
  {
    title: "Event Security",
    description: "Maintain peace and order at any event, gala, wedding, or concert with our trained personnel.",
    icon: "🎟️",
  },
  {
    title: "VIP Escort",
    description: "High-profile personal escorts for celebrities, politicians, and corporate executives worldwide.",
    icon: "🚓",
  },
  {
    title: "Ushering Services",
    description: "Polite, efficient ushers for corporate events, private parties, red carpet events, and luxury functions.",
    icon: "🎩",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-20 custom-scrollbar">

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold font-serif mb-4">Our Elite Services</h1>
        <p className="text-gray-400 text-lg">Specialized protection and service tailored for every unique client.</p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="p-8 rounded-3xl bg-white/10 backdrop-blur-[6px] border border-white/30 shadow-2xl hover:scale-105 hover:shadow-pink-500/30 transition-all duration-500 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center mt-20"
      >
        <a
          href="/contact"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-pink-500/30"
        >
          Book Your Service Now
        </a>
      </motion.div>

    </div>
  );
}

export default Services;
