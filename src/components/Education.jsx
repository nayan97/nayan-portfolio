import React from "react";

export default function Education() {
  return (
    <div className=" text-white bg-[#081b29]">
      <section className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
          <p className="text-sm text-white mt-2">
            My academic journey and achievements.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="shadow-2xl p-4 rounded-2xl bg-[#112e42]">
            <h2 class="text-3xl font-bold text-green-400 mb-5 ">Education</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-xl font-semibold">B.Sc. in EEE</h3>
                <p class="text-white">Varendra University | 2018 - 2022</p>
                <p class="text-white">
                  Graduated with honors, specialized in Electrical & Computer.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-semibold">
                 Diploma in Engineering
                </h3>
                <p class="text-white">Rajshahi Polytechnic Institiute | 2010 - 2014</p>
                <p class="text-white">Diploma in Electronics</p>
              </div>
            </div>
          </div>

          <div className="shadow-2xl p-4 rounded-2xl bg-[#112e42]">
            <h2 class="text-3xl font-bold text-green-400 mb-5">
              Certifications
            </h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-xl font-semibold">
                  MERN-Stack Web Development
                </h3>
                <p class="text-white">Programming Hero | 2025</p>
                <p class="text-white">
                  Learned MERN stack, API integration, and deployment.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-semibold">Laravel & PHP Development</h3>
                <p class="text-white">Coder Trust Bangladesh Limited | 2022</p>
                <p class="text-white">
                  Focused on MVC, REST APIs, and MySQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
