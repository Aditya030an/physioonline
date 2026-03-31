
import Appointment from "./Appointment"
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaArrowRight } from "react-icons/fa";
import home1 from "./photos/home-bg.mp4";
import Offering from "./Offering";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";


const Home = () => {
  const navigate = useNavigate();

  const posts = [
    "https://plus.unsplash.com/premium_photo-1661962597572-e0a140d8bc20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGh5c2lvdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1706353399656-210cca727a33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2lvdGhlcmFweSUyMHRyZWF0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    "https://images.unsplash.com/photo-1580281658629-8c6d0cfc37c2",
    "https://images.unsplash.com/photo-1579154203451-bc6c0b5e11b5",
  ];

  return (
    <div>

      {/* Hero Section */}
      <div className="relative w-full h-screen bg-black text-white">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src={home1} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <p className="text-[#00C4CD] italic text-lg mb-2">
            Expert physiotherapist Care for Effective Pain Relief
          </p>

          <h1 className="text-5xl font-bold">
            Professional Guidance & <br /> Proven Treatment
          </h1>

          <div className="mt-6">
            <button
              onClick={() => navigate("/Appointment")}
              className="bg-[#003A80] hover:bg-[#002b63] text-white px-6 py-3 rounded-lg font-bold uppercase transition"
            >
              Book consultation
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-10 h-10 border-2 border-[#00C4CD] flex items-center justify-center rounded-full">
            <span className="text-[#00C4CD] text-xl">↓</span>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-[#00C4CD] font-semibold uppercase tracking-widest text-sm">
              Welcome to Our Clinic
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#003A80] mt-4 leading-tight">
              Holistic Healing <br /> Through Expert Physiotherapy
            </h1>

            <div className="w-24 h-1 bg-[#00C4CD] mt-6 rounded-full"></div>

            <p className="text-gray-600 text-lg mt-8 leading-relaxed">
              Our Rehab center is designed to restore balance, reduce pain,
              and help you regain mobility through scientifically proven
              physiotherapy treatments and mindful movement.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At our clinic, we believe in the perfect synergy of physiotherapy
              and Pilates, blending expert care with mindful movement.
            </p>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Under the expertise of

              <span className="font-semibold text-[#003A80]">
  {" "}
  <Link to="/profile" className="hover:underline">
    Dr. Mayank Gupta (BPT)
  </Link>
</span>
              we provide specialized care in Physical Medicine and Rehabilitation.
            </p>

            <div className="mt-8 bg-[#003A80] text-white p-5 rounded-xl">
              <p className="text-lg font-semibold">
                Dedicated to providing compassionate care and effective treatment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Offering Section */}
      <Offering />
      <Appointment></Appointment>

      {/* Instagram Section */}



      <section className="py-24 px-6 bg-gray-50">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

{/* LEFT SIDE */}
<div>

<div className="flex items-center gap-3 text-[#00C4CD] font-semibold mb-6">
<FaInstagram className="text-2xl"/>
<span>Instagram</span>
</div>

<h2 className="text-5xl font-bold text-gray-900 leading-tight">
Follow us on <br/>
<span className="text-[#003A80]">@movementrehab</span>
</h2>

<p className="mt-6 text-gray-600 text-lg max-w-md">
Discover expert physiotherapy tips, rehabilitation exercises,
injury prevention advice, and inspiring recovery stories shared
by our Movement Rehab specialists.
</p>

<button className="mt-8 flex items-center gap-3 px-8 py-4 bg-[#003A80] text-white rounded-full font-semibold hover:bg-[#002a5e] transition">
Visit Instagram
<FaArrowRight/>
</button>

</div>


{/* RIGHT SIDE */}
<div className="bg-white p-8 rounded-3xl shadow-xl">

<div className="grid grid-cols-3 gap-6">

{posts.map((post,index)=>(
<div key={index} className="overflow-hidden rounded-xl">

<img
src={post}
className="w-full h-40 object-cover hover:scale-110 transition duration-500"
/>

</div>
))}

</div>

<p className="text-center text-gray-500 mt-6">
Follow us for physiotherapy tips, recovery exercises & health updates
</p>

</div>

</div>

</section>
{/* CTA button */}
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
<Chatbot></Chatbot>
</section>
    </div>
  );
};

export default Home;