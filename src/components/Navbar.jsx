import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  // Navlinks for both landing and other pages
  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/career-form", label: "Careers" },
    { to: "/mentorship", label: "Mentorship" },
    { to: "/scholarships", label: "Scholarships" },
  ];
  const authLinks = [
    { to: "/login", label: "Login" },
    { to: "/sign-up", label: "Sign Up" },
  ];

  return (
    <nav className="bg-yellow-500 bg-opacity-70 backdrop-blur-lg fixed top-0 left-0 right-0 py-3 px-4 md:px-10 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-lg font-bold text-black">FutureFemTeck</h2>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-2 py-1 text-black focus:outline-none"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Desktop navlinks */}
        <div className="hidden md:flex ml-auto items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.to} className="text-black hover:text-blue-900" to={link.to}>
              {link.label}
            </Link>
          ))}
          {isLandingPage && authLinks.map((link) => (
            <Link key={link.to} className="text-black hover:text-blue-900" to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile navlinks dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-yellow-500 bg-opacity-95 px-4 pt-2 pb-4 flex flex-col space-y-3 shadow-lg absolute left-0 right-0 top-full z-50 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              className="text-black hover:text-blue-900 py-2 border-b border-yellow-300"
              to={link.to}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {isLandingPage && authLinks.map((link) => (
            <Link
              key={link.to}
              className="text-black hover:text-blue-900 py-2 border-b border-yellow-300"
              to={link.to}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
