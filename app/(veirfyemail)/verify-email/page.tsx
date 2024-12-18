"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/utils/supabaseClient"; // Your supabase client
import Link from "next/link";

const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string>("Verifying your email, please wait...");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyEmail = async () => {
      // Get the token and type from URL query params
      const token = searchParams.get("token");
      const type = searchParams.get("type");
      const email = searchParams.get("email");

      // Debug logging
      console.log("Token:", token);
      console.log("Type:", type);
      console.log("Email:", email);

      if (!token || !email || type !== "signup") {
        setMessage("An Error occured while Verifying your email! Please try this later.");//Invalid or expired verification link. Please try again.
        setLoading(false);
        return;
      }

      try {
        // Verify the OTP with the token received in the URL
        const { error } = await supabase.auth.verifyOtp({
          email,   // Ensure the email is passed here
          token,   // The token from the URL
          type: "signup", // The type of verification
        });

        if (error) {
          console.error("OTP Verification Error:", error.message);
          setMessage("We couldn't verify your email. Please check the link and try again later.");
        } else {
          setMessage("Your email has been successfully verified!");
        }
      } catch (err) {
        console.error("Unexpected Error:", err);
        setMessage("Something went wrong. Please try again later.");
      }

      setLoading(false);
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Email Verification</h1>
        <div className="mt-4 text-center">
          {loading ? (
            <p className="text-gray-600">Verifying...</p>
          ) : (
            <p className="text-red-600 font-semibold">{message}</p>
          )}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            If you didn’t receive the email, check your spam folder or{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              request a new verification link
            </Link>.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="text-blue-600 hover:underline text-lg"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
