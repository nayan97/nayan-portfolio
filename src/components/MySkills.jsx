import React from "react";
import Slider from "react-slick";

const skills = [
  { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  {
    name: "TailwindCSS",
    icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  {
    name: "Next.js",
    icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
  {
    name: "Node.js",
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
  },
  { name: "PHP", icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg" },
  { name: "REST API", icon: "https://cdn.worldvectorlogo.com/logos/api.svg" },
  {
    name: "GraphQL",
    icon: "https://cdn.worldvectorlogo.com/logos/graphql.svg",
  },
  {
    name: "Socket.io",
    icon: "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
  },
  { name: "MySQL", icon: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg" },
  {
    name: "MongoDB",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
  },
  { name: "SQLite", icon: "https://cdn.worldvectorlogo.com/logos/sqlite.svg" },
  { name: "Redis", icon: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
  {
    name: "Supabase",
    icon: "https://cdn.worldvectorlogo.com/logos/supabase-logo-icon.svg",
  },
  { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  {
    name: "GitHub",
    icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.worldvectorlogo.com/logos/postman.svg",
  },
  { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  {
    name: "Figma",
    icon: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
  },
  { name: "NPM", icon: "https://cdn.worldvectorlogo.com/logos/npm.svg" },
];

const MySkills = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // no delay
    speed: 5000, // smooth movement speed
    cssEase: "linear", // makes it continuous
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false, // keeps moving even on hover
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 7 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };
  return (
    <div className="bg-[#112e42] text-white pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="p-3">
              <div className="card bg-[#081b29] shadow-xl h-full flex flex-col items-center text-center">
                <figure className="p-6">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 object-contain"
                  />
                </figure>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MySkills;
