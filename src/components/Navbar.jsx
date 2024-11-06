import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-yellow-500 bg-opacity-70 backdrop-blur-lg fixed top-0 left-0 right-0 py-3 px-10 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-black">FutureFemTeck</h2>
                    <div className="hidden md:flex md:items-center space-x-6">
                        <Link className="text-black hover:text-blue-900" to="/login">Login</Link>
                        <Link className="text-black hover:text-blue-900" to="/sign-up">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
