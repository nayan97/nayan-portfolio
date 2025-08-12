import React from "react";

export default function Education() {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Educational Qualification
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          My academic journey and achievements.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="shadow-2xl p-4 rounded-2xl">
          <h2 class="text-3xl font-bold text-[#00BCFF] mb-5 ">Education</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold">B.Sc. in Computer Science</h3>
              <p class="text-gray-600">XYZ University | 2019 - 2023</p>
              <p class="text-gray-500">
                Graduated with honors, specialized in Software Development.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold">
                Higher Secondary Certificate (HSC)
              </h3>
              <p class="text-gray-600">ABC College | 2017 - 2019</p>
              <p class="text-gray-500">Science Group | GPA 5.00/5.00</p>
            </div>
          </div>
        </div>

        <div className="shadow-2xl p-4 rounded-2xl">
          <h2 class="text-3xl font-bold text-[#00BCFF] mb-5">Certifications</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold">Full-Stack Web Development</h3>
              <p class="text-gray-600">Programming Hero | 2024</p>
              <p class="text-gray-500">
                Learned MERN stack, API integration, and deployment.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold">Laravel & PHP Development</h3>
              <p class="text-gray-600">Udemy | 2023</p>
              <p class="text-gray-500">Focused on MVC, REST APIs, and MySQL.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
