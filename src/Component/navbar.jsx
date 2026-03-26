

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



import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./photos/MRlogo1.png";

const Navbar = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard");

  if (hideNavbar) {
    return null;
  }

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 px-12 bg-white shadow-sm border-b z-50">
        
        {/* LOGO */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Movement Rehab Logo"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-10 text-lg uppercase items-center">
          
          <li>
            <Link to="/" className="text-black hover:text-gray-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/Service" className="text-black hover:text-gray-600 transition">
              Services
            </Link>
          </li>

          <li>
            <Link to="/About" className="text-black hover:text-gray-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/Blogs" className="text-black hover:text-gray-600 transition">
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

      </nav>
    </div>
  );
};

export default Navbar;