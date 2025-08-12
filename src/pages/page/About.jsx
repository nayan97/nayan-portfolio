import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        About the Developer
      </h2>

      {/* Developer Bio */}
      <div className="bg-base-100 shadow-lg p-6 rounded-2xl mb-6">
        <p className="text-lg">
          👋 Hi, I'm Nayan Islam, a passionate Full-Stack Web Developer based in
          Bangladesh. I specialize in building modern, responsive, and engaging
          web applications using technologies like Laravel, PHP, JavaScript
          (ES6+), React, and MySQL. With a background in Electrical and
          Electronics Engineering and 8 years of professional experience as a
          service engineer, I bring a unique problem-solving mindset and strong
          analytical skills to my development work. I’m passionate about writing
          clean, maintainable, and scalable code, following best practices, and
          staying up-to-date with the latest trends in web development. My
          mission is to deliver meaningful digital experiences that are both
          user-friendly and efficient.
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-base-200 shadow-md p-4 rounded-xl mb-6">
        <h3 className="text-2xl font-semibold mb-2">
          🛠️ Technologies & Skills
        </h3>
        <p>
          React, Tailwind CSS, Node.js, Express, MongoDB, Firebase Auth, React
          Router, DaisyUI, Framer Motion, REST API, and more.
        </p>
      </div>

      {/* Projects Section */}
      <div className="bg-base-100 shadow-md p-4 rounded-xl mb-6">
        <h3 className="text-2xl font-semibold mb-2">📁 Projects</h3>
        <p>
          I have built over <strong>10+ full-stack projects</strong>, ranging
          from tourism platforms to admin dashboards.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li>
            <a
              href="https://gobangla-fc335.web.app/"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoBangla - Tour Booking App
            </a>{" "}
            (React + MongoDB + Firebase Auth)
          </li>
          <li>
            <a
              href="https://github.com/nayan97"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Portfolio Site
            </a>{" "}
            (Responsive with dark mode and animations)
          </li>
        </ul>
      </div>

 
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <p className="text-sm text-gray-500 mt-2">A quick peek into my journey, passions, and quirks.</p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 text-gray-800 leading-relaxed">
        <p className="mb-4">
          Hi, I’m <span className="font-semibold">Nayan Islam</span>, a passionate full-stack developer with a knack for crafting clean, efficient, and impactful applications. My programming journey started out of curiosity—just a simple desire to understand how websites worked. That curiosity quickly transformed into late-night coding marathons, countless debug sessions, and the thrill of bringing ideas to life.
        </p>

        <p className="mb-4">
          Over the years, I’ve explored various technologies, from <span className="font-semibold">Laravel</span> and <span className="font-semibold">MySQL</span> to <span className="font-semibold">React</span>, <span className="font-semibold">Tailwind CSS</span>, and <span className="font-semibold">MongoDB</span>. I enjoy building both backend systems and user-friendly frontends—whether that’s a tourism guide app, a learning management platform, or a slick admin dashboard. My favorite moments are when design and logic come together in perfect harmony.
        </p>

        <p className="mb-4">
          The type of work I enjoy most? Problem-solving. I love tackling challenging features, optimizing performance, and designing intuitive user experiences. I believe in writing code that not only works but is maintainable and scalable.
        </p>

        <p className="mb-4">
          Outside of programming, you’ll often find me exploring new places, enjoying photography, or catching up on tech news. I’m also a fan of badminton and a bit of a foodie—always on the hunt for the next delicious street snack.
        </p>

        <p>
          At my core, I’m curious, detail-oriented, and a firm believer that learning never stops. Every project is an opportunity to grow, and I’m excited for the challenges and adventures yet to come.
        </p>
      </div>
    </section>

    </motion.div>
  );
};

export default About;
