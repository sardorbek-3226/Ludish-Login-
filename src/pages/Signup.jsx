import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532619675605-1a9caa094f3b?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <Link to="/">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Sign Up
          </button>
          </Link>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?
          <Link to="/login">
          <button className="text-blue-600 hover:underline ml-3">
            Login
          </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
