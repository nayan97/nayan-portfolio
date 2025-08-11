import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="max-w-[1280px] min-w-7xl mx-auto hero-content flex-col lg:flex-row-reverse">
        {/* Image with motion */}
        <div className="flex-1">
          <div
            className="relative object-fit rounded-xl w-full h-screen"
            style={{
              backgroundImage: "url('https://i.ibb.co/B2Qz7wM5/hero-img.png')",
            }}
          >
            <div className="relative min-h-screen">
              {/* Other page content here */}

              <div className="absolute bottom-[200px] left-0 w-full flex justify-around">
                <motion.div
                  className="bg-base-100 p-14 rounded-xl"
                  animate={{ y: [50, 100, 50] }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  <h4>hhhhhhh</h4>
                </motion.div>

                <motion.div
                  className="bg-base-100 p-14 rounded-4xl"
                  animate={{ x: [100, -30, 100] }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  <h4>grqrqefaerq</h4>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="flex-1">
          <h1 className="text-7xl font-bold">
            I'm james, product design based in USA
          </h1>
          <p className="py-6">Hi, I’m James, a passionate Product Designer based in the USA. I specialize in crafting intuitive, user-centered designs that merge functionality with aesthetics, With a focus on creating seamless digital experiences.</p>
          <div className="flex gap-2">
            <button className="btn bg-green-600 text-white rounded-4xl p-6">Get Started</button>
            <button className="btn btn-outline rounded-4xl p-6">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
