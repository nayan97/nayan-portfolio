import React from "react";
import { motion } from "framer-motion";
import SkillSection from '../../components/SkillSection'

const Services = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Developer Bio */}
      <div className="bg-base-100 shadow-lg p-6 rounded-2xl mb-6">
        <div className="flex gap-6">
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/qMfCn73k/made-a-masterpiece-for-you.jpg"
              alt=""
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-start">
              What is My Full Stack Development?
            </h2>
            <p className="text-lg">
              I offers a complete, end-to-end
              solution for your digital projects - from crafting intuitive and
              engaging user interfaces (UI) to developing robust front-end and
              back-end systems. Our holistic approach ensures that every layer
              of the software development process works seamlessly together,
              delivering high-quality, scalable, and efficient applications
              tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-base-200 shadow-md p-4 rounded-xl mb-6">
        <h3 className="text-2xl font-semibold mb-2">
          🛠️ Technologies & Skills
        </h3>
       <SkillSection></SkillSection>
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
    </motion.div>
  );
};

export default Services;
