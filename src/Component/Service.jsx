

// import React, { useState, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Float } from "@react-three/drei";
// import { FaChevronDown } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const services = [

//   { title: "Orthopedic Rehabilitation", description: "Expert care for musculoskeletal issues." },
//   { title: "Neuro Rehabilitation", description: "Tailored recovery plans for athletes." },
//   { title: "Sports Rehabilitation", description: "Therapy for injury recovery and prevention." },
//   { title: "OBS and Gynecological Rehabilitation", description: "Regain strength with guided rehabilitation." },
//   { title: "Pilates Exercise", description: "Advanced treatment for neurological conditions." },
//   { title: "Obesity Management", description: "Personalized therapy for weight control." },


// ];

// function FloatingParticles() {
//   const particles = useRef();
//   useFrame(() => {
//     if (particles.current) {
//       particles.current.rotation.x += 0.0005;
//       particles.current.rotation.y += 0.0005;
//     }
//   });

//   return (
//     <group ref={particles}>
//       {Array.from({ length: 300 }).map((_, i) => (
//         <mesh key={i} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 5 - 2]}>
//           <sphereGeometry args={[0.05, 6, 6]} />
//           <meshStandardMaterial color="lightblue" emissive="skyblue" />
//         </mesh>
//       ))}
//     </group>
//   );
// }

// function FloatingCard({ position, service }) {
//   const ref = useRef();
//   useFrame(() => {
//     ref.current.rotation.y += 0.005;
//   });

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
//       <mesh ref={ref} position={position} castShadow>
//         <boxGeometry args={[3, 2, 0.3]} />
//         <meshStandardMaterial color="#A7D7C5" emissive="#C7E9C0" />
//       </mesh>
//     </Float>
//   );
// }

// export default function PhysiotherapyServices() {
//   const navigate = useNavigate();
//   const [openIndex, setOpenIndex] = useState(null);
//   const toggleService = (index) => setOpenIndex(openIndex === index ? null : index);

//   return (
//     <div>
//       <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1, width: "100vw", height: "100vh" }}>
//         <OrbitControls enableZoom={false} />
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <FloatingParticles />
//         {services.map((service, i) => (
//           <FloatingCard key={i} position={[i * 3 - 6, Math.sin(i) * 2, -4]} service={service} />
//         ))}
//       </Canvas>

//       <section className="relative  w-full min-h-screen flex flex-col justify-center text-white px-6">
//         <div className="relative z-10 max-w-4xl text-left pl-[8rem] mt-24">
//           <h1 className="text-5xl font-bold text-yellow-500 mb-4">Physiotherapy Services</h1>
//           <p className="text-lg leading-relaxed max-w-2xl text-black">
//             Healing through motion. Explore expert physiotherapy solutions tailored for your needs.
//           </p>
//         </div>
//       </section>

//       <section className="w-full bg-[#F1FAEE] py-16 px-6 lg:px-16">
//         <div className="max-w-screen-xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
//             <h2 className="text-5xl md:text-6xl font-bold text-[#457B9D] mb-6 md:mb-0">Services</h2>
//             <p className="text-lg text-gray-600 max-w-2xl text-right leading-relaxed">
//               Discover our specialized treatments designed for your recovery journey.
//             </p>
//           </div>
//           <div className="border-b border-[#A8DADC] py-4"></div>

//           <div className="mt-10 w-full">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="border-b border-[#A8DADC] py-4"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <button
//                   onClick={() => toggleService(index)}
//                   className="w-full flex justify-between items-center text-left font-semibold text-[32px] text-[#1D3557] focus:outline-none transition-all duration-300 hover:text-[#E63946] hover:bg-[#A8DADC] px-6 py-4 rounded-lg"
//                 >
//                   <motion.span className="flex items-center gap-3">{service.title}</motion.span>
//                   <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
//                     <FaChevronDown className="text-[32px]" />
//                   </motion.div>
//                 </button>
//                 <AnimatePresence>
//                   {openIndex === index && (
//                     <motion.p
//                       className="mt-3 text-[28px] text-[#457B9D] px-6"
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {service.description}
//                     </motion.p>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>

