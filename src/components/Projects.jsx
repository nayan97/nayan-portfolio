const projects = [
  { title: "Travel Guide App", description: "A tourism app with packages & guides", link: "#" },
  { title: "LMS Platform", description: "Learning platform with Stripe payment", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#112e42] py-20">
      <div className="max-w-7xl mx-auto shadow-lg rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((p, i) => (
            <div key={i} className="p-6 shadow-lg rounded-lg border hover:shadow-xl">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <a href={p.link} className="mt-4 inline-block text-blue-500">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
