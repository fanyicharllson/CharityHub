"use client";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Icons for inputs
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to sign up");
      }

      setEmailSent(true);
      setTimeout(() => {
        router.push("/signin"); // Redirect to sign in page after some time
      }, 10000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl transform transition lg:hover:scale-105 hover:shadow-2xl">
        <h2 className="md:text-3xl max-sm:text-2xl font-extrabold text-gray-800 mb-4 text-center tracking-tight animate-fade-in">
          Join Our Community
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Together, we can make a difference. Sign up to support a cause that
          matters.
        </p>
        {emailSent && (
          <div className="mb-4 bg-yellow-100 text-yellow-800 p-3 rounded-lg text-center border border-yellow-300 animate-slide-down">
            <p>
              A verification email has been sent to your email address. Please
              verify your email before logging in.
            </p>
          </div>
        )}

        {/* Error Banner */}
        {error && (
          <div className="mb-4 bg-red-100 text-red-600 p-3 rounded-lg text-center border border-red-300 animate-slide-down">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div className="relative">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-teal-400">
              <div className="px-3 text-gray-400 hover:text-teal-500 transition">
                <FaUser />
              </div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-3 focus:outline-none rounded-lg placeholder-gray-400"
                placeholder="Your username"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-teal-400">
              <div className="px-3 text-gray-400 hover:text-teal-500 transition">
                <FaEnvelope />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-3 focus:outline-none rounded-lg placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-teal-400">
              <div className="px-3 text-gray-400 hover:text-teal-500 transition">
                <FaLock />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-3 focus:outline-none rounded-lg placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Sign-Up Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white text-sm tracking-wide shadow-md transition-transform focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 ${
              loading
                ? "bg-teal-300 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600 hover:-translate-y-0.5"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <ImSpinner2 className="animate-spin h-5 w-5 text-white" />
                <span>Creating Account...</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
          <Link
            href="/signin"
            className="text-teal-500 hover:text-teal-600 transition-all hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
          >
            Already have an account? Log in
          </Link>
          <Link
            href="/forgot-password"
            className="text-teal-500 hover:text-teal-600 transition-all hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