//           {/* Floating "Book Online" Button */}
//           <div className="flex justify-center mt-16 gap-6">
//             <motion.button
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => navigate("/Book")}
//               className="relative px-8 py-4 text-2xl font-bold text-white bg-gradient-to-r from-[#A8DADC] to-[#457B9D] rounded-lg shadow-lg hover:from-[#457B9D] hover:to-[#A8DADC] transition-all duration-300"
//             >
//               Book Online
//               <span className="absolute top-0 left-0 w-full h-full animate-ping bg-[#457B9D] opacity-20 rounded-lg"></span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={()=> navigate("/Appointment")}
//               className="relative px-8 py-4 text-2xl font-bold text-white bg-gradient-to-r from-[#A8DADC] to-[#457B9D] rounded-lg shadow-lg hover:from-[#457B9D] hover:to-[#A8DADC] transition-all duration-300"
//             >
//               Book Offline
//               <span className="absolute top-0 left-0 w-full h-full animate-ping bg-[#457B9D] opacity-20 rounded-lg"></span>
//             </motion.button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import personalized from "./photos/Personalized.png"
import banner from "./photos/MRbanner.png"
import { FaBone, FaBrain, FaRunning, FaFemale, FaDumbbell, FaWeight } from "react-icons/fa";
const services = [
  {
    title: "Orthopedic Rehabilitation",
    desc: "Advanced treatment for musculoskeletal injuries and joint pain.",
    icon: <FaBone />
  },
  {
    title: "Neuro Rehabilitation",
    desc: "Specialized therapy for stroke and neurological recovery.",
    icon: <FaBrain />
  },
  {
    title: "Sports Rehabilitation",
    desc: "Return-to-sport programs designed for athletes.",
    icon: <FaRunning />
  },
  {
    title: "Gynecological Rehabilitation",
    desc: "Pelvic health therapy and post-pregnancy recovery.",
    icon: <FaFemale />
  },
  {
    title: "Pilates Therapy",
    desc: "Improve posture, flexibility and core strength.",
    icon: <FaDumbbell />
  },
  {
    title: "Obesity Management",
    desc: "Physiotherapy-guided weight management programs.",
    icon: <FaWeight />
  }
];

export default function PhysiotherapyServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="relative min-h-[90vh] flex items-center pt-32 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

{/* Background Accent Shapes */}

<div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00C4CD]/20 rounded-full blur-3xl"></div>

