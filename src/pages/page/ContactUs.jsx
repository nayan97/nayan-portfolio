import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope,} from "react-icons/fa";
import Contact from "../../components/Contact";

const ContactUs = () => {
  return (
    <div className="bg-[#112e42] py-6 text-white">
      <motion.div
        className="max-w-7xl mx-auto py-10 px-6 bg-[#081b29] rounded-2xl shadow-lg pt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          📬 Contact Us
        </motion.h1>

        {/* Contact Info */}
       <Contact></Contact>

        {/* Contact Form */}
        <motion.div
          className="grid md:grid-cols-2 shadow-lg rounded-2xl bg-[#112e42]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Side Image */}
          <motion.div
          className="bg-cover object-cover rounded-l-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/XxP5NtCt/gettyimages-1312953631-612x612.jpg')",
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          ></motion.div>

          {/* Right Side Form */}
          <motion.div
            className="flex flex-col justify-center px-8 py-12"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-500 mb-6">
              Have questions or want to work together? Fill out the form and
              we’ll get back to you soon.
            </p>

            {/* Contact Info */}
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-green-600 text-lg" />
              <span>nayanislam085@gamil.com</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <FaPhoneAlt className="text-green-600 text-lg" />
              <span>+880 1750639637</span>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
