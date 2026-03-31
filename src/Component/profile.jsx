
import React from "react";
import { motion } from "framer-motion";
import profile from "./photos/profile.jpeg";

const AboutDoctor = () => {
  return (
    <section className="w-full bg-[#f9fbff] pt-36 pb-24 px-6 md:px-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-[-100px] w-[300px] h-[300px] bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* IMAGE */}
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
            <div className="absolute inset-0 rounded-3xl border border-white/40"></div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#003A80] mb-4 leading-snug">
            About Dr. Mayank Gupta (PT)
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            Dr. Mayank Gupta is a dedicated and result-oriented physiotherapist with extensive clinical experience in neuro and musculoskeletal rehabilitation. He has successfully treated patients ranging from stroke and hemiplegia to complex orthopedic conditions, helping them regain independence and functional ability.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            His expertise lies in combining advanced international techniques with practical, patient-centered care for long-term recovery.
          </p>

          {/* Certifications */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#003A80] mb-3">
              Certifications & Skills
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✔ Certified in PNF – International PNF Association</li>
              <li>✔ Certified Pilates Instructor – Ireland</li>
              <li>✔ Mulligan Concept (MWM)</li>
              <li>✔ Neuro-Rehabilitation & Functional Recovery</li>
            </ul>
          </div>

          {/* Quote */}
          <div className="mb-10">
            <p className="text-sm italic text-gray-500 leading-relaxed">
              “Right technique + right guidance + patient consistency = powerful recovery.”
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[#003A80] mb-3">
              Clinical Expertise
            </h3>
            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600">
              <li>• Stroke Rehabilitation</li>
              <li>• Neuroplasticity Training</li>
              <li>• Spine & Joint Pain</li>
              <li>• Post-Surgical Rehab</li>
              <li>• Gait & Balance Training</li>
              <li>• Core Strengthening</li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[#003A80] mb-3">
              Patient Outcomes
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>✔ Regained hand function after stroke</li>
              <li>✔ Improved walking ability</li>
              <li>✔ Reduced chronic pain naturally</li>
              <li>✔ Return to daily life with confidence</li>
            </ul>
          </div>

          {/* Mulligan Concept */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[#003A80] mb-3">
              Mulligan Concept (MWM)
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              A globally recognized manual therapy technique focused on pain-free joint mobilization and immediate improvement in movement.
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>✔ Pain-free mobilization</li>
              <li>✔ Instant movement improvement</li>
              <li>✔ Faster recovery</li>
            </ul>
          </div>

          {/* Integrated Approach */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-[#003A80] mb-3">
              Integrated Rehab Approach
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>PNF → Neuromuscular control</li>
              <li>Mulligan → Pain-free movement</li>
              <li>Pilates → Strength & stability</li>
              <li>Functional Training → Real-life recovery</li>
            </ul>
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


