// /src/pages/Success.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {/* Checkmark Icon */}
        <div className="bg-pink-500 rounded-full p-6 inline-block mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Success Text */}
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
          Booking Successful!
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Thank you for trusting IYKWILLZ_GUARDZ.  
          We'll get back to you shortly!
        </p>

        {/* Return Home Button */}
        <Link to="/">
          <button className="bg-pink-500 hover:bg-pink-600 text-black font-bold py-3 px-8 rounded-full text-lg transition">
            Back to Home
          </button>
        </Link>
      </motion.div>

    </div>
  );
}

export default Success;
