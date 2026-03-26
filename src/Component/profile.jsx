import React from "react";
import { motion } from "framer-motion";
import profile from "./photos/profile.jpeg"

const AboutDoctor = () => {
  return (
    <section className="w-full bg-[#f9fbff] pt-36 pb-24 px-6 md:px-20 relative overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-[-100px] w-[300px] h-[300px] bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            <img
              src={profile}
              alt="Dr Mayank Gupta"
              className="rounded-3xl w-[300px] md:w-[360px] h-[440px] object-cover shadow-xl hover:scale-[1.02] transition duration-500"
            />

            {/* subtle border glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/40"></div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small label */}
          <p className="text-[#003A80]/70 text-xs tracking-widest uppercase mb-3">
            About Specialist
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003A80] mb-4 leading-snug">
            Dr. Mayank Gupta (PT)
          </h2>

          <p className="text-gray-400 text-sm mb-6">
            Neuro & Musculoskeletal Rehabilitation Expert
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-5">
            With a strong foundation in clinical rehabilitation, Dr. Mayank Gupta
            specializes in helping patients recover from neurological and
            orthopedic conditions. His work focuses on restoring movement,
            improving function, and enhancing overall quality of life.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            By combining international techniques with a patient-first approach,
            he ensures each treatment plan is tailored for sustainable and
            effective recovery.
          </p>

          {/* Skills minimalist */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "PNF Certified",
              "Pilates (Ireland)",
              "Mulligan Concept",
              "Neuro Rehab",
            ].map((item, i) => (
              <span
                key={i}
                className="text-xs px-4 py-1.5 rounded-full bg-white shadow-sm text-gray-600"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Quote */}
          <div className="mb-10">
            <p className="text-sm italic text-gray-500 leading-relaxed">
              “Right technique + right guidance + patient consistency = powerful
              recovery.”
            </p>
          </div>

          {/* CTA */}
          <button className="bg-[#003A80] text-white px-7 py-3 rounded-full text-sm tracking-wide hover:shadow-lg hover:scale-105 transition duration-300">
            Book Appointment
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDoctor;