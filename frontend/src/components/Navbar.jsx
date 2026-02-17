import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-blue-900 via-teal-700 to-cyan-500 text-white shadow-lg sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-50 h-15 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-lg items-center">

          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="cursor-pointer hover:text-yellow-400 transition">
              Services ▾
            </span>

            {servicesOpen && (
              <div className="absolute top-8 left-0 bg-white text-gray-800 shadow-xl rounded-xl w-64 p-4 space-y-2 animate-fadeIn">

                {[
                  { name: "Life Insurance", link: "/services#life" },
                  { name: "Mediclaim", link: "/services#mediclaim" },
                  { name: "Personal Accident", link: "/services#accident" },
                  { name: "Vehicle Insurance", link: "/services#vehicle" },
                  { name: "Society / Fire", link: "/services#society" },
                  { name: "Machinery Insurance", link: "/services#machinery" },
                  { name: "Banking Claims", link: "/services#banking" },
                  { name: "Postal Schemes", link: "/services#postal" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-3 py-2 rounded-lg hover:bg-blue-100 transition"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>
            )}
          </div>
          <Link to="/blog" className="hover:text-yellow-400 transition">
            Blog
          </Link>

          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

          <Link
            to="/query"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Query Form
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-6 pb-4 flex flex-col gap-4 text-lg font-medium">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

          {/* MOBILE SERVICES DROPDOWN */}
          <div>
            <div
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="cursor-pointer flex justify-between items-center"
            >
              Services ▾
            </div>

            {mobileServicesOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-base">

                {[
                  { name: "Life Insurance", link: "/services#life" },
                  { name: "Mediclaim", link: "/services#mediclaim" },
                  { name: "Personal Accident", link: "/services#accident" },
                  { name: "Vehicle Insurance", link: "/services#vehicle" },
                  { name: "Society / Fire", link: "/services#society" },
                  { name: "Machinery Insurance", link: "/services#machinery" },
                  { name: "Banking Claims", link: "/services#banking" },
                  { name: "Postal Schemes", link: "/services#postal" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-yellow-300"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>
            )}
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <Link
            to="/query"
            onClick={() => setMenuOpen(false)}
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold text-center"
          >
            Query Form
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
