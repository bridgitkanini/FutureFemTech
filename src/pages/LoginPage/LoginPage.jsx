import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 min-h-[60vh] md:min-h-screen bg-gray-100 px-2">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Login Form
          </h2>
          <form action="">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                <i className="fa-regular fa-user mr-2"></i> Enter Your Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="First Name Last Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                <i className="fa-regular fa-envelope mr-2"></i> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-1"
              >
                <i className="fa-solid fa-lock mr-2"></i> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
              >
                <i className="fa-solid fa-right-to-bracket mr-2"></i> Log in
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
