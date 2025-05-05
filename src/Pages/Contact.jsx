import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    const formData = new FormData(e.target);
    formData.append("access_key", "60685643-393a-4571-b15c-c922140a9f33");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000); // Hide toast after 4s
        e.target.reset(); // Reset form
      } else {
        alert("Error submitting form. Please try again!");
      }
    } catch (error) {
      alert("Network error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-20 px-6 md:px-20 relative">
      {/* Toast Notification */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-6 right-6 bg-pink-500 text-black font-bold py-3 px-6 rounded-xl shadow-lg z-50"
        >
          🎉 Message Sent Successfully!
        </motion.div>
      )}

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold font-serif mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-lg">
          Ready to work with us? We’ll get back to you shortly.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto p-10 rounded-3xl shadow-2xl
                    bg-white/10 backdrop-blur-[6px] border border-white/30
                    hover:scale-105 transition-all duration-700 space-y-8"
      >
        {/* Name */}
        <div>
          <label className="block mb-2 text-gray-300">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-gray-300">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="example@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-gray-300">Phone Number</label>
          <input
            type="text"
            name="phone"
            required
            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="+234 000 0000"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block mb-2 text-gray-300">Service Interested In</label>
          <select
            name="service"
            required
            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-40 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            <option value="">Select a service</option>
            <option value="Bodyguard">Bodyguard</option>
            <option value="Event Security">Event Security</option>
            <option value="VIP Escort">VIP Escort</option>
            <option value="Ushering">Ushering</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-gray-300">Your Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Tell us how we can assist you."
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 hover:bg-pink-600 text-black font-bold py-3 px-6 rounded-full text-lg transition transform hover:scale-105"
        >
          {loading ? "Sending..." : "Submit Message"}
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;
