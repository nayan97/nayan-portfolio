import React from "react";
// import profileImg from "https://i.ibb.co/B2Qz7wM5/hero-img.png";

const About = () => {
  return (
    <section className="py-16 bg-[#062E33] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
        
        {/* Left: Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full border-4 border-transparent bg-gradient-to-r from-green-400 to-yellow-300 animate-spin-slow"></div>
            <img
              src="https://i.ibb.co/B2Qz7wM5/hero-img.png"
              alt="Profile"
              className="relative rounded-full w-72 h-72 object-cover border-4 border-transparent"
            />
          </div>
        </div>

        {/* Right: About Content */}
        <div>
          <p className="text-green-400 text-lg mb-2">About Me</p>
          <h2 className="text-4xl font-bold mb-4">
            Who is <span className="text-green-400">Your Name</span>?
          </h2>
          <p className="text-xl font-medium mb-4">
            Helping businesses grow with innovative web development and creative digital solutions.
          </p>
          <p className="text-gray-300 mb-6">
            Hi, I’m [Your Name], a passionate Full-Stack Developer who thrives on building high-performing,
            user-friendly, and visually appealing applications. I specialize in the MERN stack and Laravel,
            with a strong focus on creating seamless user experiences. I enjoy transforming ideas into
            functional realities with attention to detail and creativity.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 4H8m6 8H6a2 2 0 01-2-2V6a2 2 0 012-2h4l2-2h6a2 2 0 012 2v14a2 2 0 01-2 2z"/>
              </svg>
              <p><span className="font-bold">Email:</span> youremail@example.com</p>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59a1 1 0 00.85.41h7.02a1 1 0 00.85-.41L19 5h2"/>
              </svg>
              <p><span className="font-bold">Phone:</span> +880 123 456 789</p>
            </div>
          </div>

          {/* Experience & Resume */}
          <div className="mt-8 flex items-center gap-6">
            <div className="bg-green-900 px-6 py-4 rounded-xl text-center">
              <p className="text-3xl font-bold text-green-300">3+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <a
              href="/resume.pdf"
              className="bg-green-400 text-black px-5 py-3 rounded-full font-semibold hover:bg-green-300 transition"
            >
              My Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
