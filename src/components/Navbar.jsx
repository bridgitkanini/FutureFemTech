import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // Get the current location (route) using useLocation hook
  const location = useLocation();

  // Determine if the current route is the landing page (e.g., '/')
  const isLandingPage = location.pathname === "/";

  return (
    <div>
      <nav className="bg-yellow-500 bg-opacity-70 backdrop-blur-lg fixed top-0 left-0 right-0 py-3 px-10 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-black">FutureFemTeck</h2>
          <div className="hidden md:flex md:items-center space-x-6">
            {/* Conditionally render Login and Sign Up links */}
            {isLandingPage && (
              <>
                <Link className="text-black hover:text-blue-900" to="/login">
                  Login
                </Link>
                <Link className="text-black hover:text-blue-900" to="/sign-up">
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div>
            {/* Conditionally render the other links (only if not on landing page) */}
            {!isLandingPage && (
              <div className="flex gap-6">
                <Link className="text-black hover:text-blue-900" to="/home">
                  Home
                </Link>
                <Link
                  className="text-black hover:text-blue-900"
                  to="/career-form"
                >
                  Careers
                </Link>
                <Link
                  className="text-black hover:text-blue-900"
                  to="/mentorship"
                >
                  Mentorship
                </Link>
                <Link
                  className="text-black hover:text-blue-900"
                  to="/scholarships"
                >
                  Scholarships
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
