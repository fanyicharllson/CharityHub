"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      if (res.error.includes("invalid")) {
        setError("Invalid username or password!");
      } else {
        setError("Invalid username or password!"); //An unexpected error occurred
      }
    } else if (res?.ok) {
      // Redirect to home page on successful login
      router.push("/info");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl transform transition lg:hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl max-sm:text-2xl font-extrabold text-gray-800 mb-6 text-center tracking-tight animate-fade-in">
          Welcome Back
        </h2>

        {/* Error Banner */}
        {error && (
          <div className="mb-4 bg-red-100 text-red-600 p-3 rounded-lg text-center border border-red-300 animate-slide-down">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white text-sm tracking-wide shadow-md transition-transform focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 ${
              loading
                ? "bg-teal-300 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600 hover:-translate-y-0.5"
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 flex justify-between max-sm:flex-col items-center text-sm text-gray-600">
          <div>
            <Link
              href="/forgot-password"
              className="text-teal-500 hover:text-teal-600 transition-all hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex gap-1">
            <p>Don`t have an account? </p>
            <Link
              href="/signup"
              className="text-teal-500 hover:text-teal-600 transition-all hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
