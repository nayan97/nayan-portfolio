
import React from "react";
import { motion } from "framer-motion";

const stacks = [
  {
    name: "Full Stack Development",
    image: "https://i.ibb.co.com/kgxsZh6C/images-4.png",
    description:
      "Complete development service covering both front-end and back-end technologies.",
  },
  {
    name: "Frontend Development",
    image: "https://i.ibb.co.com/kgxsZh6C/images-4.png",
    description:
      "Crafting responsive, interactive, and visually appealing user interfaces.",
  },
  {
    name: "Laravel Development",
    image: "https://i.ibb.co.com/kgxsZh6C/images-4.png",
    description:
      "Powerful PHP framework for building secure and scalable web applications.",
  },
  {
    name: "MERN Development",
    image: "https://i.ibb.co.com/kgxsZh6C/images-4.png",
    description:
      "Fast, scalable, and efficient server-side applications using JavaScript.",
  },
];


const Service = () => {
return (
  <section className="py-10 bg-[#112e42] text-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        My Specialization
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stacks.map((attraction, index) => (
          <div key={index} className="card bg-[#081b29] shadow-xl">
            <figure>
              <img
                src={attraction.image}
                alt={attraction.name}
                className="h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg sm:text-xl md:text-2xl font-semibold">
                {attraction.name}
              </h3>
              <p className="text-base sm:text-lg md:text-md lg:text-sm xl:text-base 2xl:text-lg line-clamp-3">
                {attraction.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

};

export default Service;
