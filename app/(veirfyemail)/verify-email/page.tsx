"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";
import Link from "next/link";

const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string>("Verifying your email, please wait...");
  const [heading, setHeading] = useState<string>("Verifying Email...");
  const [headingColor, setHeadingColor] = useState<string>("text-teal-600");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");
      const type = searchParams.get("type");
      const email = searchParams.get("email");

      if (!token || !email || type !== "signup") {
        setHeading("Oops!");
        setHeadingColor("text-red-600");
        setMessage("It seems there's an issue with the verification link. You can still explore our causes and donate!");
        setLoading(false);
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          email,
          token,
          type: "signup",
        });

        if (error) {
          console.error("OTP Verification Error:", error.message);
          setHeading("Oops!");
          setHeadingColor("text-red-600");
          setMessage(
            "We're experiencing a technical issue verifying your email. You can still explore our causes and make donations while we resolve this issue."
          );
        } else {
          setHeading("Thank You!");
          setHeadingColor("text-teal-600");
          setMessage("Your email has been successfully verified! 🎉");
        }
      } catch (err) {
        console.error("Unexpected Error:", err);
        setHeading("Oops!");
        setHeadingColor("text-red-600");
        setMessage(
          "We encountered an unexpected error. Please try again later or reach out to our support team for help. In the meantime, you can explore our causes and donate to make an impact!"
        );
      }

      setLoading(false);
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 animate-fadeIn">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <h1 className={`text-5xl sm:text-6xl md:text-8xl font-extrabold ${headingColor} mb-6 animate-bounce`}>
          {heading}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 animate-fadeInDelay">
          {loading ? "Verifying your email..." : message}
        </p>
        {!loading && heading === "Oops!" && (
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 animate-fadeInDelay2">
            This might be a technical issue on our end. You can still{" "}
            <Link href="/causes" className="text-teal-500 hover:underline">
              explore causes
            </Link>{" "}
            or{" "}
            <Link href="/donate" className="text-teal-500 hover:underline">
              make a donation
            </Link>{" "}
            while we resolve the issue. Thank you for your patience and support!
          </p>
        )}
        {!loading && heading === "Thank You!" && (
          <p className="text-teal-600 text-sm sm:text-base md:text-lg mb-6 animate-fadeInDelay2">
            Your email has been successfully verified. You can now explore our platform and make an impact!
          </p>
        )}
        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="border border-teal-500 text-teal-500 py-3 px-6 rounded-md hover:bg-teal-100 transition transform hover:scale-105 focus:ring focus:ring-teal-300 w-full sm:w-auto"
          >
            Go Home
          </Link>
          <Link
            href="/causes"
            className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition transform hover:scale-105 focus:ring focus:ring-teal-300 w-full sm:w-auto"
          >
            View Causes
          </Link>
          <Link
            href="/causes"
            className="border border-teal-600 text-teal-600 py-3 px-6 rounded-md hover:bg-teal-100 transition transform hover:scale-105 focus:ring focus:ring-teal-300 w-full sm:w-auto"
          >
            Make a Donation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