<div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-[#003A80]/10 rounded-full blur-3xl"></div>


<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

  {/* LEFT CONTENT */}

  <div>

    <h1 className="text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-[#003A80]">

      Restore Movement. <br />

      <span className="text-[#00C4CD]">
        Rebuild Strength.
      </span>

    </h1>

    <p className="text-lg text-gray-600 max-w-lg mb-10">
      Expert physiotherapy and rehabilitation programs designed to
      relieve pain, restore mobility and improve quality of life
      through personalized treatment plans.
    </p>


    {/* CTA BUTTONS */}

    <div className="flex flex-wrap gap-6">


      <button
        onClick={() => navigate("/Appointment")}
        className="px-8 py-4 border border-[#003A80] text-[#003A80] rounded-lg hover:bg-[#003A80] hover:text-white transition"
      >
        Book Appointment
      </button>

    </div>


    {/* TRUST STATS */}

    <div className="flex gap-10 mt-12 text-sm text-gray-500">

      <div>
        <p className="text-2xl font-semibold text-[#003A80]">10+</p>
        Years Experience
      </div>

      <div>
        <p className="text-2xl font-semibold text-[#003A80]">500+</p>
        Patients Treated
      </div>

      <div>
        <p className="text-2xl font-semibold text-[#003A80]">6+</p>
        Specialized Therapies
      </div>

    </div>

  </div>


  {/* RIGHT VISUAL */}

  <div className="relative">

  <div className="bg-gray-100 h-[420px] rounded-2xl shadow-inner overflow-hidden">

<img
  src={banner}
  alt="Physiotherapy Treatment"
  className="w-full h-full object-cover rounded-2xl"
/>

</div>


    {/* Floating Card */}

    <div className="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-xl p-6 border">

      <p className="text-sm text-gray-500">
        Recovery Success
      </p>

      <p className="text-3xl font-semibold text-[#003A80]">
        92%
      </p>

    </div>

  </div>

</div>

</section>

      {/* SERVICES CARDS */}

      <section className="py-24 px-6 lg:px-20 bg-gray-50">

<div className="max-w-4xl mb-16">

  <h2 className="text-4xl lg:text-5xl font-semibold text-[#003A80] mb-4">
    Our Specializations
  </h2>

  <p className="text-gray-600 text-lg max-w-2xl">
    We offer advanced physiotherapy treatments designed to restore
    mobility, reduce pain and improve long-term physical health.
  </p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

  {services.map((service, index) => (

    <motion.div
      key={index}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
    >

      {/* ICON */}

      <div className="w-14 h-14 rounded-xl bg-[#003A80]/10 flex items-center justify-center mb-6 text-[#003A80] text-2xl">
        {service.icon}
      </div>

      {/* TITLE */}

      <h3 className="text-2xl font-semibold mb-3 text-[#003A80]">
        {service.title}
      </h3>

      {/* DESCRIPTION */}

      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.desc}
      </p>

      {/* CTA */}

      <button className="text-[#003A80] font-medium flex items-center gap-2 group-hover:text-[#00C4CD] transition">

        Learn More

        <span className="group-hover:translate-x-1 transition">
          →
        </span>

      </button>

    </motion.div>

  ))}

</div>

</section>

      {/* FEATURE SECTION */}

      <section className="py-28 px-6 lg:px-20 bg-white">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

  {/* LEFT IMAGE */}

  <div className="relative">

  <div className="overflow-hidden rounded-2xl shadow-lg bg-gray-100">

<img
  src={personalized}
  alt="Physiotherapy Treatment"
  className="w-full h-[420px] object-contain"
/>

</div>

    {/* Floating stat card */}

    <div className="absolute -bottom-8 -right-8 bg-white shadow-xl rounded-xl p-6 border">

      <p className="text-sm text-gray-500">Recovery Success</p>

      <p className="text-3xl font-semibold text-[#003A80]">
        92%
      </p>

    </div>

  </div>


  {/* RIGHT CONTENT */}

  <div>

    <h2 className="text-4xl lg:text-5xl font-semibold text-[#003A80] mb-6">
      Personalized Rehabilitation Programs
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed mb-8">
      Every patient receives a tailored rehabilitation program
      designed around their condition, goals and lifestyle.
      Our physiotherapists focus on restoring mobility,
      strengthening muscles and preventing future injuries.
    </p>


    {/* BENEFITS */}

    <div className="space-y-6">

      <div className="flex gap-4 items-start">

        <div className="w-10 h-10 rounded-lg bg-[#00C4CD]/20 flex items-center justify-center text-[#003A80] font-semibold">
          ✓
        </div>

        <p className="text-gray-700">
          Personalized treatment plans based on detailed assessment.
        </p>

      </div>

      <div className="flex gap-4 items-start">

        <div className="w-10 h-10 rounded-lg bg-[#00C4CD]/20 flex items-center justify-center text-[#003A80] font-semibold">
          ✓
        </div>

        <p className="text-gray-700">
          Modern physiotherapy techniques and rehabilitation methods.
        </p>

      </div>

      <div className="flex gap-4 items-start">

        <div className="w-10 h-10 rounded-lg bg-[#00C4CD]/20 flex items-center justify-center text-[#003A80] font-semibold">
          ✓
        </div>

        <p className="text-gray-700">
          Continuous monitoring to ensure faster recovery and long-term health.
        </p>

      </div>

    </div>

  </div>

</div>

</section>

      {/* TREATMENT PROCESS */}

      <section className="py-28 px-6 lg:px-20 bg-gray-50">

