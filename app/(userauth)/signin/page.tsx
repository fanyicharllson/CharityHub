"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
        setError("Invalid username or password!");//An unexpected error occurred
      }
    } else if (res?.ok) {
      // Redirect to home page on successful login
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl mb-6 text-center font-semibold">Sign In</h2>
        
        {/* Error Banner */}
        {error && (
          <div className="mb-4 bg-red-100 text-red-700 p-3 rounded-md text-center border border-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded focus:outline-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded focus:outline-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
