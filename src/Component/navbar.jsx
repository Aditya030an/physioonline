

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "./photos/MRlogo1.png"
// const Navbar = () => {
//   const location = useLocation();
//   const hideNavbar = location.pathname.startsWith("/dashboard");

//   if (hideNavbar) {
//     return null;
//   }

//   return (
//     <div>
//       <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 px-12 bg-transparent z-50">
        
//       <div className="flex items-center">
//   <a href="/" className="flex items-center gap-2">
//     <img
//       src={logo}
//       alt="Movement Rehab Logo"
//       className="h-20 w-auto"
//     />
//   </a>
// </div>

//         <ul className="hidden md:flex gap-10 text-xl uppercase items-center">
          
//           <li className="py-2">
//             <Link to="/" className="text-black">Home</Link>
//           </li>

//           <li className="py-2">
//             <Link to="/Service" className="text-black">Services</Link>
//           </li>

//           <li className="py-2">
//             <Link to="/About" className="text-black">About</Link>
//           </li>


//           <li className="py-2">
//             <Link to="/Book" className="text-black">Book Online</Link>
//           </li>

//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./photos/MRlogo1.png";

const Navbar = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard");

  const [isOpen, setIsOpen] = useState(false);

  if (hideNavbar) {
    return null;
  }

  return (
    <nav className="absolute top-0 left-0 w-full bg-white shadow-sm border-b z-50">

      <div className="flex items-center justify-between px-6 md:px-12 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Movement Rehab Logo"
            className="h-12 md:h-14 lg:h-16 w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 lg:gap-10 text-base lg:text-lg uppercase items-center">

          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/Service"
              className="text-black hover:text-gray-600 transition"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/About"
              className="text-black hover:text-gray-600 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/Blogs"
              className="text-black hover:text-gray-600 transition"
            >
              Blogs
            </Link>
          </li>

          <li>
            <Link
              to="/Book"
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Book Online
            </Link>
          </li>

        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">

          <ul className="flex flex-col items-center gap-6 py-6 text-lg uppercase">

            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-gray-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/Service"
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-gray-600"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-gray-600"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/Blogs"
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-gray-600"
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                to="/Book"
                onClick={() => setIsOpen(false)}
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Book Online
              </Link>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
};

export default Navbar;