<div className="max-w-7xl mx-auto">

  {/* Heading */}

  <div className="max-w-3xl mb-16">

    <h2 className="text-4xl lg:text-5xl font-semibold text-[#003A80] mb-4">
      Why Choose Movement Rehab
    </h2>

    <p className="text-gray-600 text-lg">
      Our physiotherapy approach focuses on long-term recovery, personalized
      treatment and restoring your physical independence through modern
      rehabilitation techniques.
    </p>

  </div>

  {/* Feature Cards */}

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition">

      <div className="w-14 h-14 bg-[#00C4CD]/20 rounded-xl flex items-center justify-center text-[#003A80] text-2xl mb-6">
        ✓
      </div>

      <h3 className="text-2xl font-semibold text-[#003A80] mb-3">
        Expert Physiotherapists
      </h3>

      <p className="text-gray-600">
        Our team includes highly trained physiotherapists with expertise in
        orthopedic, neurological and sports rehabilitation.
      </p>

    </div>


    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition">

      <div className="w-14 h-14 bg-[#00C4CD]/20 rounded-xl flex items-center justify-center text-[#003A80] text-2xl mb-6">
        ✓
      </div>

      <h3 className="text-2xl font-semibold text-[#003A80] mb-3">
        Personalized Treatment
      </h3>

      <p className="text-gray-600">
        Every treatment program is tailored according to your condition,
        recovery goals and lifestyle requirements.
      </p>

    </div>


    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition">

      <div className="w-14 h-14 bg-[#00C4CD]/20 rounded-xl flex items-center justify-center text-[#003A80] text-2xl mb-6">
        ✓
      </div>

      <h3 className="text-2xl font-semibold text-[#003A80] mb-3">
        Modern Rehabilitation Methods
      </h3>

      <p className="text-gray-600">
        We use advanced physiotherapy techniques and evidence-based
        rehabilitation practices to accelerate recovery.
      </p>

    </div>


    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition">

      <div className="w-14 h-14 bg-[#00C4CD]/20 rounded-xl flex items-center justify-center text-[#003A80] text-2xl mb-6">
        ✓
      </div>

      <h3 className="text-2xl font-semibold text-[#003A80] mb-3">
        Faster Recovery
      </h3>

      <p className="text-gray-600">
        Our goal is to restore mobility quickly and help patients return
        to normal life safely and confidently.
      </p>

    </div>


    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition">

      <div className="w-14 h-14 bg-[#00C4CD]/20 rounded-xl flex items-center justify-center text-[#003A80] text-2xl mb-6">
        ✓
      </div>

      <h3 className="text-2xl font-semibold text-[#003A80] mb-3">
        Holistic Care
      </h3>

      <p className="text-gray-600">
        We focus on complete rehabilitation including mobility, strength,
        posture correction and long-term injury prevention.
      </p>

    </div>


    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition">

      <div className="w-14 h-14 bg-[#00C4CD]/20 rounded-xl flex items-center justify-center text-[#003A80] text-2xl mb-6">
        ✓
      </div>

      <h3 className="text-2xl font-semibold text-[#003A80] mb-3">
        Continuous Monitoring
      </h3>

      <p className="text-gray-600">
        Progress is regularly monitored to ensure the treatment plan is
        delivering the best possible results.
      </p>

    </div>

  </div>

</div>

</section>

      {/* CTA */}
      <section className="py-28 px-6 lg:px-20 bg-gray-50">

<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">

  <h2 className="text-4xl font-semibold text-[#003A80] mb-4">
    Start Your Recovery Today
  </h2>

  <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
    Book your physiotherapy consultation with Movement Rehab and take the
    first step toward pain-free movement and better mobility.
  </p>

  <div className="flex justify-center gap-6 flex-wrap">

  <button
  onClick={() => navigate("/Appointment")}
  className="px-8 py-4 border border-[#003A80] text-[#003A80] rounded-lg hover:bg-[#003A80] hover:text-white transition"
>
  Book Appointment
</button>

  </div>

</div>

</section>

    </div>
  );
}