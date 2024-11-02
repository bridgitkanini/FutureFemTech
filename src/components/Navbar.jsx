import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-yellow-500 bg-opacity-70 backdrop-blur-lg fixed top-0 left-0 right-0 py-3 px-10 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <a className="text-lg font-bold text-blue-700" href="#">FutureFemTeck</a>
                    <button
                        className="text-blue-700 md:hidden focus:outline-none"
                        type="button"
                        aria-label="Toggle navigation"
                    >
                        <span className="text-2xl">&#9776;</span>
                    </button>
                    <div className="hidden md:flex md:items-center space-x-6">
                        <Link className="text-blue-700 hover:text-blue-900" to="/home">Home</Link>
                        <a className="text-blue-700 hover:text-blue-900" href="#">About Us</a>
                        <a className="text-blue-700 hover:text-blue-900" href="#">Contact Us</a>
                        <div className="relative group">
                            <a
                                className="text-blue-700 hover:text-blue-900 cursor-pointer"
                                role="button"
                                aria-haspopup="true"
                            >
                                More
                            </a>
                            <ul className="absolute hidden group-hover:block bg-white text-gray-800 shadow-md mt-2 rounded">
                                <li>
                                    <a className="block px-4 py-2 hover:bg-gray-200" href="login.html">Login</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 hover:bg-gray-200" href="signup.html">Sign Up</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 hover:bg-gray-200" href="#">FAQs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
