import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gray-800 dark:bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm Nayan 👋
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg text-gray-300 max-w-xl"
      >
        I’m a MERN Stack Developer who builds fast, modern web apps.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg"
      >
        View My Work
      </motion.a>
    </section>
  );
}
