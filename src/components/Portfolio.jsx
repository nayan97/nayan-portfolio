
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    name: "TravelMate - Trip Planner App",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8f6f3a8d1a4a8b5b9f2d2f5d6f4b1a2c",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    description:
      "TravelMate helps users discover destinations, build multi-day itineraries, and book tours. It features a search, saved trips, and a guide booking workflow.",
    live: "https://your-travelmate.example.com",
    githubClient: "https://github.com/yourusername/travelmate-client",
    challenges:
      "Integrating real-time availability for guides, optimizing image-heavy galleries for performance, and building a user-friendly itinerary editor.",
    improvements:
      "Add offline support, progressive web app (PWA) features, payment gateway alternatives, and a multilingual UI. Implement server-side rendering for SEO improvements.",
  },
  {
    id: 2,
    name: "Learnify - LMS Platform",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1c2b3d4e5f6a7b8c9d0e1f2a3b4c5d6e",
    tech: ["Laravel", "MySQL", "Alpine.js", "Bootstrap", "Stripe"],
    description:
      "Learnify is a lightweight learning management system with courses, lessons, quizzes, and payments. It supports instructors creating content and students tracking progress.",
    live: "https://learnify.example.com",
    githubClient: "https://github.com/yourusername/learnify-client",
    challenges:
      "Designing a flexible schema for courses/chapters/lessons, securing file uploads, and building a smooth quiz UX across devices.",
    improvements:
      "Add analytics dashboard, adaptive assessments, richer instructor tools (bulk uploads, CSV import), and mobile app companion.",
  },
  {
    id: 3,
    name: "TouristHub - Tourism Directory",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e",
    tech: ["React", "Tailwind CSS", "DaisyUI", "MongoDB", "Cloudinary"],
    description:
      "TouristHub lists attractions, tour packages, and verified tour guides. It provides a booking flow, guide assignment, and admin tools for managing packages.",
    live: "https://touristhub.example.com",
    githubClient: "https://github.com/yourusername/touristhub-client",
    challenges:
      "Handling image uploads at scale, building reliable guide assignment logic, and synchronizing booking state across users and guides.",
    improvements:
      "Introduce role-based access with granular permissions, SMS/WhatsApp notifications, and richer map-based search filters.",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="h-44 sm:h-52 w-full overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>

              <ul className="flex flex-wrap gap-2 mb-4">
                {p.tech.slice(0, 3).map((t) => (
                  <li key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-md">{t}</li>
                ))}
                {p.tech.length > 3 && (
                  <li className="text-xs px-2 py-1 bg-gray-100 rounded-md">+{p.tech.length - 3}</li>
                )}
              </ul>

              <div className="mt-auto flex items-center justify-between">
                <button
                  onClick={() => setActive(p)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  View More / Details
                </button>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 btn btn-outline"
                >
                  Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal / Detailed Page (simple accessible modal) */}
      {active && (
        <div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="fixed inset-0 bg-black/50" onClick={() => setActive(null)} />

          <div className="relative max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-auto max-h-[90vh]">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <img src={active.image} alt={active.name} className="w-28 h-20 object-cover rounded-md" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{active.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Main tech: {active.tech.join(" • ")}</p>
                </div>

                <button
                  onClick={() => setActive(null)}
                  className="ml-4 text-gray-400 hover:text-gray-600"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>

              <hr className="my-4" />

              <div className="space-y-4 text-gray-800">
                <div>
                  <h4 className="font-semibold">Brief description</h4>
                  <p className="text-sm mt-1">{active.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold">Live project</h4>
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm"
                  >
                    {active.live}
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold">GitHub (client)</h4>
                  <a
                    href={active.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm"
                  >
                    {active.githubClient}
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold">Challenges faced</h4>
                  <p className="text-sm mt-1">{active.challenges}</p>
                </div>

                <div>
                  <h4 className="font-semibold">Potential improvements & future plans</h4>
                  <p className="text-sm mt-1">{active.improvements}</p>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => setActive(null)}
                    className="px-4 py-2 rounded-lg border hover:bg-gray-50"
                  >
                    Close
                  </button>

                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                  >
                    Visit Live
                  </a>

                  <a
                    href={active.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border"
                  >
                    View Client Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
