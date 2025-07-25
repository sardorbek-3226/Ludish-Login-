import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    console.log("Submitted:", { email, password });

    try {
      const datada = {
        success: email === "test@example.com" && password === "password123",
        user:
          email === "test@example.com" && password === "password123"
            ? { id: 1, email, name: "Test User" }
            : null,
        message: "Invalid credentials",
      };

      if (datada.success) {
        dispatch(login(datada.user));
        navigate("/");
      } else {
        setError(datada.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        {error && (
          <div className="text-red-600 text-center mb-4 font-medium">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black/70 hover:bg-black text-white py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-md text-center text-gray-600 mt-4">
          Don't have an account?
          <Link to="/Singup" className="text-blue-700 ml-2">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
