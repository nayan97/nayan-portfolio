
import React from "react";
import { motion } from "framer-motion";

const stacks = [
  {
    name: "Full Stack",
    image: "https://i.ibb.co/Qp1SXBw/fullstack.png",
    description:
      "Complete development service covering both front-end and back-end technologies.",
  },
  {
    name: "Frontend",
    image: "https://i.ibb.co/4mZy3kN/frontend.png",
    description:
      "Crafting responsive, interactive, and visually appealing user interfaces.",
  },
  {
    name: "Laravel",
    image: "https://i.ibb.co/9yNYLL6/laravel.png",
    description:
      "Powerful PHP framework for building secure and scalable web applications.",
  },
  {
    name: "Node",
    image: "https://i.ibb.co/mFd8BPh/node.png",
    description:
      "Fast, scalable, and efficient server-side applications using JavaScript.",
  },
];


const Service = () => {
return (
  <section className="py-10 bg-base-100">
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
          <div key={index} className="card bg-base-200 shadow-xl">
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
