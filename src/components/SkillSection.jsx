import React from "react";

const skills = {
  frontend: [
    { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "TailwindCSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Express.js", icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { name: "Laravel", icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    { name: "PHP", icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg" },
    { name: "REST API", icon: "https://cdn.worldvectorlogo.com/logos/api.svg" },
    { name: "GraphQL", icon: "https://cdn.worldvectorlogo.com/logos/graphql.svg" },
    { name: "Socket.io", icon: "https://cdn.worldvectorlogo.com/logos/socket-io.svg" },
  ],
  database: [
    { name: "MySQL", icon: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
    { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "SQLite", icon: "https://cdn.worldvectorlogo.com/logos/sqlite.svg" },
    { name: "Redis", icon: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
    { name: "Supabase", icon: "https://cdn.worldvectorlogo.com/logos/supabase-logo-icon.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    { name: "VS Code", icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
    { name: "Postman", icon: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
    { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
    { name: "Figma", icon: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" },
    { name: "NPM", icon: "https://cdn.worldvectorlogo.com/logos/npm.svg" },
  ],
};

const SkillSection = ({ title, items }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {items.map((skill, index) => (
        <div
          key={index}
          className="bg-[#112e42] rounded-xl p-4 flex flex-col items-center justify-center shadow hover:shadow-lg transition"
        >
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
          <p className="text-sm font-semibold">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const SkillsGrid = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-10">
      <SkillSection title="Frontend" items={skills.frontend} />
      <SkillSection title="Backend" items={skills.backend} />
      <SkillSection title="Database" items={skills.database} />
      <SkillSection title="Tools" items={skills.tools} />
    </div>
  );
};

export default SkillsGrid;
